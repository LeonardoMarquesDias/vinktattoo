"use client"

import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import CarouselPhotos from "@/components/carousel/CarouselPhotos";
import CarouselVideos from "@/components/carousel/CarouselVideos";
import GoogleMaps from "@/components/googleMap/page";
import Faqs from "@/components/faqs/page";
import Blog from "@/components/blog/page";
import Cta from "@/components/cta/page";
import Footer from "@/components/footer/page";

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <CarouselPhotos />
      <CarouselVideos />
      <Blog />
      <GoogleMaps />
      <Faqs />
      <Cta />
      <Footer />
    </>
  );
}
