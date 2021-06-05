<?php

namespace App\Repository;

use App\Entity\Matiere;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Matiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method Matiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method Matiere[]    findAll()
 * @method Matiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatiereRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Matiere::class);
    }

    // /**
    //  * @return Matiere[] Returns an array of Matiere objects
    //  */
    
    public function findByExampleField()
    {
        return $this->getEntityManager()
        ->createQueryBuilder()
        ->addSelect('classe')
        ->from($this->_entityName, 'p')
        ->join('p.matiere');
        /*
        $dql = 'SELECT mat,mat_class FROM App\Entity\Matiere mat JOIN mat.classe mat_class ';
        $query = $this->getEntityManager()->createQuery($dql);
        //dd($query->execute());
        return $query->execute();
        */
    }
    

    /*
    public function findOneBySomeField($value): ?Matiere
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
