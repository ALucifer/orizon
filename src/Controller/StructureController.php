<?php

namespace App\Controller;

use App\Entity\Structure;
use App\Form\StructureType;
use App\Repository\StructureRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class StructureController extends Controller
{
    /**
     * @Route("/structure", name="structure_index")
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
     * @Route("/structure/show/{id}", name="structure_show")
     *
     * @param Structure $structure
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(Structure $structure)
    {
        return $this->render('structure/show.html.twig',[
           'structure' => $structure
        ]);
    }

    /**
     * @Route("/structure/add", name="structure_add")
     *
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request)
    {
        $structure = new Structure();
        $form = $this->createForm(StructureType::class, $structure);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
           $structure = $form->getData();
           $em = $this->getDoctrine()->getManager();
           $em->persist($structure);
           $em->flush();
           $this->addFlash('success', 'Votre structure à bien été ajouté.');
           return $this->redirectToRoute('structure_index');
        }

        return $this->render('structure/add.html.twig', [
            'form' => $form->createView()
        ]);
    }


}
