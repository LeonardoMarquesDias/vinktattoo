"use client"

import { useEffect, useRef } from 'react';
import { TitleSection } from '../titleSection/page';

export default function CarouselVideos() {
  const videos = [
    { id: 1, videoSrc: '/videos/0.mp4' },
    { id: 2, videoSrc: '/videos/2.mp4' },
    { id: 3, videoSrc: '/videos/3.mp4' },
    { id: 4, videoSrc: '/videos/4.mp4' },
    { id: 5, videoSrc: '/videos/5.mp4' },
    { id: 6, videoSrc: '/videos/6.mp4' },
    { id: 7, videoSrc: '/videos/7.mp4' },
  ];

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    videoRefs.current.forEach(video => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <section className="">
      <TitleSection
        title="Video Gallery"
        subtitle="Watch our tattoo designs from all angles in motion"
      />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex space-x-3 overflow-x-auto scrollbar-custom">
          {videos.map((video, index) => (
            <div key={video.id} className="min-w-max flex-shrink-0">
              <div className="relative h-[28rem] w-[20rem]">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.videoSrc}
                  preload="auto"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover hover:opacity-75"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-gold-800 mt-2 text-right sm:hidden">
          Swipe
          <span aria-hidden="true"> &rarr;</span>
        </div>
      </div>
    </section>
  );
}
