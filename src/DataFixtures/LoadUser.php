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
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
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
        /* USER ADMIN */
        //user admin
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
        /* UTILISATEUR POUR LE CARROUSSEL DES JOUEURS DIAMANT */

        //User poste adc elo diamant
        $diamant = new User();
        $diamant->setName('Henri');
        $diamant->setFirstName('diamant');
        $diamant->setEmail('diamant@orizon.com');
        $diamant->addRole('ROLE_UTILISATEUR');
        $diamant->setPassword('diamant');

        //User poste mid elo diamant
        $diamant1 = new User();
        $diamant1->setName('Julien');
        $diamant1->setFirstName('nom1');
        $diamant1->setEmail('diamant1@orizon.fr');
        $diamant1->addRole('ROLE_UTILISATEUR');
        $diamant1->setPassword('diamant');

        //User poste jungle elo diamant
        $diamant2 = new User();
        $diamant2->setName('Maxence');
        $diamant2->setFirstName('nom2');
        $diamant2->setEmail('diamant2@orizon.fr');
        $diamant2->addRole('ROLE_UTILISATEUR');
        $diamant2->setPassword('diamant');

        //User poste support elo diamant
        $diamant3 = new User();
        $diamant3->setName('François');
        $diamant3->setFirstName('nom3');
        $diamant3->setEmail('diamant3@orizon.fr');
        $diamant3->addRole('ROLE_UTILISATEUR');
        $diamant3->setPassword('diamant');

        //User poste top elo diamant
        $diamant4 = new User();
        $diamant4->setName('Damien');
        $diamant4->setFirstName('nom4');
        $diamant4->setEmail('diamant4@orizon.fr');
        $diamant4->addRole('ROLE_UTILISATEUR');
        $diamant4->setPassword('diamant');

        /* UTILISATEUR POUR LE CARROUSSEL DES JOUEURS PLATINE */

        //User poste adc elo platine
        $platine = new User();
        $platine->setName('Jean');
        $platine->setFirstName('platine');
        $platine->setEmail('platine@orizon.com');
        $platine->addRole('ROLE_UTILISATEUR');
        $platine->setPassword('platine');

        //User poste mid elo platine
        $platine1 = new User();
        $platine1->setName('Françis');
        $platine1->setFirstName('nom1');
        $platine1->setEmail('platine1@orizon.fr');
        $platine1->addRole('ROLE_UTILISATEUR');
        $platine1->setPassword('platine');

        //User poste jungle elo platine
        $platine2 = new User();
        $platine2->setName('Tony');
        $platine2->setFirstName('nom2');
        $platine2->setEmail('platine2@orizon.fr');
        $platine2->addRole('ROLE_UTILISATEUR');
        $platine2->setPassword('platine');

        //User poste support elo platine
        $platine3 = new User();
        $platine3->setName('Aurelie');
        $platine3->setFirstName('nom3');
        $platine3->setEmail('platine3@orizon.fr');
        $platine3->addRole('ROLE_UTILISATEUR');
        $platine3->setPassword('platine');

        //User poste top elo platine
        $platine4 = new User();
        $platine4->setName('Naruto');
        $platine4->setFirstName('nom4');
        $platine4->setEmail('platine4@orizon.fr');
        $platine4->addRole('ROLE_UTILISATEUR');
        $platine4->setPassword('platine');


        /* USER STRUCTURE / GAME MASTER*/
        //User structure
        $structure = new User();
        $structure->setName('structure');
        $structure->setFirstName('structure');
        $structure->setEmail('structure@orizon.com');
        $structure->addRole('ROLE_STRUCTURE');
        $password = $this->encode->encodePassword($structure, 'structure');
        $structure->setPassword($password);

        //User game_master
        $game_master = new User();
        $game_master->setName('game');
        $game_master->setFirstName('master');
        $game_master->setEmail('game-master@orizon.com');
        $game_master->addRole('ROLE_GAME_MASTER');
        $password = $this->encode->encodePassword($structure, 'game_master');
        $game_master->setPassword($password);



        $manager->persist($admin);
        $manager->persist($diamant);
        $manager->persist($diamant1);
        $manager->persist($diamant2);
        $manager->persist($diamant3);
        $manager->persist($diamant4);
        $manager->persist($platine);
        $manager->persist($platine1);
        $manager->persist($platine2);
        $manager->persist($platine3);
        $manager->persist($platine4);
        $manager->persist($structure);
        $manager->persist($game_master);
        $manager->flush();
    }

}

