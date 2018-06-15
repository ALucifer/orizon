<?php
namespace App\Controller\Utils\User;

use App\Controller\Utils\AbstractHandler;
use App\Entity\User;
use App\Entity\UserInformation;
use App\Form\ReseauxSociauxType;
use Symfony\Component\Form\FormInterface;

class UserHandler extends AbstractHandler
{

    public function createReseauForm(User $user, $reseau)
    {
        $user = $this->getUserInformations($user);
        return $this
            ->formFactory
            ->create(
                ReseauxSociauxType::class,
                $user,
                [
                    'reseau' => $reseau
                ]
            );
    }

    /**
     * @param User $user
     * @return UserInformation|null|object
     */
    private function getUserInformations(User $user)
    {
        if(!$user){
            return $this->createUser();
        }
        return $this->em->getRepository(UserInformation::class)->findOneBy(['user' => $user]);
    }
    private function createUser()
    {
        return new User();
    }
}