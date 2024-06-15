import Cta from '@/components/cta/Cta';
import Footer from '@/components/footer/Footer';
import Image from 'next/image'; 
import Header from '@/components/header/page';
import { TitleSection } from '@/components/titleSection/page';

export default function N1blog() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Blog', href: '/pages/blogs/blogpage' },
    { name: 'Contact', href: '/#contact' },
  ];
  const sections = [
    {
      title: 'Choosing a Tattoo Studio',
      items: [
        'Research Local Studios: Start by researching tattoo studios in your area. Ask friends or family members with tattoos for recommendations.',
        'Read Online Reviews: Websites like Google, Yelp, and social media are great sources of reviews. Read the comments to understand other customers\' experiences.',
        'Visit the Studio: Before making a decision, visit the studios you shortlisted. Observe the cleanliness, organization, and behavior of the tattoo artists.',
        'Check Licenses and Certifications: Make sure the studio and tattoo artists have the necessary licenses and follow local health regulations.',
        'Talk to the Tattoo Artist: Schedule a consultation to discuss your idea. This helps evaluate the artist’s communication and professionalism.'
      ]
    },
    {
      title: 'Pre-Tattoo Skin Care',
      items: [
        'Hydrate: Keeping your skin well-hydrated helps with the tattooing process. Drink plenty of water in the days leading up to your session.',
        'Avoid Sun Exposure: Don\'t expose your skin to direct sunlight before getting a tattoo, as sunburn or tanned skin can complicate the process.',
        'No Alcohol or Drugs: Avoid alcohol and drugs 24 hours before your tattoo as they can affect healing and increase bleeding.',
        'Get Good Sleep: Ensure a good night’s sleep before the tattoo day to be relaxed and in good physical condition.',
        'Eat Well: Have a healthy meal before the session to avoid feeling weak or dizzy during the process.'
      ]
    },
    {
      title: 'What to Expect from the Process',
      items: [
        'Arrival at the Studio: On the day of the tattoo, arrive a bit early to fill out forms and discuss the final details with the tattoo artist.',
        'Skin Preparation: The artist will clean and disinfect the area to be tattooed. They will then apply the design to your skin using a stencil or freehand drawing.',
        'Starting the Tattoo: The tattoo begins with basic lines, followed by shading and coloring. The duration depends on the size and complexity of the design.',
        'Pain and Comfort: Pain levels vary from person to person and by body area. Discuss your concerns with the artist and take breaks if needed.',
        'Post-Tattoo Care: The artist will apply a bandage over the new tattoo. You\'ll receive instructions on how to care for the tattoo in the coming weeks to ensure proper healing.'
      ]
    },
    {
      title: 'Post-Tattoo Care',
      items: [
        'Cleaning: Gently wash the tattoo with warm water and mild soap. Avoid scrubbing and pat dry with a clean towel.',
        'Hydration: Apply a healing ointment recommended by your artist to keep the skin moisturized and speed up healing.',
        'Avoid Sun and Immersion: Protect the tattoo from sun exposure and avoid swimming in pools, the sea, or baths until it’s fully healed.',
        'Wear Loose Clothing: Choose loose clothes that don’t rub against the tattoo and allow the skin to breathe.',
        'Don’t Scratch or Peel: Let the scabs fall off naturally to avoid scarring and ink loss.'
      ]
    }
  ];

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
            title="Complete Guide for Beginners"
            subtitle="Everything you need to know before getting your first tattoo"
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
                  “Ready for your first tattoo? Our complete guide for beginners provides all the essential information for a safe and rewarding experience. Learn how to choose the perfect studio, prepare your skin, understand the tattooing process, and take care of your new body art. With years of experience and a passion for tattooing, this guide is designed to help you approach your first tattoo with confidence. Read on and get ready to turn your vision into reality!”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="mt-1 h-10 w-10 flex-none rounded-full">
                  <Image
                    src="/hero.jpg"
                    alt="Tattoo Artist Vinicios Capobianco"
                    width={40}
                    height={40}
                    className="mt-1 h-10 w-10 flex-none rounded-full"
                  />
                </div>
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
                src="/images/blogs/n1blog.webp"
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
                  <p className="text-justify text-gray-400">Getting your first tattoo is an exciting and personal journey. With the right information and proper care, you can ensure a positive experience and a beautiful, well-cared-for tattoo. Remember to choose a reputable studio, take good care of your skin before and after the procedure, and enjoy your new body art with pride.</p>
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
