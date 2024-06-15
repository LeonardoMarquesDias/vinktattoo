"use client"

import Image from 'next/image'; 

import Header from "@/components/header/page";
import Cta from '@/components/cta/Cta';
import Footer from '@/components/footer/Footer';
import { TitleSection } from '@/components/titleSection/page';

export default function N4blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ]
  const sections = [
    {
      title: 'Finding Personal Meaning',
      items: [
        'Reflect on Personal Stories: Think about meaningful events, people, or symbols in your life that could be translated into a tattoo design.',
        'Explore Cultural Significance: Research symbols and designs from different cultures that resonate with you and your personal journey.',
      ]
    },
    {
      title: 'Considering Size and Placement',
      items: [
        'Start Small: If you’re new to tattoos, consider starting with a smaller design to see how you like the experience and the look.',
        'Think About Visibility: Decide whether you want your tattoo to be visible all the time or easily concealable for professional or personal reasons.',
        'Consider Future Modifications: Plan for potential future tattoos and how your new design will fit with them.',
      ]
    },
    {
      title: 'Finding Inspiration',
      items: [
        'Browse Portfolios: Look at the portfolios of different tattoo artists to get inspiration and see what styles appeal to you.',
        'Use Social Media: Platforms like Instagram and Pinterest are great for finding unique tattoo designs and seeing what’s trending.',
        'Visit Tattoo Conventions: Attend tattoo conventions to see the latest in tattoo art and get inspired by the creativity on display.',
      ]
    },
    {
      title: 'Consulting with a Tattoo Artist',
      items: [
        'Schedule a Consultation: Talk to a tattoo artist about your ideas. They can provide valuable input and help refine your design.',
        'Listen to Professional Advice: Be open to suggestions from your artist about design adjustments, placement, and size to ensure the best result.',
        'Review the Final Design: Make sure you are completely happy with the design before proceeding. It’s better to take your time than to rush into something permanent.',
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
            title="Essential Tips for Choosing Your Tattoo Design"
            subtitle="Advice on how to select a tattoo design that has personal meaning, considering size, placement, and finding inspiration from different sources."
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
                  “Choosing the perfect tattoo design is a deeply personal decision. In this guide, we'll help you explore your personal stories, consider the size and placement of your tattoo, find inspiration from various sources, and work closely with a tattoo artist to bring your vision to life.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  src="/hero.jpg"
                  alt=""
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
                src="/images/blogs/n3blog.webp"
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
                  <p className="text-justify text-gray-400">Choosing the right tattoo design is a significant decision that requires careful thought and planning. By considering personal meaning, size and placement, and seeking inspiration from various sources, you can ensure that your tattoo will be something you cherish forever. Work closely with a professional tattoo artist to bring your vision to life and create a beautiful piece of art on your skin.</p>
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
