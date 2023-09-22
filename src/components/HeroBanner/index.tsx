'use client'
import { Card, Typography } from '@material-tailwind/react';
import Blue_wavey_circle from '@/assets/images/logo.svg'
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { calculateBMI } from 'src/helpers';

function Bmi_calculator () {
    const [selected, setSelected] = useState('Metrics');
    const [input, setInput] = useState({
        height: 0,
        weight: 0
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput((prevInputText) => ({ ...prevInputText,
          [name]: value
        }));
    };

    return (
        <Card className='basis-1/2 flex flex-col bg-white rounded-2xl p-7 gap-6 shadow-xl'>
            <Typography variant='h5'>Enter your details below</Typography>
            <fieldset>
                <legend className="sr-only">BMI Calculation</legend>
                <div className="flex gap-5">
                    <div className="basis-1/2 flex items-center gap-5">
                        <input 
                            type="radio" 
                            name="" 
                            value="Metrics" 
                            id="metrics" 
                            checked={selected === 'Metrics'}
                            onChange={e => setSelected(e.target.value)}
                            className='lg:h-4 lg:w-4 h-7 w-7 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        />
                        <label htmlFor="metrics" className='text-sm font-medium leading-6 text-gray-900'>Metrics</label>
                    </div>
                    <div className="basis-1/2 flex items-center gap-5">
                        <input 
                            type="radio" 
                            name="" 
                            value="Imperial" 
                            id="imperial" 
                            checked={selected === 'Imperial'}
                            onChange={e => setSelected(e.target.value)}
                            className='lg:h-4 lg:w-4 h-7 w-7 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        />
                        <label htmlFor="imperial" className='text-sm font-medium leading-6 text-gray-900'>Imperial</label>
                    </div>
                </div>
            </fieldset>
            <div className='flex sm:flex-row flex-col gap-5'>
                <div className='basis-1/2'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-500">
                        Height
                    </label>                    
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="height"
                            id="height"
                            className="block w-full rounded-md border-0
                            px-4 py-3
                            text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl font-semibold"
                            placeholder="0"
                            aria-describedby="height-system"
                            onChange={handleChange} 
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <span className="text-blue-600 text-xl font-semibold" id="height-system">
                                {selected === "Metrics" ? 'cm' : 'inches'}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-500">
                     Weight
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            className="block w-full rounded-md border-0
                            px-4 py-3
                            text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl font-semibold"
                            placeholder="0"
                            aria-describedby="weight"
                            onChange={handleChange} 
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <span className="text-blue-600 text-xl font-semibold" id="weight-system">
                                {selected === "Metrics" ? 'kg' : 'pounds'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-gradient-to-r from-blue-700 to-blue-500 text-white 
             rounded-tl-[15px]  rounded-bl-[15px] 
             md:rounded-tr-[100px] rounded-tr-[15px] 
             md:rounded-br-[100px] rounded-br-[15px]'
             >
                { input.height && input.weight && Number(calculateBMI(input.height, input.weight)) ?  
                        <div className='flex sm:flex-row flex-col gap-y-3 gap-x-7'>                                  
                            <div className='basis-1/2 flex flex-col justify-between'>
                                <Typography variant='small' color='white' className='font-semibold'>Your BMI is...</Typography>
                                <Typography variant='h1'>{calculateBMI(input.height, input.weight)} </Typography>
                            </div>
                            <div className='basis-1/2 flex flex-col justify-center'>
                                <Typography variant='small' color='white'>Your BMI suggest you are . Your ideal weight is between{" "} 
                                <span className='font-semibold'>Test</span>
                                </Typography>
                            </div>           
                        </div>
                    :
                        <div className='flex flex-col gap-5'>
                            <Typography variant='h3'>Welcome!</Typography>
                            <Typography variant='paragraph' color='white'>Enter your height and weight and you will see your results here.</Typography>
                        </div>
                }
            </div>
        </Card>
    )
}
export  const HeroBanner = () => {
    return (
        <section className='relative'>
            <div className='pt-14 pb-24'>
                <div className='absolute lg:ml-5 ml-0 lg:bottom-0 bottom-60
                -top-20 left-0 lg:right-1/4 right-0 bg-gradient-to-br from-sky-50 to-blue-200 rounded-b-3xl'>
                </div>
                <div className='relative px-5 md:px-8 xl:px-32 z-10'>
                    <div className='container mx-auto'>                        
                        <Image src={Blue_wavey_circle} 
                            alt='Blue circle' 
                            className='pb-8 mx-auto lg:mx-0' 
                            height={50} 
                            width={50}/>
                        <div className='flex lg:flex-row flex-col lg:gap-20 gap-12'>
                            <div className='basis-1/2 flex flex-col justify-center gap-8 '>
                                <Typography variant='h1' className='lg:text-left text-center'>Body Mass<br/>Index Calculator</Typography>
                                <Typography variant='paragraph' className='lg:text-left text-center'>
                                    Better understand your weight in relation to your height using
                                    our body mass index (BM) calculator. While BMI is not the
                                    sole determinant of a healthy weight, it offers a valuable
                                    starting point to evaluate your overall health and well-being.
                                </Typography>
                            </div>
                            <Bmi_calculator />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};