<?php

namespace App\Repository;

use App\Entity\GameRanking;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method GameRanking|null find($id, $lockMode = null, $lockVersion = null)
 * @method GameRanking|null findOneBy(array $criteria, array $orderBy = null)
 * @method GameRanking[]    findAll()
 * @method GameRanking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRankingRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, GameRanking::class);
    }

//    /**
//     * @return GameRanking[] Returns an array of GameRanking objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GameRanking
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
