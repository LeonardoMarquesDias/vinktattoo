"use client"

import Image from "next/image";

import Header from "@/components/header/page";
import Cta from '@/components/cta/page';
import Footer from '@/components/footer/page';
import { TitleSection } from '@/components/titleSection/page';

export default function N3blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ]
  const sections = [
    {
      title: 'Benefits of Covering Scars with Tattoos',
      items: [
        'Emotional Healing: Covering scars with tattoos can provide emotional healing, boosting self-confidence and helping individuals reclaim their bodies.',
        'Creative Expression: Tattoos offer a unique way to creatively express oneself, turning a mark or scar into a meaningful piece of art.',
      ]
    },
    {
      title: 'Choosing the Right Tattoo Artist',
      items: [
        'Research Local Artists: Start by researching tattoo artists who specialize in scar cover-ups. Look at their portfolios to assess their expertise.',
        'Consultations: Schedule consultations to discuss your ideas and get professional advice on the best designs and techniques for covering your scars.',
      ]
    },
    {
      title: 'Design Considerations',
      items: [
        'Custom Designs: Work with your tattoo artist to create a custom design that complements the scar and incorporates your personal style.',
        'Size and Placement: Consider the size and placement of the tattoo to ensure it effectively covers the scar while looking natural and cohesive on your skin.',
      ]
    },
    {
      title: 'Tattooing Process for Scar Cover-Ups',
      items: [
        'Preparation: The artist will clean and prepare the area, ensuring the skin is ready for tattooing.',
        'Tattooing: The process may take longer than regular tattoos, as the artist carefully works around the texture of the scar.',
        'Aftercare: Follow the aftercare instructions provided by your artist to ensure proper healing and vibrant results.',
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
        <div className="sm:-mt-12 lg:-mt-12">
          <Header navigation={navigation} />
          <TitleSection
            title="Covering Scars with Tattoos"
            subtitle="Learn how to turn your scars into beautiful tattoos with expert tips and insights."
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
                  “Learn how to turn your scars into beautiful tattoos with expert tips and insights. Discover the emotional and aesthetic benefits, and get inspired by creative ways to transform your marks into art. From choosing the right artist to understanding the tattooing process, we've got you covered.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  src="/hero.jpg"
                  alt="Tattoo Artist Vinicios Capobianco"
                  width={40}
                  height={40}
                  className="mt-1 h-10 w-10 flex-none rounded-full"
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
                className="rounded-xl"
                src="/images/blogs/n4blog.webp"
                alt="Tattoo Guide Image"
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
                  <p className="text-justify text-gray-400">Covering scars with tattoos can be a transformative experience, both emotionally and aesthetically. By choosing the right artist and design, you can turn any mark into a beautiful piece of art. Embrace the process and enjoy the confidence and creativity that comes with your new tattoo.</p>
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
