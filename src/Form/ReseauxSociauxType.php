<?php

namespace App\Form;

use App\Entity\UserInformation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ReseauxSociauxType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $field = $options['reseau'];
        $builder
            ->add($field, TextType::class)
            ->add('submit', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'reseau' => '',
            'data_class' => UserInformation::class
        ]);
    }
}
