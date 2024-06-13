"use client"

import TitleSection from '@/components/Others/TitleSection'
import Image from 'next/image'
import React from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { galleryImages } from '@/lib/data';



const GalleryPage = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <section className='pt-32 container'>
      <TitleSection
        title='Gallery'
        subTitle='TASTY AND CRUNCHY'
        description='Take a virtual tour through our gallery and immerse yourself in the enchanting ambiance of Gangshalik. Browse through snapshots capturing the natural beauty, cozy interiors, and joyful moments shared within our rustic retreat. Discover why Gangshalik is not just a restaurant, but a destination.'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
        
        {
          galleryImages.map((image, index) => (
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              key={index}
            >
              <Image src={image.src} width={200} height={200} alt={image.alt} className='rounded-lg object-cover w-full h-full' />
            </LightGallery>
          ))
        }
      </div>
    </section >
  )
}

export default GalleryPage