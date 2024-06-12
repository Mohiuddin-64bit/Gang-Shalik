"use client"
import React, { useEffect } from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const OurStory = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className='container primary-gap'>
      <TitleSection
        title='Our Story'
        subTitle='TASTY AND CRUNCHY'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem, nemo illo dolores facere dicta cum, velit adipisci quas voluptatum, sed beatae perspiciatis nihil sit expedita in iusto dolore ullam cumque distinctio consectetur et deserunt molestiae. A, error! Aperiam!'
      />
      <div data-aos="fade-up"
        className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
        <div className='relative h-[400px] w-full'>
          <Image
            className='rounded-lg object-cover'
            src='/images/story/1.jpg'
            alt='Our Story'
            layout='fill'
            priority={true}
          />
        </div>
        <div className='relative h-[400px] w-full'>
          <Image
            className='rounded-lg object-cover'
            src='/images/story/3.jpg'
            alt='Our Story'
            layout='fill'
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default OurStory;