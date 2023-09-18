'use client'
import { Typography } from '@material-tailwind/react';
import React from 'react';

const limitation_card_data =  [
    {
        title: "Gender",
        description: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
    },
    {
        title: "Age",
        description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
        title: "Muscle",
        description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
        title: "Pregnancy",
        description: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
        title: "Race",
        description: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practical nurse."
    }
]

export const Limitation = () => {
    return (
        <section className='relative'>
            <div className='py-14'>
                <div className='relative px-5 md:px-8 xl:px-32 z-10'>
                    <div className='container mx-auto flex lg:flex-row flex-col gap-12'>            
                        <div className='basis-1/2 flex flex-col gap-4'>          
                            <Typography variant='h2' className='font-semibold'>Limitations of BMI</Typography>
                            <Typography variant='paragraph'>
                                Although BMI is often a practical indicator of healthy weight, 
                                it is not suited for every person. Specific groups should carefully consider their BMI outcomes, 
                                and in certain cases, the measurement may not be beneficial to use.
                            </Typography>
                        </div>
                        <div>
                            Cards
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};