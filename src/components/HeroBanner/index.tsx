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
                        <div className='basis-1/2 flex flex-col'>
                            <Typography variant='h3'>Enter your details below</Typography>
                            <div>
                                <fieldset className='flex '>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};