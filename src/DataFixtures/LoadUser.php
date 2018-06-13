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
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class LoadUser extends Fixture
{
    protected $encode;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->encode = $passwordEncoder;
    }

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
        $password = $this->encode->encodePassword($admin, 'admin');
        $admin->setPassword($password);

        $letme = new User();
        $letme->setName('letme');
        $letme->setFirstName('top1');
        $letme->setEmail('letmetop1@orizon.com');
        $letme->addRole('ROLE_ADMINISTRATEUR');
        $password = $this->encode->encodePassword($letme, 'admin');
        $letme->setPassword($password);

        $lucifer = new User();
        $lucifer->setName('a');
        $lucifer->setFirstName('lucifer');
        $lucifer->setEmail('alucifer@orizon.com');
        $lucifer->addRole('ROLE_ADMINISTRATEUR');
        $password = $this->encode->encodePassword($lucifer,'admin');
        $lucifer->setPassword($password);

        $utilisateur = new User();
        $utilisateur->setName('utilisateur');
        $utilisateur->setFirstName('utilisateur');
        $utilisateur->setEmail('utilisateur@orizon.com');
        $utilisateur->addRole('ROLE_UTILISATEUR');
        $password = $this->encode->encodePassword($utilisateur, 'utilisateur');
        $utilisateur->setPassword($password);

        $structure = new User();
        $structure->setName('structure');
        $structure->setFirstName('structure');
        $structure->setEmail('structure@orizon.com');
        $structure->addRole('ROLE_STRUCTURE');
        $password = $this->encode->encodePassword($structure, 'structure');
        $structure->setPassword($password);

        $game_master = new User();
        $game_master->setName('game');
        $game_master->setFirstName('master');
        $game_master->setEmail('game-master@orizon.com');
        $game_master->addRole('ROLE_GAME_MASTER');
        $password = $this->encode->encodePassword($structure, 'game_master');
        $game_master->setPassword($password);

        $manager->persist($admin);
        $manager->persist($utilisateur);
        $manager->persist($structure);
        $manager->persist($game_master);
        $manager->persist($letme);
        $manager->persist($lucifer);
        $manager->flush();
    }
}