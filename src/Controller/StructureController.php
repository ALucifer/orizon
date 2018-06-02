<?php

namespace App\Controller;

use App\Controller\Utils\Structure\StructureHandler;
use App\Entity\Structure;
use App\Repository\StructureRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StructureController
 * @package App\Controller

 */
class StructureController extends Controller
{
    /**
     *
     * @param StructureRepository $structureRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(StructureRepository $structureRepository)
    {
        return $this->render('structure/index.html.twig', [
            'structures' => $structureRepository->findAll(),
        ]);
    }

    /**
     *
     * @param Structure $structure
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(Structure $structure)
    {
        return $this->render("structure/show.html.twig",[
           'structure' => $structure
        ]);
    }

    /**
     *
     * @param Request $request
     * @param StructureHandler $handler
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request, StructureHandler $handler)
    {
        $structure = new Structure();
        $form = $handler->createForm($structure);

        if ($handler->process($form, $request)) {
            $handler->success($structure);
            $this->addFlash('success', 'Votre structure à bien été ajouté.');
            return $this->redirectToRoute('structure_index');
        }

        return $this->render('structure/add.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     *
     * @param Structure $structure
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(Structure $structure)
    {
        return $this->render('structure/edit.html.twig', [
            'structure' => $structure
        ]);
    }


}
