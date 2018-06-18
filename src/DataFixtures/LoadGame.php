<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 03/06/2018
 * Time: 10:38
 */

namespace App\DataFixtures;


use App\Entity\Game;
use App\Entity\User;
use App\Entity\UserGame;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class LoadGame extends Fixture implements OrderedFixtureInterface
{
    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        //création du game
        $game = new Game();
        $game->setName('League Of Legends');
        $game->setSlug('League-of-Legends');


        //User_game Diamant
/*
        $diamant = new UserGame();
        $diamant->setPseudo('VespaMaster');
        $diamant->setRank('diamant');
        $diamant->setElo('45');
        $diamant->setPoste('adc');
        $diamant->setMaxRank('master');
        $diamant->setMaxElo('120');
        $diamant->setExperiences('team du bled');
        $diamant->setObjectifs('gagner une lan');
        $diamant->setUser($this->getDoctrine()->getRepository(User::class)->getId());

        $diamant1 = new UserGame();
        $diamant1->setPseudo('Nanowatt');
        $diamant1->setRank('diamant');
        $diamant1->setElo('20');
        $diamant1->setPoste('mid');
        $diamant1->setMaxRank('diamant');
        $diamant1->setMaxElo('98');
        $diamant1->setExperiences('team pas du bled');
        $diamant1->setObjectifs('gagner une lan voir 2');
        $diamant1->setUser(getUser()->getId());


        $diamant2 = new UserGame();
        $diamant2->setPseudo('Dolonoy');
        $diamant2->setRank('diamant');
        $diamant2->setElo('54');
        $diamant2->setPoste('top');
        $diamant2->setMaxRank('diamant');
        $diamant2->setMaxElo('98');
        $diamant2->setExperiences('team pas du bled');
        $diamant2->setObjectifs('gagner une lan voir 2');
        $diamant2->setUser(getUser()->getId());

        $diamant3 = new UserGame();
        $diamant3->setPseudo('Letmetop1');
        $diamant3->setRank('diamant');
        $diamant3->setElo('500');
        $diamant3->setPoste('jungle');
        $diamant3->setMaxRank('challenger');
        $diamant3->setMaxElo('800');
        $diamant3->setExperiences('team SKT');
        $diamant3->setObjectifs('perdre une lan');
        $diamant3->setUser(getUser()->getId());

        $diamant4 = new UserGame();
        $diamant4->setPseudo('Diablo');
        $diamant4->setRank('diamant');
        $diamant4->setElo('100');
        $diamant4->setPoste('support');
        $diamant4->setMaxRank('challenger');
        $diamant4->setMaxElo('800');
        $diamant4->setExperiences('team SKT');
        $diamant4->setObjectifs('perdre une lan');
        $diamant4->setUser(getUser()->getId());



        //User_game Platine



        $platine = new UserGame();
        $platine->setPseudo('VespaMaster');
        $platine->setRank('platine');
        $platine->setElo('45');
        $platine->setPoste('adc');
        $platine->setMaxRank('master');
        $platine->setMaxElo('120');
        $platine->setExperiences('team du bled');
        $platine->setObjectifs('gagner une lan');
        $platine->setUser(getUser()->getId());


        $platine1 = new UserGame();
        $platine1->setPseudo('Nanowatt');
        $platine1->setRank('platine');
        $platine1->setElo('20');
        $platine1->setPoste('mid');
        $platine1->setMaxRank('platine');
        $platine1->setMaxElo('98');
        $platine1->setExperiences('team pas du bled');
        $platine1->setObjectifs('gagner une lan voir 2');
        $platine1->setUser(getUser()->getId());


        $platine2 = new UserGame();
        $platine2->setPseudo('Dolonoy');
        $platine2->setRank('platine');
        $platine2->setElo('54');
        $platine2->setPoste('top');
        $platine2->setMaxRank('platine');
        $platine2->setMaxElo('98');
        $platine2->setExperiences('team pas du bled');
        $platine2->setObjectifs('gagner une lan voir 2');
        $platine2->setUser(getUser()->getId());

        $platine3 = new UserGame();
        $platine3->setPseudo('Letmetop1');
        $platine3->setRank('platine');
        $platine3->setElo('500');
        $platine3->setPoste('jungle');
        $platine3->setMaxRank('challenger');
        $platine3->setMaxElo('800');
        $platine3->setExperiences('team SKT');
        $platine3->setObjectifs('perdre une lan');
        $platine3->setUser(getUser()->getId());

        $platine4 = new UserGame();
        $platine4->setPseudo('Diablo');
        $platine4->setRank('platine');
        $platine4->setElo('100');
        $platine4->setPoste('support');
        $platine4->setMaxRank('challenger');
        $platine4->setMaxElo('800');
        $platine4->setExperiences('team SKT');
        $platine4->setObjectifs('perdre une lan');
        $platine4->setUser(getUser()->getId());
*/

        $manager->persist($game);
   /*     $manager->persist($diamant);
        $manager->persist($diamant1);
        $manager->persist($diamant2);
        $manager->persist($diamant3);
        $manager->persist($diamant4);
        $manager->persist($platine);
        $manager->persist($platine1);
        $manager->persist($platine2);
        $manager->persist($platine3);
        $manager->persist($platine4);*/
        $manager->flush();

    }
    /**
     * This method must return an array of fixtures classes
     * on which the implementing class depends on
     *
     * @return array
     */
    public function getDependencies()
    {
        return array(
            LoadUser::class,
        );
    }

    /**
     * Get the order of this fixture
     *
     * @return integer
     */
    public function getOrder()
    {
return 2;
    }

}