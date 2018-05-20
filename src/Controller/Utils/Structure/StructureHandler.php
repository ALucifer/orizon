<?php
/**
 * Created by PhpStorm.
 * User: coubardalexis
 * Date: 20/05/2018
 * Time: 01:10
 */

namespace App\Controller\Utils\Structure;

use App\Controller\Utils\AbstractHandler;
use App\Entity\Structure;
use App\Form\StructureType;

class StructureHandler extends AbstractHandler
{
    /**
     * @param $structure Structure
     * @return \Symfony\Component\Form\FormInterface
     */
    public function createForm($structure)
    {
        return $this->formFactory->create(StructureType::class, $structure);
    }

    /**
     * @param $structure Structure
     */
    public function success($structure)
    {
        $this->em->persist($structure);
        $this->em->flush();
    }
}