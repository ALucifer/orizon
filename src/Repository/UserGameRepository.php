<?php

namespace App\Repository;

use App\Entity\UserGame;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UserGame|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserGame|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserGame[]    findAll()
 * @method UserGame[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserGameRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserGame::class);
    }

    public function CountAdc()
    {
        try {
            $qb = $this->createQueryBuilder('u')
                ->select('count(u.id)')
                ->where('u.rank = :rank ')
                ->andWhere('u.poste = :poste')
                ->setParameter('rank', 'diamant')
                ->setParameter('poste', 'adc')
                ->getQuery()
                ->getSingleScalarResult();
        } catch (NonUniqueResultException $e) {
        }

        return $qb;

    }

    /**
     * @return int|mixed
     */
    public function ResultsAdc()
    {
        $qb = $this->createQueryBuilder('u')
            ->where('u.rank = :rank ')
            ->andWhere('u.poste = :poste')
            ->setParameter('rank', 'diamant')
            ->setParameter('poste', 'adc')
            ->getQuery();

        return $qb->execute();
    }



    public function CountJungle()
    {
        try {
            $qb = $this->createQueryBuilder('u')
                ->select('count(u.id)')
                ->where('u.rank = :rank ')
                ->andWhere('u.poste = :poste')
                ->setParameter('rank', 'diamant')
                ->setParameter('poste', 'Jungle')
                ->getQuery()
                ->getSingleScalarResult();
        } catch (NonUniqueResultException $e) {
        }

        return $qb;

    }


    public function ResultsJungle()
    {
        $qb = $this->createQueryBuilder('u')
            ->where('u.rank = :rank ')
            ->andWhere('u.poste = :poste')
            ->setParameter('rank', 'diamant')
            ->setParameter('poste', 'jungle')
            ->getQuery();

        return $qb->execute();
    }


    public function CountTop()
    {
        try {
            $qb = $this->createQueryBuilder('u')
                ->select('count(u.id)')
                ->where('u.rank = :rank ')
                ->andWhere('u.poste = :poste')
                ->setParameter('rank', 'diamant')
                ->setParameter('poste', 'Top')
                ->getQuery()
                ->getSingleScalarResult();
        } catch (NonUniqueResultException $e) {
        }

        return $qb;

    }


    public function ResultsTop()
    {
        $qb = $this->createQueryBuilder('u')
            ->where('u.rank = :rank ')
            ->andWhere('u.poste = :poste')
            ->setParameter('rank', 'diamant')
            ->setParameter('poste', 'Top')
            ->getQuery();

        return $qb->execute();
    }

    public function CountMid()
    {
        try {
            $qb = $this->createQueryBuilder('u')
                ->select('count(u.id)')
                ->where('u.rank = :rank ')
                ->andWhere('u.poste = :poste')
                ->setParameter('rank', 'diamant')
                ->setParameter('poste', 'Mid')
                ->getQuery()
                ->getSingleScalarResult();
        } catch (NonUniqueResultException $e) {
        }

        return $qb;

    }


    public function ResultsMid()
    {
        $qb = $this->createQueryBuilder('u')
            ->where('u.rank = :rank ')
            ->andWhere('u.poste = :poste')
            ->setParameter('rank', 'diamant')
            ->setParameter('poste', 'Mid')
            ->getQuery();

        return $qb->execute();
    }
    
    public function CountSupport()
    {
        try {
            $qb = $this->createQueryBuilder('u')
                ->select('count(u.id)')
                ->where('u.rank = :rank ')
                ->andWhere('u.poste = :poste')
                ->setParameter('rank', 'diamant')
                ->setParameter('poste', 'Support')
                ->getQuery()
                ->getSingleScalarResult();
        } catch (NonUniqueResultException $e) {
        }

        return $qb;

    }


    public function ResultsSupport()
    {
        $qb = $this->createQueryBuilder('u')
            ->where('u.rank = :rank ')
            ->andWhere('u.poste = :poste')
            ->setParameter('rank', 'diamant')
            ->setParameter('poste', 'Support')
            ->getQuery();

        return $qb->execute();
    }
    
}
