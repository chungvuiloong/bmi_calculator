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
        class: "lg:ml-6 ml-0 lg:col-start-4 col-span-2 ",
        description: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
    },
    {
        title: "Age",
        icon: age_icon,
        class: "lg:col-start-3 col-span-2",
        description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
        title: "Muscle",
        icon: muscle_icon,
        class: "lg:col-start-5 col-span-2",
        description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
        title: "Pregnancy",
        icon: pregnancy_icon,
        class: "lg:col-start-2 col-span-2",
        description: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
        title: "Race",
        icon: race_icon,
        class: "lg:col-start-4 md:col-start-2 col-span-2",
        description: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practical nurse."
    }
]

export const Limitation = () => {
    return (
        <section className='relative'>
            <div className='py-14'>
                <div className='relative px-5 md:px-8 xl:px-32 z-10'>
                    <div className='container mx-auto'>
                        <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6'>
                            <div className='lg:mr-6 mr-0 lg:col-start-1 lg:col-span-3 md:col-span-4 col-span-2 flex flex-col gap-4 lg:text-left text-center'>
                                <Typography variant='h2' className='font-semibold'>Limitations of BMI</Typography>
                                <Typography variant='paragraph'>
                                    Although BMI is often a practical indicator of healthy weight, 
                                    it is not suited for every person. Specific groups should carefully consider their BMI outcomes, 
                                    and in certain cases, the measurement may not be beneficial to use.
                                </Typography> 
                            </div>
                            {
                                limitation_card_data.map((data, index) =>
                                    <Card key={index} className={`${data.class} p-7 rounded-2xl  shadow-2xl flex gap-4`}>
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
                            {/* <div className='col-start-4 col-span-2 bg-blue-500'>First Test</div>
                            <div className='col-start-3 col-span-2 bg-blue-700'>Second Test</div>
                            <div className='col-start-5 col-span-2 bg-gray-700'>Second Test</div>
                            <div className='col-start-2 col-span-2 bg-blue-700'>Second Test</div>
                            <div className='col-start-4 col-span-2 bg-gray-700'>Second Test</div> */}
                        </div>            
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