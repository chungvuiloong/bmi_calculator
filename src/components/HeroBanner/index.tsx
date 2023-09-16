'use client'
import { Typography } from '@material-tailwind/react';
import React from 'react';

function Bmi_calculator () {
    return (
        <div className='basis-1/2 flex flex-col bg-white rounded-2xl p-7 gap-7'>
            <Typography variant='h3'>Enter your details below</Typography>
            <fieldset>
                <legend className="sr-only">BMI Calculation</legend>
                <div className="flex gap-5">
                    <div className="basis-1/2 flex items-center">
                        <input
                            id=''
                            name="notification-method"
                            type="radio"
                            value="metric"
                            checked
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor='' className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                Metric
                        </label>
                    </div>
                    <div className="basis-1/2 flex items-center">
                        <input
                                id=''
                                name="notification-method"
                                type="radio"
                                value="imperial"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        <label htmlFor='' className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                Imperial
                        </label>
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
                            text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0"
                            aria-describedby="height-system"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <span className="text-blue-600 sm:text-sm font-semibold" id="height-system">
                                cm
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
                            text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0"
                            aria-describedby="weight"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <span className="text-blue-600 sm:text-sm font-semibold" id="weight-system">
                                kg
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-gradient-to-r from-blue-700 to-blue-500 text-white flex flex-col gap-5' style={{ borderRadius: '1rem 100px 100px 1rem'}}>
                <Typography variant='h3'>Welcome!</Typography>
                <Typography variant='paragraph'>Enter your height and weight and you will see your results here.</Typography>
            </div>
        </div>
    )
}
export  const HeroBanner = () => {
    return (
        <section>
            <div className='py-14 bg-[#d8e7fe] lg:rounded-r-3xl rounded-none'>
                <div className='px-5 md:px-8 xl:px-32 '>
                    <div className='container mx-auto flex lg:gap-20 gap-12'>   
                        <div className='basis-1/2 flex flex-col gap-8'>
                            <Typography variant='h1'>Body Mass<br/>Index Calculator</Typography>
                            <Typography variant='paragraph'>
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
        </section>
    );
};