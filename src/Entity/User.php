<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     *
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     *
     */
    private $firstName;

    /**
     * @ORM\Column(type="date", length=120, nullable=true)
     *
     */
    private $birthDate;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     *
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     *
     */
    private $password;

    /**
     * @ORM\Column(type="boolean", length=120, nullable=true)
     *
     */
    private $isActive;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     *
     */
    private $roles;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *
     */
    private $lastConnexion;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *
     */
    private $created_at;

    /**
     * User constructor.
     * @param $isActive
     */
    public function __construct($isActive)
    {
        $this->isActive = true;
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
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * @param mixed $firstName
     */
    public function setFirstName($firstName): void
    {
        $this->firstName = $firstName;
    }

    /**
     * @return mixed
     */
    public function getBirthDate()
    {
        return $this->birthDate;
    }

    /**
     * @param mixed $birthDate
     */
    public function setBirthDate($birthDate): void
    {
        $this->birthDate = $birthDate;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password): void
    {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getisActive()
    {
        return $this->isActive;
    }

    /**
     * @param mixed $isActive
     */
    public function setIsActive($isActive): void
    {
        $this->isActive = $isActive;
    }

    /**
     * @return mixed
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * @param mixed $roles
     */
    public function setRoles($roles): void
    {
        $this->roles = $roles;
    }

    /**
     * @return mixed
     */
    public function getLastConnexion()
    {
        return $this->lastConnexion;
    }

    /**
     * @param mixed $lastConnexion
     */
    public function setLastConnexion($lastConnexion): void
    {
        $this->lastConnexion = $lastConnexion;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * @param mixed $created_at
     */
    public function setCreatedAt($created_at): void
    {
        $this->created_at = $created_at;
    }





}
