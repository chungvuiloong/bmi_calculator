'use client'
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import eating_image from '@/assets/images/image-man-eating.webp'
import React from 'react';

export  const BMIResults = () => {
    return (
        <section className='py-14 '>
            <div className='px-5 md:px-0 lg:px-8 xl:px-32 md:pr-5 '>
                <div className='container mx-auto'>                
                    <div className='flex md:flex-row flex-col lg:gap-20 gap-12'>
                        <div className='basis-1/2'>                    
                            <Image 
                                src={eating_image} 
                                alt='Eating Image'
                                className='ml-0 md:-ml-10 lg:ml-0 m-w-[200px] h-fit'
                            />   
                        </div>
                        <div className='basis-1/2 self-center flex flex-col gap-8'>
                            <Typography variant='h2' className='font-semibold'>
                                What your BMI result means
                            </Typography>
                            <Typography variant='paragraph'>                    
                                A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos;
                                Maintaining a healthy weight may lower your chances of
                                experiencing health issues later on, such as obesity and type
                                2 diabetes. Aim for a nutritious diet with reduced fat and
                                sugar content, incorporating ample fruits and vegetables.
                                Additionally, strive for regular physical activity, ideally about
                                30 minutes daily for five days a week.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};