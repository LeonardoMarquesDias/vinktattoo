import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import CarouselPhotos from "@/components/carousel/CarouselPhotos";
import CarouselVideos from "@/components/carousel/CarouselVideos";
import GoogleMaps from "@/components/googleMap/page";
import Faqs from "@/components/faqs/page";
import Blog from "@/components/blog/page";
import Cta from "@/components/cta/page";
import Footer from "@/components/footer/page";

export default function Home() {
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
