<?php

namespace App\Form;

use App\Entity\UserInformation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Blank;

class ReseauxSociauxType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('facebook', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'class' => 'col-11'
                ]
            ])
            ->add('twitter', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'class' => 'col-11'
                ]
            ])
            ->add('twitch', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'class' => 'col-11'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UserInformation::class
        ]);
    }
}
