'use client'
import { Typography } from '@material-tailwind/react';
import React from 'react';

function Bmi_calculator () {
    return (
        <>
            <Typography variant='h3'>Enter your details below</Typography>
            <fieldset>
                <legend className="sr-only">Notification method</legend>
                <div className="flex gap-5">
                    <div className="basis-1/2 flex items-center">
                        <input
                            id=''
                            name="notification-method"
                            type="radio"
                                    // defaultChecked='email'
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
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        <label htmlFor='' className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                Imperial
                        </label>
                    </div>
                </div>
            </fieldset>
            <div className='flex flex-row gap-5'>
                <div className='basis-1/2'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Height
                    </label>
                    <div className="mt-1">
                        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                    </div>
                </div>
                <div className='basis-1/2'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                     Weight
                    </label>
                    <div className="mt-1">
                        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                    </div>
                </div>
            </div>
            <div className='p-7 bg-sky-700 text-white flex flex-col gap-5' style={{ borderRadius: '1rem 100px 100px 1rem'}}>
                <Typography variant='h3'>Welcome!</Typography>
                <Typography variant='paragraph'>Enter your height and weight and you will see your results here.</Typography>
            </div>
        </>
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
                        <div className='basis-1/2 flex flex-col bg-white rounded-2xl p-7 gap-7'>
                            <Bmi_calculator />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};