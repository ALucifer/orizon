<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 23/05/2018
 * Time: 19:57
 */

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    /**
     * @Route("/index", name="index")
     * @Route("/", name="index")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        $data = $this->getDoctrine()->getRepository(User::class)->Results();
        $count = $this->getDoctrine()->getRepository(User::class)->CountUser();


        return $this->render('index/index.html.twig', ['data'=> $data, 'count'=>$count]);
    }

    /**
     * @Route("/coming-soon")
     */
    public function comingsoon()
    {
        return $this->render('index/coming_soon.html.twig');

    }

    public function sidebar()
    {

    }
}
