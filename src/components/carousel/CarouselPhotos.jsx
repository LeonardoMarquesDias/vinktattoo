"use client";

import Image from 'next/image';
import { TitleSection } from '../titleSection/page';

export default function CarouselPhotos() {
  const images = [
    { id: 1, imageSrc: '/images/tattos/1.jpg' },
    { id: 2, imageSrc: '/images/tattos/2.jpg' },
    { id: 3, imageSrc: '/images/tattos/3.jpg' },
    { id: 4, imageSrc: '/images/tattos/4.jpg' },
    { id: 5, imageSrc: '/images/tattos/5.jpg' },
    { id: 6, imageSrc: '/images/tattos/6.jpg' },
    { id: 7, imageSrc: '/images/tattos/7.jpg' },
    { id: 8, imageSrc: '/images/tattos/8.jpg' },
    { id: 9, imageSrc: '/images/tattos/9.jpg' },
    { id: 10, imageSrc: '/images/tattos/10.jpg' },
    { id: 11, imageSrc: '/images/tattos/11.jpg' },
    { id: 12, imageSrc: '/images/tattos/12.jpg' },
    { id: 13, imageSrc: '/images/tattos/13.jpg' },
    { id: 14, imageSrc: '/images/tattos/14.jpg' },
    { id: 15, imageSrc: '/images/tattos/15.jpg' },
    { id: 16, imageSrc: '/images/tattos/16.jpg' },
    { id: 17, imageSrc: '/images/tattos/17.jpg' },
    { id: 18, imageSrc: '/images/tattos/18.jpg' },
    { id: 19, imageSrc: '/images/tattos/19.jpg' },
    { id: 20, imageSrc: '/images/tattos/20.jpg' },
    { id: 21, imageSrc: '/images/tattos/21.jpg' },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4" id="gallery">
      <TitleSection
        title="Photo Gallery"
        subtitle="Discover my expertise, tattoo art, and client satisfaction"
      />
      <div className="flex space-x-3 overflow-x-auto scrollbar-custom">
        {images.map((image) => (
          <div key={image.id} className="min-w-max flex-shrink-0">
            <div className="relative h-[28rem] w-[20rem]">
              <Image
                src={image.imageSrc}
                alt="Tattoo Image"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-75"
                priority
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-col-reverse text-gold-800 mt-2 text-right sm:hidden"> 
        Swipe
        <span aria-hidden="true"> &rarr;</span>
      </div>
    </section>
  );
}
