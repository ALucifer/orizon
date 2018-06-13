<?php

namespace App\Controller;

use App\Entity\UserInformation;
use App\Form\ReseauxSociauxType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UserController extends Controller
{

    /**
     * @Route("/profile", name="user_profile")
     *
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function profile()
    {
        return $this->render('user/profile.html.twig',[
            'user' => $this->getUser()
        ]);
    }

    /**
     * @Route("/informations-general", name="user_info_general")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function infoGeneral()
    {
        return $this->render('user/info-general.html.twig', [
            'user' => $this->getUser()
        ]);
    }

    /**
     * @Route("/reseaux-sociaux", name="user_reseaux_sociaux")
     *
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     *
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function reseauxSociaux(Request $request)
    {
        $userInformation = $this
            ->getDoctrine()
            ->getRepository(UserInformation::class)
            ->findOneBy(['user' => $this->getUser()]);
        // Si il n'y a pas d'information renseigné alors on en créer une nouvelle
        if (!$userInformation) {
            $userInformation = new UserInformation();
            $userInformation->setUser($this->getUser());
        }
        $facebookForm = $this->createForm(ReseauxSociauxType::class, $userInformation, ['reseau' => 'facebook']);
        $twitterForm = $this->createForm(ReseauxSociauxType::class, $userInformation, ['reseau' => 'twitter']);

        $facebookForm->handleRequest($request);
        $twitterForm->handleRequest($request);

        //dump($facebookForm->isSubmitted(), $twitterForm->isSubmitted());die;

        if($facebookForm->isSubmitted() && $facebookForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($facebookForm->getData());
            $em->flush();
            return $this->render('user/reseaux-sociaux.html.twig', [
                'user' => $this->getUser(),
                'facebook' => $facebookForm->createView(),
                'twitter' => $twitterForm->createView()
            ]);
        }

        if($twitterForm->isSubmitted() && $twitterForm->isValid()) {
            return $this->render('user/reseaux-sociaux.html.twig', [
                'user' => $this->getUser(),
                'facebook' => $facebookForm->createView(),
                'twitter' => $twitterForm->createView()
            ]);
        }


        return $this->render('user/reseaux-sociaux.html.twig', [
            'user' => $this->getUser(),
            'facebook' => $facebookForm->createView(),
            'twitter' => $twitterForm->createView()
        ]);
    }
}
