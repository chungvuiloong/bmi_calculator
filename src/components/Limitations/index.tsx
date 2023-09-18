'use client'
import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import gender_icon from '@/assets/images/icon-gender.svg'
import age_icon from '@/assets/images/icon-age.svg'
import muscle_icon from '@/assets/images/icon-muscle.svg'
import pregnancy_icon from '@/assets/images/icon-pregnancy.svg'
import race_icon from '@/assets/images/icon-race.svg'
import Image from 'next/image'

const limitation_card_data =  [
    {
        title: "Gender",
        icon: gender_icon,
        description: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
    },
    {
        title: "Age",
        icon: age_icon,
        description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
        title: "Muscle",
        icon: muscle_icon,
        description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
        title: "Pregnancy",
        icon: pregnancy_icon,
        description: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
        title: "Race",
        icon: race_icon,
        description: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practical nurse."
    }
]

export const Limitation = () => {
    return (
        <section className='relative'>
            <div className='py-14'>
                <div className='relative px-5 md:px-8 xl:px-32 z-10'>
                    <div className='container mx-auto flex lg:flex-row flex-col gap-12 w-fit'>
                        {/* <div className='grid grid-cols-6 gap-4'>
                            <div className='col-start-1 col-span-3 bg-red-500'>Text </div>
                            <div className='col-start-4 col-span-2 bg-blue-500'>First Test</div>
                            <div className='col-start-3 col-span-2 bg-blue-700'>Second Test</div>
                            <div className='col-start-5 col-span-2 bg-gray-700'>Second Test</div>
                            <div className='col-start-2 col-span-2 bg-blue-700'>Second Test</div>
                            <div className='col-start-4 col-span-2 bg-gray-700'>Second Test</div>
                        </div>             */}
                        {/* <div className='basis-1/2 flex flex-col gap-4 h-fit'>          
                            <Typography variant='h2' className='font-semibold'>Limitations of BMI</Typography>
                            <Typography variant='paragraph'>
                                Although BMI is often a practical indicator of healthy weight, 
                                it is not suited for every person. Specific groups should carefully consider their BMI outcomes, 
                                and in certain cases, the measurement may not be beneficial to use.
                            </Typography>
                        </div> */}
                        {/* <div className='basis-1/2 flex flex-row flex-wrap'>
                            {
                                limitation_card_data.map((data, index)=>
                                    <Card key={index} className='w-[200px] border-2'>
                                        <div className='flex flex-row gap-3'>
                                            <Image src={data.icon} alt={`${data.title} icon`} height={30} width={30} />
                                            <div className='flex flex-col justify-center'>
                                                <Typography variant='h6'>{data.title}</Typography>
                                            </div>
                                        </div>
                                        <Typography variant='paragraph'>
                                            {data.description}
                                        </Typography>
                                    </Card>
                                )
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};