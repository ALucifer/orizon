<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 23/05/2018
 * Time: 19:57
 */

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserGame;
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
        $results = $this->getDoctrine()->getRepository(UserGame::class)->findAll();

        $resultsadc = $this->getDoctrine()->getRepository(UserGame::class)->ResultsAdc();
        $countadc = $this->getDoctrine()->getRepository(UserGame::class)->CountAdc();

        $resultsjgl = $this->getDoctrine()->getRepository(UserGame::class)->ResultsJungle();
        $countjgl = $this->getDoctrine()->getRepository(UserGame::class)->CountJungle();

        $resultstop = $this->getDoctrine()->getRepository(UserGame::class)->ResultsTop();
        $counttop = $this->getDoctrine()->getRepository(UserGame::class)->CountTop();
        
        $resultsmid = $this->getDoctrine()->getRepository(UserGame::class)->ResultsMid();
        $countmid = $this->getDoctrine()->getRepository(UserGame::class)->CountMid();
        
        $resultssupport = $this->getDoctrine()->getRepository(UserGame::class)->ResultsSupport();
        $countsupport = $this->getDoctrine()->getRepository(UserGame::class)->CountSupport();
        
        
        return $this->render('index/index.html.twig', [
            'adc'=> $resultsadc, 'countadc'=>$countadc,
            'jgl'=>$resultsjgl, 'countjgl'=>$countjgl,
            'mid'=>$resultsmid, 'countmid'=>$countmid,
            'top'=>$resultstop, 'counttop'=>$counttop,
            'support'=>$resultssupport, 'countsupport'=>$countsupport,
            'results'=>$results
        ]);
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
        return $this->render('index/sidebar.html.twig');
    }

}
