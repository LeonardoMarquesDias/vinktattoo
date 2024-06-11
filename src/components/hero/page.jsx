"use client"

import Link from 'next/link'

import { MapPinIcon  } from '@heroicons/react/24/outline'
import Header from '../header/page'
import Button from '../button/page'

export default function Home() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ]
  
  return (
    <div>
      <Header navigation={navigation} />
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative  pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute z-10 inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-950 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-4 py-32 sm:py-40 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="mb-10 flex">
                  <div className="inline-flex items-center rounded-full bg-gold-200/10 px-3 py-1 text-sm font-semibold leading-6 text-gold-500 ring-1 ring-inset ring-gold-800/20">
                    <Link href="#" className="flex pr-1 text-gray-100 cursor-pointer">
                      <MapPinIcon className="w-4 mr-1" /> 
                      <span>Swindon</span> 
                    </Link> 
                    - Vinicios Capobianco
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-900 sm:text-6xl">
                  Transform your ideas into permanent art
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Custom tattoos, made with passion and precision.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button />
                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-100">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/hero.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
