<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\AdvancedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements AdvancedUserInterface
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
     * @ORM\Column(type="string", length=120, nullable=true, unique=true)
     *
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     * **@Assert\Regex(pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/", match=false, message="Votre password ne respecte pas le format demandé ")**
     *
     */
    private $password;

    /**
     * @ORM\Column(type="boolean", length=120, nullable=true)
     *
     */
    private $isActive;

    /**
     * @ORM\Column(type="array", length=120, nullable=true)
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
     * @ORM\Column(type="string", nullable=true)
     */
    private $token;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $tokenExpire;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Language", inversedBy="users")
     * @ORM\JoinTable(name="user_language")
     */
    private $languages;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Location")
     */
    private $location;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserGame", mappedBy="user")
     */
    private $games;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\UserInformation", mappedBy="user")
     */
    private $information;

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->isActive = true;
        $this->languages = new ArrayCollection();
        $this->games = new ArrayCollection();
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
     * Returns the roles granted to the user.
     *
     * <code>
     * public function getRoles()
     * {
     *     return array('ROLE_USER');
     * }
     * </code>
     *
     * Alternatively, the roles might be stored on a roles property,
     * and populated in any number of different ways when the user object
     * is created.
     *
     * @return (Role|string)[] The user roles
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

    public function addRole($role)
    {
        $this->roles[] = $role;
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
     * @return mixed
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * @param mixed $token
     */
    public function setToken($token): void
    {
        $this->token = $token;
    }

    /**
     * @return mixed
     */
    public function getTokenExpire()
    {
        return $this->tokenExpire;
    }

    /**
     * @param mixed $tokenExpire
     */
    public function setTokenExpire($tokenExpire): void
    {
        $this->tokenExpire = $tokenExpire;
    }


    /**
     * @param mixed $created_at
     */
    public function setCreatedAt($created_at): void
    {
        $this->created_at = $created_at;
    }

    /**
     * @return mixed
     */
    public function getLanguages()
    {
        return $this->languages;
    }

    /**
     * @param mixed $languages
     */
    public function setLanguages($languages): void
    {
        $this->languages = $languages;
    }

    /**
     * @param Language $language
     */
    public function addLanguage(Language $language): void
    {
        $this->languages[] = $language;
    }

    /**
     * @return mixed
     */
    public function getLocation()
    {
        return $this->location;
    }

    /**
     * @param mixed $location
     */
    public function setLocation($location): void
    {
        $this->location = $location;
    }

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
        return null;
    }

    /**
     * Returns the username used to authenticate the user.
     *
     * @return string The username
     */
    public function getUsername()
    {
        return $this->email;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {
        return null;
    }

    /**
     * Checks whether the user's account has expired.
     *
     * Internally, if this method returns false, the authentication system
     * will throw an AccountExpiredException and prevent login.
     *
     * @return bool true if the user's account is non expired, false otherwise
     *
     * @see AccountExpiredException
     */
    public function isAccountNonExpired()
    {
        return true;
    }

    /**
     * Checks whether the user is locked.
     *
     * Internally, if this method returns false, the authentication system
     * will throw a LockedException and prevent login.
     *
     * @return bool true if the user is not locked, false otherwise
     *
     * @see LockedException
     */
    public function isAccountNonLocked()
    {
        return true;
    }

    /**
     * Checks whether the user's credentials (password) has expired.
     *
     * Internally, if this method returns false, the authentication system
     * will throw a CredentialsExpiredException and prevent login.
     *
     * @return bool true if the user's credentials are non expired, false otherwise
     *
     * @see CredentialsExpiredException
     */
    public function isCredentialsNonExpired()
    {
        return true;
    }

    /**
     * Checks whether the user is enabled.
     *
     * Internally, if this method returns false, the authentication system
     * will throw a DisabledException and prevent login.
     *
     * @return bool true if the user is enabled, false otherwise
     *
     * @see DisabledException
     */
    public function isEnabled()
    {
        return $this->isActive;
    }

    /**
     * @return mixed
     */
    public function getInformation()
    {
        return $this->information;
    }

    /**
     * @param mixed $information
     */
    public function setInformation($information): void
    {
        $this->information = $information;
    }

}