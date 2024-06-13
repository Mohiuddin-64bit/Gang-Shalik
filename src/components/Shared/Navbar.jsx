import Image from 'next/image'
import React from 'react'
import MobileNav from '../Others/MobileNav'
import { Menus } from '@/lib/Menus'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="fixed w-full z-30 backdrop-blur-sm bg-black/30">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-teal-600">
            <span className="sr-only">Home</span>
            <Image className='w-20 md:w-24' src="/GangShalik.jpg" alt="Logo" width={96} height={96} />
          </a>
          <div className="hidden md:flex">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {Menus.map((menu, index) => (
                  <li key={index}>
                    <Link className="text-gray-100 hover:text-gray-300 transition" href={menu.url}>
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='md:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
