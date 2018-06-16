<?php

namespace App\Controller;

use App\Controller\Utils\User\UserHandler;
use App\Entity\UserInformation;
use App\Form\ReseauxSociauxType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UserController extends Controller
{

    /**
     * @Route("/profile", name="user_profile")
     *
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     *
     * @return Response
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
     * @return Response
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
     * @return Response
     */
    public function reseauxSociaux(Request $request, UserHandler $userHandler)
    {
        $reseauxForm = $userHandler->createForm($this->getUser());

        if($userHandler->process($reseauxForm, $request)) {
            $userHandler->success($reseauxForm->getData());
        }

        return $this->render('user/reseaux-sociaux.html.twig', [
            'user' => $this->getUser(),
            'reseauxForm' => $reseauxForm->createView()
        ]);
    }

    /**
     * @Route("/mes-jeux", name="user_mes_jeux")
     *
     * @param Request $request
     * @return Response
     */
    public function mesJeux(Request $request)
    {
        return $this->render('user/mes-jeux.html.twig',[
            'user' => $this->getUser()
        ]);
    }
}
