<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserGameRepository")
 */
class UserGame
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="games")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Game", inversedBy="users")
     * @ORM\JoinColumn(name="game_id", referencedColumnName="id", nullable=false)
     */
    private $game;

    /**
     * @ORM\Column(type="string")
     */
    private $pseudo;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private $rank;

    /**
     * @ORM\Column(type="integer")
     */
    private $elo;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private $poste;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private $maxRank;

    /**
     * @ORM\Column(type="integer")
     */
    private $maxElo;

    /**
     * @ORM\Column(type="text")
     */
    private $experiences;

    /**
     * @ORM\Column(type="text")
     */
    private $objectifs;

    public function getId()
    {
        return $this->id;
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

    /**
     * @return mixed
     */
    public function getGame()
    {
        return $this->game;
    }

    /**
     * @param mixed $game
     */
    public function setGame($game): void
    {
        $this->game = $game;
    }

    /**
     * @return mixed
     */
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * @param mixed $pseudo
     */
    public function setPseudo($pseudo): void
    {
        $this->pseudo = $pseudo;
    }

    /**
     * @return mixed
     */
    public function getRank()
    {
        return $this->rank;
    }

    /**
     * @param mixed $rank
     */
    public function setRank($rank): void
    {
        $this->rank = $rank;
    }

    /**
     * @return mixed
     */
    public function getElo()
    {
        return $this->elo;
    }

    /**
     * @param mixed $elo
     */
    public function setElo($elo): void
    {
        $this->elo = $elo;
    }

    /**
     * @return mixed
     */
    public function getPoste()
    {
        return $this->poste;
    }

    /**
     * @param mixed $poste
     */
    public function setPoste($poste): void
    {
        $this->poste = $poste;
    }

    /**
     * @return mixed
     */
    public function getMaxRank()
    {
        return $this->maxRank;
    }

    /**
     * @param mixed $maxRank
     */
    public function setMaxRank($maxRank): void
    {
        $this->maxRank = $maxRank;
    }

    /**
     * @return mixed
     */
    public function getMaxElo()
    {
        return $this->maxElo;
    }

    /**
     * @param mixed $maxElo
     */
    public function setMaxElo($maxElo): void
    {
        $this->maxElo = $maxElo;
    }

    /**
     * @return mixed
     */
    public function getExperiences()
    {
        return $this->experiences;
    }

    /**
     * @param mixed $experiences
     */
    public function setExperiences($experiences): void
    {
        $this->experiences = $experiences;
    }

    /**
     * @return mixed
     */
    public function getObjectifs()
    {
        return $this->objectifs;
    }

    /**
     * @param mixed $objectifs
     */
    public function setObjectifs($objectifs): void
    {
        $this->objectifs = $objectifs;
    }
}
