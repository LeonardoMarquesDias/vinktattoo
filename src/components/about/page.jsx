import { TitleSection } from '../titleSection/page';
import Image from 'next/image';

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar: '/hero.jpg',
}

export default function About() {
  return (
    <div className="mt-28 max-w-7xl mx-auto px-4 lg:-mt-28" id="about">
      <TitleSection
        title="About" 
        subtitle="Meet the tattoo artist"
      />
      <div className="h-32 w-full object-cover lg:h-48 bg-team-pattern bg-team-size mask-team-mask"></div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image 
              className="h-24 w-24 ring-4 rounded-lg ring-gray-600 sm:h-32 sm:w-32" 
              src={profile.avatar} 
              alt="Profile Image" 
              width={128} 
              height={128} 
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gold-500">{profile.name}</h1>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-900">{profile.name}</h1>
        </div>
      </div>
      <div className="relative mt-12 pt-4 isolate mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1d4240dd-898f-445f-932d-e2872fd12de3"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-500/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
        </svg>
        <div className="max-w-5xl xl:col-span-4 text-justify">
          <p className="mt-6 text-lg leading-8 text-gray-100">
            With 7 years of professional experience, Ricardo Cooper is dedicated to creating stunning, custom tattoos that reflect each client's unique vision and personality. Known for exceptional attention to detail and a wide range of styles, from traditional to modern, he brings artistry and expertise to every piece. Together, we will transform your ideas into beautiful and lasting art.
          </p>
        </div> 
      </div>
    </div>
  )
}
