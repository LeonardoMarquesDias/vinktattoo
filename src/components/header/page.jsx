"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header({ navigation = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50" id="home">
      <div className="mx-auto max-w-7xl">
        <div className="px-4 pt-6 lg:max-w-2xl lg:pr-0">
          <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Vinicios Capobianco</span>
              <img
                alt="Your Company"
                className="h-14 w-auto"
                src="/logo.png"
                width={40}
                height={40}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gold-500 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-100">
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 px-6 pt-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Vinicios Capobianco</span>
              <img
                className="h-14 w-auto"
                src="/logo.png"
                alt="Vinicios Capobianco"
                width={40}
                height={40}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gold-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 pl-4 flow-root">
            <div className="-my-6 divide-y divide-gold-500">
              <div className="space-y-2 py-6" onClick={() => setMobileMenuOpen(false)}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-gold-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
