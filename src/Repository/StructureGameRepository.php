<?php

namespace App\Repository;

use App\Entity\StructureGame;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StructureGame|null find($id, $lockMode = null, $lockVersion = null)
 * @method StructureGame|null findOneBy(array $criteria, array $orderBy = null)
 * @method StructureGame[]    findAll()
 * @method StructureGame[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StructureGameRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StructureGame::class);
    }

//    /**
//     * @return StructureGame[] Returns an array of StructureGame objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?StructureGame
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
