import Image from 'next/image'; 

import Header from "@/components/header/page";
import Cta from '@/components/cta/Cta';
import Footer from '@/components/footer/Footer';
import { TitleSection } from '@/components/titleSection/page';

export const metadata = {
  title: "",
  description: "",
};

export default function N5blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ]
  const sections = [
    {
      title: 'How Laser Tattoo Removal Works',
      items: [
        'High-Intensity Light Beams: Laser tattoo removal uses high-intensity light beams to break down the ink particles in the tattoo.',
        'Targeting Ink: The laser targets the ink particles without damaging the surrounding skin, making it a precise and effective method.',
      ]
    },
    {
      title: 'Number of Sessions Required',
      items: [
        'Multiple Sessions: The number of sessions required depends on factors like the size, color, and age of the tattoo.',
        'Individual Variation: Each person’s skin and tattoo are different, so the treatment plan is customized for each individual.',
      ]
    },
    {
      title: 'Pain and Discomfort Management',
      items: [
        'Managing Pain: While laser removal can be uncomfortable, it is generally well-tolerated with proper pain management techniques.',
        'Numbing Creams: Topical numbing creams can be applied before the procedure to reduce discomfort.',
      ]
    },
    {
      title: 'Aftercare and Healing',
      items: [
        'Proper Aftercare: Proper aftercare is crucial to ensure the skin heals well and to reduce the risk of scarring.',
        'Cleaning and Moisturizing: Keep the treated area clean and moisturized, and follow all aftercare instructions provided by your specialist.',
      ]
    },
    {
      title: 'Effectiveness of Laser Removal',
      items: [
        'High Success Rate: Laser removal is considered the most effective method for removing tattoos, with the highest success rate for complete removal.',
        'Fading Over Time: Tattoos typically fade gradually over several sessions, leading to complete or near-complete removal.'
      ]
    },
    {
      title: 'Factors Influencing Laser Removal',
      items: [
        'Skin Type: The effectiveness and risk of side effects can vary based on skin type and color.',
        'Tattoo Color: Some colors are more challenging to remove than others. Black and dark blue are typically easier to remove than lighter colors.',
        'Tattoo Age: Older tattoos are generally easier to remove because the ink has had time to break down.'
      ]
    },
    {
      title: 'Risks and Side Effects',
      items: [
        'Scarring: There is a risk of scarring with any tattoo removal method, although laser removal has a lower risk compared to other methods.',
        'Infection: Proper aftercare is essential to prevent infection during the healing process.',
        'Skin Discoloration: Some people may experience changes in skin color in the treated area, but this is typically temporary.'
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
      <div className="mx-auto max-w-7xl mb-20 px-6 lg:px-8">
        <div className="-mt-12">
          <Header navigation={navigation} />
          <TitleSection
            title="Is It Possible to Remove a Tattoo?"
            subtitle="Learn everything about the most effective method of tattoo removal"
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
                  “Thinking about removing a tattoo? This guide provides comprehensive information on laser tattoo removal, the most effective method for getting rid of unwanted ink. Understand the process, what to expect, and the risks and benefits of laser removal.”
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
                src="/n5blog.webp"
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
                  <p className="text-justify text-gray-400">Removing a tattoo is a personal decision that involves careful consideration of the laser removal method. Laser tattoo removal stands out as the most effective method, offering the highest success rate for complete removal. By understanding the laser removal process and consulting with professionals, you can make an informed choice that aligns with your goals and expectations. Proper aftercare is essential to ensure the best results and to minimize the risk of side effects.</p>
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
