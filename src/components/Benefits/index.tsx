'use client'
import React from 'react';
import icon_eating from '@/assets/images/icon-eating.svg'
import icon_exercise from '@/assets/images/icon-exercise.svg'
import icon_sleep from '@/assets/images/icon-sleep.svg'
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';

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
export const Benefits = () => {
    return (
        <section className='relative'>
            <div className='py-14'>
                <div className='absolute lg:mr-5 mr-0 bottom-0
                top-0 left-0 right-0 bg-gradient-to-br from-sky-50 to-sky-100 lg:rounded-r-3xl rounded-none'>
                </div>
                <div className='relative px-5 md:px-8 xl:px-32'>
                    <div className='container mx-auto'>                    
                        <div className='flex flex-col lg:flex-row gap-8'> 
                            {
                                benefits_data.map((data, index)=>
                                    <div key={index} className='flex flex-col md:flex-row lg:flex-col  gap-8 bg-transparent'>
                                        <Image src={data.icon} alt={`${data.title} logo`} />
                                        <div className='flex flex-col gap-4'>                        
                                            <Typography variant='h5' className='font-semibold'>{data.title}</Typography>
                                            <Typography variant='paragraph'>{data.description}</Typography>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>     
        </section>
    );
};