<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 23/05/2018
 * Time: 19:57
 */

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    /**
     * @Route("/index", name="index")
     * @Route("/")
     */
    public function index()
    {

        return $this->render('index/index.html.twig');
    }

    /**
     * @Route("/coming_soon")
     */
    public function comingsoon()
    {
        return $this->render('index/coming_soon.html.twig');

    }
}
=======
    /**
     * @Route("/coming_soon")
     */
    public function comingsoon()
    {
        return $this->render('index/coming_soon.html.twig');

    }
}
