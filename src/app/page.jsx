"use client"

import Head from 'next/head'
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import CarouselPhotos from "@/components/carousel/CarouselPhotos";
import CarouselVideos from "@/components/carousel/CarouselVideos";
import Blog from "@/components/blog/page";
import GoogleMaps from "@/components/googleMap/page";
import Faqs from "@/components/faqs/page";
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
     <Head>
        <title>Transform Your Ideas into Permanent Art</title>
        <meta name="description" content="Custom tattoos created with passion, precision, and artistry. Transform your ideas into permanent art with our skilled artists." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3" />
        <link rel="canonical" href="https://seusite.com" />
        <meta name="author" content="Seu Nome" />
      </Head>
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
