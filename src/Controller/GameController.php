<?php

namespace App\Controller;

use App\Entity\Game;
use App\Form\GameType;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class GameController extends Controller
{
    /**
     * @Route("/jeux", name="game_index")
     *
     * @param GameRepository $gameRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
   public function index(GameRepository $gameRepository)
   {
        return $this->render("game/index.html.twig", [
            'games' => $gameRepository->findAll()
        ]);
   }

    /**
     * @Route("/jeux/add", name="game_add")
     *
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request)
    {

        $game = new Game();

        $form = $this->createForm(GameType::class, $game);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $game = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($game);
            $em->flush();
            $this->addFlash('success', 'Ce jeu à bien été ajouté à la liste de vos jeux');
            return $this->redirectToRoute('game_index');
        }

        return $this->render("game/add.html.twig", [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/jeux/show/{slug}", name="game_show")
     *
     * @param Game $game
     * @return \Symfony\Component\HttpFoundation\Response
     */
   public function show(Game $game)
   {
        return $this->render("game/show.html.twig", [
            'game' => $game
        ]);
   }

}
