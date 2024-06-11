import React from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'

const menu = [
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: '/images/menus/1.jpg'
  },
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: '/images/menus/3.jpg'
  },
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: '/images/menus/4.jpg'
  },
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: '/images/menus/2.jpg'
  },
]

const OurMenu = () => {
  return (
    <section>
      <TitleSection
        title='Our Menu'
        subTitle='TASTY AND CRUNCHY'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem, nemo illo dolores facere dicta cum, velit adipisci quas voluptatum, sed beatae perspiciatis nihil sit expedita in iusto dolore ullam cumque distinctio consectetur et deserunt molestiae. A, error! Aperiam!'
      />
      <div className='container mb-32'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
          {menu.map((item, index) => (
            <div key={index} className='flex flex-col lg:flex-row gap-4 p-4 bg-white'>
              <div className='w-24 h-24 relative'>
                <Image src={item.image} alt={item.name} layout='fill' objectFit='cover' className='rounded-sm' />
              </div>
              <div className='flex-grow'>
                <div className='flex justify-between items-center pb-3'>
                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                  <div className="flex-grow mx-2 relative">
                    <div className="absolute inset-y-0 left-0 w-full border-b border-gray-400"></div>
                  </div>
                  <p className='text-lg font-semibold'>$ {item.price}</p>
                </div>
                <p className='text-gray-500'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurMenu