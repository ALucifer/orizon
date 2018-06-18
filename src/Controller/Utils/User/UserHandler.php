<?php
namespace App\Controller\Utils\User;

use App\Controller\Utils\AbstractHandler;
use App\Entity\User;
use App\Entity\UserInformation;
use App\Form\ReseauxSociauxType;

class UserHandler extends AbstractHandler
{

    public function createForm(User $user)
    {
        $user = $this->getUserInformations($user);

        return $this
            ->formFactory
            ->create(
                ReseauxSociauxType::class,
                $user
            );
    }

    public function success($user)
    {
        $this->em->persist($user);
        $this->em->flush();
    }

    public function process($form, $request)
    {
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            return true;
        }
    }

    /**
     * @param User $user
     * @return UserInformation|null|object
     */
    private function getUserInformations(User $user)
    {
        $userInformation = $this->em->getRepository(UserInformation::class)->findOneBy(['user' => $user]);

        if(!$userInformation){
            return $this->createUserInformation($user);
        }

        return $userInformation;
    }

    /**
     * @return UserInformation
     */
    private function createUserInformation(User $user)
    {
        $userInformation = new UserInformation();
        $userInformation->setUser($user);
        return $userInformation;
    }
}