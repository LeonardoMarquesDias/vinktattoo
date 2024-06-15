import Link from "next/link";
import Image from "next/image"; 
import { TitleSection } from "../titleSection/page";

export default function Blog() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <TitleSection
          title="Blog Articles"
          subtitle="Discover my expertise, tattoo art, and client satisfaction"
        />
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <Link href="/pages/blogs/blogpage" className="hidden text-sm font-semibold text-gold-800 hover:text-gold-500 sm:block">
            See all blog
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src="/images/blogs/n1blog.webp"
              alt="Complete Guide for Beginners"
              fill
              className="object-cover object-center group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
              <div className="shadow-xl w-full">
                <h3 className="font-semibold text-gold-500">
                  <Link href="/pages/blogs/n1blog">
                    <span className="absolute inset-0" />
                    Complete Guide for Beginners
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Everything you need to know before getting your first tattoo
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              src="/images/blogs/n2blog.webp"
              alt="Tattoo Trends for 2024 and 2025"
              fill
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div className="shadow-xl w-full">
                <h3 className="font-semibold text-gold-500">
                  <Link href="/pages/blogs/n2blog">
                    <span className="absolute inset-0" />
                    Tattoo Trends for 2024 and 2025
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  What's hot in the tattoo world
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              src="/images/blogs/n3blog.webp"
              alt="Essential Tips for Choosing Your Tattoo Design"
              fill
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div className="shadow-xl w-full">
                <h3 className="font-semibold text-gold-500">
                  <Link href="/pages/blogs/n4blog">
                    <span className="absolute inset-0" />
                    Essential Tips for Choosing Your Tattoo Design
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Choosing a meaningful tattoo: consider personal significance, size, placement, and draw inspiration from various sources.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/pages/blogs/blogpage" className="block text-sm font-semibold text-gold-800 hover:text-gold-500 sm:block">
            See all blog
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
