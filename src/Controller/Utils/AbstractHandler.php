<?php
/**
 * Created by PhpStorm.
 * User: coubardalexis
 * Date: 20/05/2018
 * Time: 01:13
 */

namespace App\Controller\Utils;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;

abstract class AbstractHandler
{
    /** @var EntityManagerInterface $em */
    protected $em;
    /** @var FormFactoryInterface $formFactory */
    protected $formFactory;
    /** @var EventDispatcherInterface $dispatcher */
    protected $dispatcher;

    public function __construct(EventDispatcherInterface $dispatcher, EntityManagerInterface $entityManager, FormFactoryInterface $formFactory)
    {
        $this->em = $entityManager;
        $this->formFactory = $formFactory;
        $this->dispatcher = $dispatcher;
    }

    /**
     * @param FormInterface $form
     * @param Request       $request
     *
     * @return bool
     */
    public function process($form, $request)
    {
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            return true;
        }
    }
}