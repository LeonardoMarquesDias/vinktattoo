"use client";

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
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-4">
      <TitleSection
        title="Video Gallery"
        subtitle="Watch our tattoo designs from all angles in motion"
      />

      <div className="flex space-x-3 overflow-x-auto scrollbar-custom">
        {videos.map((video, index) => (
          <div key={video.id} className="min-w-max flex-shrink-0">
            <div className="relative h-[28rem] w-[20rem]">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.videoSrc}
                loop
                muted
                playsInline
                className="aspect-video w-full h-full object-cover hover:opacity-75"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
