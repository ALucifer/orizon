<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, unique=true)
     * @Assert\NotBlank()
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=128, unique=true)
     * @Gedmo\Slug(fields={"name"})
     */
    private $slug;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StructureGame", mappedBy="game", cascade={"remove"})
     */
    private $structures;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\GamePoste", mappedBy="game")
     */
    private $postes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\GameRanking", mappedBy="game")
     */
    private $rankings;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserGame", mappedBy="game")
     */
    private $users;

    /**
     * Game constructor.
     */
    public function __construct()
    {
        $this->structures = new ArrayCollection();
        $this->postes = new ArrayCollection();
        $this->rankings= new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @param mixed $slug
     */
    public function setSlug($slug): void
    {
        $this->slug = $slug;
    }

    /**
     * @return mixed
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @param mixed $image
     */
    public function setImage($image): void
    {
        $this->image = $image;
    }

    /**
     * @return mixed
     */
    public function getStructures()
    {
        return $this->structures;
    }

    /**
     * @param mixed $structures
     */
    public function setStructures($structures): void
    {
        $this->structures = $structures;
    }

    public function addStructure(Structure $structure)
    {
        $this->structures[] = $structure;
    }

    /**
     * @return mixed
     */
    public function getPostes()
    {
        return $this->postes;
    }

    /**
     * @param mixed $postes
     */
    public function setPostes($postes): void
    {
        $this->postes = $postes;
    }

    /**
     * @param GamePoste $poste
     */
    public function addPoste(GamePoste $poste): void
    {
        $this->postes[] = $poste;
    }

    /**
     * @return mixed
     */
    public function getRankings()
    {
        return $this->rankings;
    }

    /**
     * @param mixed $ranking
     */
    public function setRankings($ranking): void
    {
        $this->rankings = $ranking;
    }

    /**
     * @param GameRanking $ranking
     */
    public function addRanking(GameRanking $ranking)
    {
        $this->rankings[] = $ranking;
    }

    /**
     * @return mixed
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * @param mixed $users
     */
    public function setUsers($users): void
    {
        $this->users = $users;
    }
}
