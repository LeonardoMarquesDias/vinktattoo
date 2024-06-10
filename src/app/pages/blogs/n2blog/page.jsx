import Image from 'next/image';

import Header from "@/components/header/page";
import Cta from '@/components/cta/Cta';
import Footer from '@/components/footer/Footer';
import { TitleSection } from '@/components/titleSection/page';

export const metadata = {
  title: "",
  description: "",
};

export default function N1blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ]  
  const sections = [
    {
      title: 'Realism on the Rise',
      items: [
        'Hyper-realistic Tattoos: Tattoos that mimic photographs are expected to remain popular in 2024 and 2025. Artists are perfecting their techniques to create images that seem to leap off the skin.',
        'Portraits: With the improvement of tattoo artists’ skills, realistic portraits of loved ones, celebrities, and pets are becoming even more impressive.',
      ]
    },
    {
      title: 'Minimalism and Fine Lines',
      items: [
        'Simple Designs: Minimalist tattoos with fine lines and simplified designs continue to be a popular choice, especially among those who prefer something discreet.',
        'Geometry and Symbolism: Geometric and symbolic tattoos, often in black and white, are a growing trend for those seeking meaning and style in a small design.',
      ]
    },
    {
      title: 'Colorful Tattoos',
      items: [
        'Watercolor: The watercolor technique continues to enchant with its vibrant colors and fluid effects, creating unique pieces of art.',
        'Neo Traditional: A style that combines the traditional with a vivid color palette, becoming a strong trend in the coming years.',
      ]
    },
    {
      title: 'Mixing Styles',
      items: [
        'Combination of Techniques: Artists are increasingly mixing different styles and techniques to create unique and personalized tattoos.',
        'Surrealistic Tattoos: Combinations of realistic and fantastic elements, resulting in surreal works of art on the skin.',
      ]
    }
  ]

  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#FFD700] to-[#DAA520] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="-mt-12">
          <Header navigation={navigation} />
          <TitleSection
            title="Tattoo Trends for 2024 and 2025"
            subtitle="What's hot in the tattoo world"
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gold-200/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
            </svg>
            <figure className="border-l border-gold-500 pl-8" data-aos="fade-right">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-300">
                <p>
                  “Stay ahead in the tattoo world with our insights into the latest trends for 2024 and 2025. Discover what styles, techniques, and designs are making waves and how you can incorporate them into your next tattoo. From hyper-realistic portraits to minimalist lines, vibrant colors to surreal combinations, explore the future of tattooing with confidence and creativity!”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  src="/hero.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gold-800">Vinicios Capobianco</div>
                  <div className="text-gray-400">Tattoo Artist</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-400 lg:col-span-7">
            <figure className="mt-16">
              <Image
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src="/n2blog.webp"
                alt=""
                width={1280}
                height={720}
              />
            </figure>
            <article>
              <div className="mt-16 max-w-4xl mx-auto">
                {sections.map((section, index) => (
                  <section className="mb-8" key={index}>
                    <h2 className="text-2xl font-semibold mb-4 text-gold-800">{section.title}</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-100">
                      {section.items.map((item, idx) => (
                        <li className="text-justify text-gray-400" key={idx}><strong className="text-gray-300">{item.split(': ')[0]}:</strong> {item.split(': ')[1]}</li>
                      ))}
                    </ul>
                  </section>
                ))}
                <section className="mb-8">
                  <h2 className="text-2xl text-gold-800 font-semibold mb-4">Conclusion</h2>
                  <p className="text-justify text-gray-400">Stay ahead in the tattoo world with our insights into the latest trends for 2024 and 2025. From hyper-realistic portraits to minimalist designs, vibrant colors to surreal combinations, explore what's hot and how you can incorporate these trends into your next tattoo. Stay creative and confident with your body art choices!</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
