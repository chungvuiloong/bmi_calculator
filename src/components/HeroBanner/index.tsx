'use client'
import { Typography } from '@material-tailwind/react';
import React from 'react';

export  const HeroBanner = () => {
    return (
        <section>
            <div className='py-14 bg-[#d8e7fe] lg:rounded-r-3xl rounded-none'>
                <div className='px-5 md:px-8 xl:px-32 '>
                    <div className='container mx-auto flex'>   
                        <div className='basis-1/2 flex flex-col gap-8'>
                            <Typography variant='h1'>Body Mass<br/>Index Calculator</Typography>
                            <Typography variant='paragraph'>
                                Better understand your weight in relation to your height using
                                our body mass index (BM) calculator. While BMI is not the
                                sole determinant of a healthy weight, it offers a valuable
                                starting point to evaluate your overall health and well-being.
                            </Typography>
                        </div>
                        <div className='basis-1/2 flex flex-col bg-white rounded-2xl p-7 gap-5'>
                            <fieldset className="mt-4">
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
                                                Title
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
                                                Title
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div className='flex flex-row gap-5'>
                                        <div className='basis-1/2'>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Height
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className='basis-1/2'>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Weight
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>
                            </div>
                                        
                            

                            {/* <Typography variant='h3'>Enter your details below</Typography>
                            <div>
                                <fieldset className='flex'>
                                    <div className='basis-1/2 flex gap-2'>
                                        <input type="radio" id="huey" name="drone" value="huey" checked />
                                        <label>
                                            <Typography variant='small' className='font-semibold'>Metrics</Typography>
                                        </label>
                                    </div>
                                    <div className='basis-1/2 flex gap-2'>
                                        <input type="radio" id="dewey" name="drone" value="dewey" />
                                        <label>
                                            <Typography variant='small' className='font-semibold'>Imperial</Typography>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div>
                                <Typography variant='h3'>Welcome!</Typography>
                                <Typography variant='paragraph'>Enter your height and weight and you will see your results here.</Typography>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};