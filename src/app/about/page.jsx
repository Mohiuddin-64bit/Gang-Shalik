import PageHeader from '@/components/Others/PageHeader'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <PageHeader title='About' subTitle='TASTY AND CRUNCHY' description='Take a virtual tour through our gallery and immerse yourself in the enchanting ambiance of Gangshalik.' />
      <section className='container mt-12'>
        <div>
          <div className='md:flex items-center gap-5'>
            <p>Welcome to Gang-Shalik, where our passion for culinary excellence meets the serene beauty of nature. Nestled in the heart of a lush landscape, our restaurant offers a dining experience that not only tantalizes your taste buds but also reconnects you with the tranquility of the natural world. Our dishes are crafted using the freshest, locally-sourced ingredients, reflecting our commitment to sustainability and the environment.</p>
            <Image className='rounded-lg mx-auto mt-7 md:mt-0' src='/images/about/1.png' width={500} height={500} alt='About Us' />
          </div>
          <div className='md:flex flex-row-reverse mt-12 items-center gap-5'>
            <p>At Gang-Shalik, we believe that a meal is more than just food on a plate; it's an experience that should be savored and shared. Our open-air dining area, surrounded by verdant gardens and the soothing sounds of nature, provides the perfect backdrop for memorable meals. Whether you're celebrating a special occasion or simply seeking a peaceful escape from the hustle and bustle of daily life, Gang-Shalik offers a sanctuary where you can indulge in the art of fine dining amidst the beauty of the natural world.</p>
            <Image className='rounded-lg mx-auto mt-7 md:mt-0' src='/images/about/2.png' width={500} height={500} alt='About Us' />
          </div>
        </div>

      </section>
    </>
  )
}

export default AboutPage