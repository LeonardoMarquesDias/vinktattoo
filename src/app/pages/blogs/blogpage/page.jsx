"use client"

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header/page';
import { TitleSection } from '@/components/titleSection/page';
import Cta from '@/components/cta/page';
import Footer from '@/components/footer/page';

export default function Blog() {
  const navigation = [
    { id: '1', name: 'Home', href: '/' },
    { id: '2', name: 'About', href: '/#about' },
    { id: '3', name: 'Gallery', href: '/#gallery' },
    { id: '4', name: 'Blog', href: '/pages/blogs/blogpage' },
    { id: '5', name: 'Contact', href: '/#contact' },
    { name: 'FAQs', href: '/#faqs' },
  ];

  const articles = [
    {
      id: 1,
      title: 'Complete Guide for Beginners',
      description: 'Everything you need to know before getting your first tattoo',
      href: '/pages/blogs/n1blog',
      imageSrc: '/images/blogs/n1blog.webp',
      imageAlt: '',
    },
    {
      id: 2,
      title: 'Tattoo Trends for 2024 and 2025',
      description: 'What is hot in the tattoo world',
      href: '/pages/blogs/n2blog',
      imageSrc: '/images/blogs/n2blog.webp',
      imageAlt: '',
    },
    {
      id: 3,
      title: 'Is It Possible to Remove a Tattoo?',
      description: 'Learn everything about the most effective method of tattoo removal: Laser tattoo removal.',
      href: '/pages/blogs/n5blog',
      imageSrc: '/images/blogs/n5blog.webp',
      imageAlt: '',
    },
    {
      id: 4,
      title: 'Covering Scars with Tattoos',
      description: 'Learn how to turn your scars into beautiful tattoos with expert tips and insights.',
      href: '/pages/blogs/n3blog',
      imageSrc: '/images/blogs/n4blog.webp',
      imageAlt: '',
    },
    {
      id: 6,
      title: 'Pain-Free Tattoos',
      description: 'Discover the methods to achieve a pain-free tattooing experience, with a focus on the effectiveness of anesthetic creams.',
      href: '/pages/blogs/n6blog',
      imageSrc: '/images/blogs/n6blog.webp',
      imageAlt: '',
    },
    {
      id: 5,
      title: 'Essential Tips for Choosing Your Tattoo Design',
      description: 'Advice on how to select a tattoo design that has personal meaning, considering size, placement, and finding inspiration from different sources.',
      href: '/pages/blogs/n4blog',
      imageSrc: '/images/blogs/n3blog.webp',
      imageAlt: '',
    },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
      <div className="sm:-mt-12 lg:-mt-12">
        <Header navigation={navigation} />
        <TitleSection
          title="Tattoo Universe Blog"
          subtitle="Guides, trends, and essential tips for tattoo enthusiasts"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {articles.map((article) => (
          <div key={article.id} className="group relative">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={article.imageSrc}
                alt={article.imageAlt}
                className="object-cover object-center"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                <div className="w-full rounded-md bg-gold-500 bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                  Read the Blog
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gold-800">
              <h3>
                <Link href={article.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {article.title}
                </Link>
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-400">{article.description}</p>
          </div>
        ))}
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
