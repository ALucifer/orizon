<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UserController extends Controller
{

    /**
     * @Route("/profile", name="user_profile")
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
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function reseauxSociaux()
    {
        return $this->render('user/reseaux-sociaux.html.twig', [
            'user' => $this->getUser()
        ]);
    }
}
