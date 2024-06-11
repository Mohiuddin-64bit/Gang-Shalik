"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Image from 'next/image';

const menus = [
  {
    image: '/images/menus/1.jpg',
  },
  {
    image: '/images/menus/2.jpg',
  },
  {
    image: '/images/menus/3.jpg',
  },
  {
    image: '/images/menus/4.jpg',
  },
  {
    image: '/images/menus/1.jpg',
  },
  {
    image: '/images/menus/2.jpg',
  },
  {
    image: '/images/menus/3.jpg',
  },
  {
    image: '/images/menus/2.jpg',
  }
];

const MenuSlide = () => {
  return (
    <section className='mt-5 px-5'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {
          menus.map((menu, index) => (
            <SwiperSlide key={index}>
              <div className='w-72 h-96 '>
                <Image src={menu.image} objectFit='cover' layout='fill' alt='menu' />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )

}

export default MenuSlide