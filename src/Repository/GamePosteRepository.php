<?php

namespace App\Repository;

use App\Entity\GamePoste;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method GamePoste|null find($id, $lockMode = null, $lockVersion = null)
 * @method GamePoste|null findOneBy(array $criteria, array $orderBy = null)
 * @method GamePoste[]    findAll()
 * @method GamePoste[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GamePosteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, GamePoste::class);
    }

//    /**
//     * @return GamePoste[] Returns an array of GamePoste objects
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
    public function findOneBySomeField($value): ?GamePoste
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
