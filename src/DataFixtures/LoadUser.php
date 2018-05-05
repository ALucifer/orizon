<?php
/**
 * Created by PhpStorm.
 * User: coubardalexis
 * Date: 29/04/2018
 * Time: 21:51
 */

namespace App\DataFixtures;


use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class LoadUser extends Fixture
{

    /**
     * Load data fixtures with the passed EntityManager
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setName('admin');
        $admin->setFirstName('admin');
        $admin->setEmail('admin@orizon.com');
        $admin->addRole('ROLE_ADMINISTRATEUR');
        $admin->setPassword('admin');

        $utilisateur = new User();
        $utilisateur->setName('utilisateur');
        $utilisateur->setFirstName('utilisateur');
        $utilisateur->setEmail('utilisateur@orizon.com');
        $utilisateur->addRole('ROLE_UTILISATEUR');
        $utilisateur->setPassword('utilisateur');

        $structure = new User();
        $structure->setName('structure');
        $structure->setFirstName('structure');
        $structure->setEmail('structure@orizon.com');
        $structure->addRole('ROLE_STRUCTURE');
        $structure->setPassword('structure');

        $game_master = new User();
        $game_master->setName('game');
        $game_master->setFirstName('master');
        $game_master->setEmail('game-master@orizon.com');
        $game_master->addRole('ROLE_GAME_MASTER');
        $game_master->setPassword('game-master');

        $manager->persist($admin);
        $manager->persist($utilisateur);
        $manager->persist($structure);
        $manager->persist($game_master);
        $manager->flush();
    }
}