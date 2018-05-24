<?php

namespace App\Controller;

use App\Controller\Utils\Game\GameHandler;
use App\Entity\Game;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class GameController
 * @package App\Controller
 *
 * @Route("/jeux", name="game_")
 */
class GameController extends Controller
{
    /**
     * @Route("/", name="index")
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
     * @Route("/add", name="add")
     *
     * @param Request $request
     * @param GameHandler $handler
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request, GameHandler $handler)
    {

        $game = new Game();
        $form = $handler->createForm($game);

        if ($handler->process($form, $request)) {
            $handler->success($game);
            $this->addFlash('success', 'Ce jeu à bien été ajouté à la liste de vos jeux');
            return $this->redirectToRoute('game_index');
        }

        return $this->render("game/add.html.twig", [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/show/{slug}", name="show")
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
