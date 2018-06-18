<?php

namespace App\Form;

use App\Entity\UserInformation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Blank;

class ReseauxSociauxType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('facebook', UrlType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'class' => 'col-12'
                ]
            ])
            ->add('twitter', UrlType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'class' => 'col-12'
                ]
            ])
            ->add('twitch', UrlType::class, [
                'required' => false,
                'label' => false,
                'attr' => [
                    'class' => 'col-12'
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
