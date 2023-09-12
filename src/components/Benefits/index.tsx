'use client'
import React from 'react';
import icon_eating from '@/assets/images/icon-eating.svg'
import icon_exercise from '@/assets/images/icon-exercise.svg'
import icon_sleep from '@/assets/images/icon-sleep.svg'
import Image from 'next/image';
import { Card, Typography } from '@material-tailwind/react';

const benefits_data =[
    {
        title: 'Healthy eating',
        description: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
        icon: icon_eating
    },
    {
        title: 'Regular exercise',
        description: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
        icon: icon_exercise
    },
    {
        title: 'Adequate sleep',
        description: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
        icon:  icon_sleep
    }
]
const Benefits = () => {
    return (
        <section className='container mx-auto'>
            <div className='flex flex-row'>
                {
                    benefits_data.map((data, index)=>
                        <Card key={index} className='border-2'>
                            <Typography variant='h3'>{data.title}</Typography>
                        </Card>
                    )
                }
            </div>
        </section>
    );
};

export default Benefits;