"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button, buttonVariants } from '../ui/button';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='relative min-h-screen pt-36 md:pt-0 pb-20 flex justify-center items-center'>
      <div className='absolute inset-0'>
        <Image
          src='/images/background.jpg'
          alt='Banner'
          layout='fill'
          objectFit='cover'
          priority={true}
          className='z-0'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='relative container mx-auto '>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
          <div
            data-aos="fade-down"
            className='text-center md:text-left mb-10 sm:mb-0'>
            <h1 className='text-4xl font-bold pb-2 text-white'>
              Welcome to Gang Shalik
            </h1>
            <p className='text-lg text-gray-300 py-3'>
              A place where you can find all your favorite products
            </p>
            <p className='text-md text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem, nemo illo dolores facere dicta cum, velit adipisci quas voluptatum, sed beatae perspiciatis nihil sit expedita in iusto dolore ullam cumque distinctio consectetur et deserunt molestiae. A, error! Aperiam!
            </p>
            <Button className={`mt-4 ${buttonVariants({ variant: "ghost" })}`}>
              Shop Now
            </Button>
          </div>
          <div className='flex relative justify-center md:justify-end h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-[300px] md:w-[500px] xl:mr-1 mx-auto'>
            <Image
              className='rounded-lg  shadow-lg'
              src='/images/story/2.jpg'
              alt='Banner'
              objectFit='cover'
              objectPosition='bottom'
              layout='fill'
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
