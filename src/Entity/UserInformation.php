<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserInformationRepository")
 */
class UserInformation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $facebook;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $twitter;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $twitch;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", inversedBy="information")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * @param mixed $facebook
     */
    public function setFacebook($facebook): void
    {
        $this->facebook = $facebook;
    }

    /**
     * @return mixed
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * @param mixed $twitter
     */
    public function setTwitter($twitter): void
    {
        $this->twitter = $twitter;
    }

    /**
     * @return mixed
     */
    public function getTwitch()
    {
        return $this->twitch;
    }

    /**
     * @param mixed $twitch
     */
    public function setTwitch($twitch): void
    {
        $this->twitch = $twitch;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user): void
    {
        $this->user = $user;
    }

}
