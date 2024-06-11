import Image from 'next/image'
import React from 'react'
import { Button, buttonVariants } from '../ui/button';

const Banner = () => {
  return (
    <section className='bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-12 lg:pt-24'>
          <div className='text-center md:text-left mb-10 sm:mb-0'>
            <h1 className='text-4xl font-bold pb-2'>
              Welcome to <span className='text-primary'>Gang Shalik</span>
            </h1>
            <p className='text-lg text-gray-500 py-3'>
              A place where you can find all your favorite products
            </p>
            <p className='text-md text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem, nemo illo dolores facere dicta cum, velit adipisci quas voluptatum, sed beatae perspiciatis nihil sit expedita in iusto dolore ullam cumque distinctio consectetur et deserunt molestiae. A, error! Aperiam!
            </p>
            <Button className={`mt-4 ${buttonVariants({ size: "lg" })}`}>
              Shop Now
            </Button>
          </div>
          <div className='flex justify-center md:justify-end w-full'>
            <Image
              className='rounded-lg shadow-lg'
              src='/images/story/2.jpg'
              alt='Banner'
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
