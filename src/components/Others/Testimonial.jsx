"use client"
import Image from 'next/image'
import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const slides = [{}, {}, {}, {}, {}, {}, {}];


const Testimonial = () => {
  return (
    <section className='testimonial-section relative'>
      <ParallaxBanner
        layers={[{ image: '/images/story/4.jpg', speed: -50 }]}
        className="aspect-[7/7] sm:aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1]"
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' />
      <div className='absolute inset-0 z-10 flex items-center justify-center'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='w-full max-w-6xl'
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className=' rounded-lg pb-12 shadow-lg max-w-md mx-auto'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 relative rounded-full overflow-hidden'>
                    <Image src='/images/story/1.jpg' alt='testimonial' layout='fill' objectFit='cover' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-bold text-white'>John Doe</h4>
                    <p className='text-gray-100'>CEO</p>
                  </div>
                </div>
                <p className='text-gray-100 mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at turpis et elit tincidunt aliquam. Integer ac magna sit amet nisi fringilla tincidunt. Donec nec turpis nec metus fermentum fringilla. Nullam auctor, arcu nec ultricies ultricies, risus velit tincidunt nunc, a ultricies purus metus a enim. Sed nec felis nec risus ultricies ultricies. Sed nec felis nec risus ultricies ultricies.
                </p>
                <div className='flex items-center'>
                  <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
                    <Image src='/images/story/1.jpg' alt='testimonial' width={16} height={16} />
                  </div>
                  <div className='ml-2'>
                    <p className='text-gray-100'>4.5</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial