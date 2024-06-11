import React from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'

const menu = [
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Chicken Burger',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit exercitationem',
    price: 10.99,
    image: 'https://via.placeholder.com/150'
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
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-between mx-auto gap-4 mt-12'>

          {menu.map((item, index) => (
            <div key={index} className='flex gap-4'>
              <div>
                <Image src={item.image} alt={item.name} width={100} height={100} />
              </div>
              <div>
                <div className='flex justify-between pb-3'>
                  <h3>{item.name}</h3>
                  <div className="relative flex-grow mx-2">
                    <div className="absolute inset-y-0 left-0 w-full border-b border-gray-400"></div>
                  </div>
                  <p>$ {item.price}</p>
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