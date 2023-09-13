'use client'
import { Typography } from '@material-tailwind/react';
import React from 'react';

export  const BMIResults = () => {
    return (
        <section>
            <div className='container mx-auto'>            
                <div>
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
        </section>
    );
};