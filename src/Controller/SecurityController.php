<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 26/04/2018
 * Time: 20:55
 */

namespace App\Controller;


use App\Entity\User;
use App\Form\ForgotPasswordType;
use App\Form\InscriptionType;
use App\Form\ResetPasswordType;
use Doctrine\DBAL\Exception\ConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SecurityController extends Controller
{

    /**
     * @Route("/inscription", name="inscription")
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function createUser(Request $request, EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        $user = new User();
        $form = $this->createForm(InscriptionType::class, $user);
        try {
            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {

                // 3) Encode the password (you could also do this via Doctrine listener)
                $password = $passwordEncoder->encodePassword($user, $user->getPassword());
                $user->setPassword($password);
                $user->setRoles(['ROLE_UTILISATEUR']);

                // 4) save the User!
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();

                return $this->redirectToRoute('login');
            }
        }catch(ConstraintViolationException $e){
            $this->addFlash('error', 'L\'adresse email existe déjà');
        }
        return $this->render('security/inscription.html.twig', ['form'=>$form->createView()]);


    }

    /**
     * @Route("/login", name="login")
     * @param Request $request
     * @param AuthenticationUtils $authenticationUtils
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error'         => $error,
        ]);
    }

    /**
     * @Route("/forgotPassword", name="forgot_Password")
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function forgotPassword(Request $request, TokenGeneratorInterface $tokenGenerator)
    {
        if ($request->isMethod('post')) {
             $user = $this->getDoctrine()->getManager()
                ->getRepository(User::class)
                ->findOneBy(
                    ['email' => $request
                        ->request
                        ->get('forgot_password')['email'],
                    ]
                );
        } else {
             $user = new User();
        }
        $form = $this->createForm(ForgotPasswordType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $user = $form->getData();
            $user->setToken($tokenGenerator->generateToken());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('login');
        }

        return $this->render('security/forgot_password.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Seul les utilisateurs non authentifié peuvent avoir accès a leur reset.
     *
     * @Route("/reset-password/{token}", name="reset_password", requirements={"token"}, methods={"GET|POST"})
     * @Entity("user", expr="repository.findOneByToken(token)")
     * @param User $user
     * @param Request $request
     * @param $token
     * @return \Symfony\Component\HttpFoundation\Response
     */
    // Si il n'y a pas d'utilisateur c'est qu'il n'a pas fait de demande de mot de passe
    // Ou de le token n'est plus valide dans la periode voulu
    public function resetPassword( Request $request, User $user)
    {
        if (!$user || ($user->getTokenExpire()->format('Y-m-d H:i:s') < date('Y-m-d H:i:s'))) {
            throw $this->createNotFoundException('Votre token de remise à jour de votre mot de passe est incorrect.');
        }
        $form = $this->createForm(ResetPasswordType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {
            $user = $form->getData();
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('inscription');
        }


        return $this->render('security/reset-password.html.twig', [
            'form' => $form->createView(),
        ]);
    }


}