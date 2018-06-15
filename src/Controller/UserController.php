<?php

namespace App\Controller;

use App\Controller\Utils\User\UserHandler;
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
     * @param UserHandler $userHandler
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function reseauxSociaux(Request $request, UserHandler $userHandler)
    {
        $userRepository = $this->getDoctrine()->getRepository(UserInformation::class);

        $useFacebook =  $userRepository->findOneBy(['user' => $this->getUser()]);
        $userTwitter = $userRepository->findOneBy(['user' => $this->getUser()]);

        $facebookForm = $userHandler->createReseauForm($this->getUser(),'facebook');
        $twitterForm = $userHandler->createReseauForm($this->getUser(), 'twitter');

        if($userHandler->process($facebookForm, $request)) {

        }

        if($userHandler->process($twitterForm, $request)) {

        }

        return $this->render('user/reseaux-sociaux.html.twig', [
            'user' => $this->getUser(),
            'facebook' => $facebookForm->createView(),
            'twitter' => $twitterForm->createView()
        ]);
    }
}
