<?php

namespace App\Controller;

use App\Controller\Utils\Structure\StructureHandler;
use App\Entity\Structure;
use App\Repository\StructureRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class StructureController
 * @package App\Controller
 * @Route("/structure")
 */
class StructureController extends Controller
{
    /**
     * @Route("/", name="structure_index")
     *
     * @param StructureRepository $structureRepository
     * @return Response
     */
    public function index(StructureRepository $structureRepository)
    {
        return $this->render('structure/index.html.twig', [
            'structures' => $structureRepository->findAll(),
        ]);
    }

    /**
     * @Route("/show/{id}", name="structure_show")
     *
     * @param Structure $structure
     * @return Response
     */
    public function show(Structure $structure)
    {
        return $this->render("structure/show.html.twig",[
           'structure' => $structure
        ]);
    }



    /**
     * @Route("/add", name="structure_add")
     *
     * /
     * @Route("/add", name="structure_add")
     *
     * @param Request $request
     * @param StructureHandler $handler
     *
     * @return Response
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
     * @Route("/edit/{id}", name="structure_edit")
     *
     * @param Structure $structure
     *
     * @return Response
     */
    public function edit(Structure $structure)
    {
        return $this->render('structure/edit.html.twig', [
            'structure' => $structure
        ]);
    }


}
