<?php
/**
 * Created by PhpStorm.
 * User: coubardalexis
 * Date: 20/05/2018
 * Time: 11:35
 */

namespace App\Controller\Utils\Game;


use App\Controller\Utils\AbstractHandler;
use App\Form\GameType;

class GameHandler extends AbstractHandler
{

    public function createForm($game)
    {
        return $this->formFactory->create(GameType::class, $game);
    }

    public function success($game)
    {
        $this->em->persist($game);
        $this->em->flush();
    }
}