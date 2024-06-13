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
        description='At Gangshalik, our journey began with a vision to create a harmonious blend of nature and gastronomy. Inspired by the beauty of our surroundings, we set out to craft a dining experience that celebrates fresh, wholesome ingredients and flavorsome dishes. Discover our commitment to sustainability and community as we invite you to join us in this culinary adventure.'
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