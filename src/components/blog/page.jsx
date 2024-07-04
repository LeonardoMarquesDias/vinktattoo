import Link from "next/link";
import { TitleSection } from "../titleSection/page";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      src: "/images/blogs/n1blog.webp",
      alt: "Complete Guide for Beginners",
      title: "Complete Guide for Beginners",
      description: "Everything you need to know before getting your first tattoo",
      link: "/pages/blogs/n1blog",
      aspectClass: "sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
    },
    {
      id: 2,
      src: "/images/blogs/n2blog.webp",
      alt: "Tattoo Trends for 2024 and 2025",
      title: "Tattoo Trends for 2024 and 2025",
      description: "What's hot in the tattoo world",
      link: "/pages/blogs/n2blog",
      aspectClass: "sm:aspect-none sm:relative sm:h-full"
    },
    {
      id: 3,
      src: "/images/blogs/n3blog.webp",
      alt: "Essential Tips for Choosing Your Tattoo Design",
      title: "Essential Tips for Choosing Your Tattoo Design",
      description: "Choosing a meaningful tattoo: consider personal significance, size, placement, and draw inspiration from various sources.",
      link: "/pages/blogs/n4blog",
      aspectClass: "sm:aspect-none sm:relative sm:h-full"
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4">
      <TitleSection
        title="Tattoo Universe Blog"
        subtitle="Guides, trends, and essential tips for tattoo enthusiasts"
      />
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <Link href="/pages/blogs/blogpage" className="hidden text-sm font-semibold text-gold-800 hover:text-gold-500 sm:block">
          See all blog
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className={`group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg ${post.aspectClass}`}>
            <img
              src={post.src}
              alt={post.alt}
              className="object-cover object-center group-hover:opacity-75 w-full h-full"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div className="bg-black bg-opacity-50 shadow-xl w-full p-4 rounded">
                <h3 className="font-semibold text-gold-500 text-shadow-black">
                  <Link href={post.link}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white text-shadow-black">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:hidden">
        <Link href="/pages/blogs/blogpage" className="block text-sm font-semibold text-gold-800 hover:text-gold-500">
          See all blog
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
