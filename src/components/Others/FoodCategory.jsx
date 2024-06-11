"use client"
import Image from 'next/image'
import React, { useState } from 'react'


const categories = [
  {
    id: 1,
    name: 'CHEESE CROISSANTS',
    image: '/images/menus/1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 2,
    name: 'BRUSCHETTI',
    image: '/images/menus/1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 3,
    name: 'AWESOME VEGETABLES',
    image: '/images/menus/1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 4,
    name: 'ALL-TIME BEST RECIPES',
    image: '/images/menus/1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 5,
    name: 'MEAL FOR WHOLE FAMILY',
    image: 'images/menus/1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  }
]

const FoodCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className='container primary-gap'>
      <div className='grid grid-cols-12 justify-items-center'>
        <div className='col-span-3'>
          {categories.map((category) => (
            <div key={category.id} className='flex items-center space-x-4 pb-6'>
              <p
                className={`text-md text-gray-700 cursor-pointer border-b hover:border-black transition-all mb-0 ${selectedCategory.id === category.id ? 'border-black' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-1 border-r border-gray-300 border-2"></div>
        <div className='col-span-7'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-8'>
              <h3 className='text-3xl font-semibold'>{selectedCategory.name}</h3>
              <p className='text-gray-600 mt-4'>{selectedCategory.description}</p>
            </div>
            <div className='col-span-4 w-72 h-72 relative'>
              <Image layout='fill' src={selectedCategory.image} alt={selectedCategory.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodCategory