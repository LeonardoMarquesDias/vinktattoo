export function TitleSection({ title, subtitle }) {
  return (
    <div className="w-full bg-gradient-to-t from-gray-950 to-gray-800 mt-28 mb-8 sm:mt-32 sm:mb-12 border-t-2 border-gray-700">
      <div className="px-4 max-w-7xl w-full pt-8 pb-8 sm:pt-16 sm:pb-16 mx-auto text-left" data-aos="fade-right">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gold-800 to-gray-900">
          {title}
        </p>
        <h2 className="mt-2 text-sm sm:text-base lg:text-lg font-semibold leading-6 sm:leading-7 text-gray-400">
          {subtitle}
        </h2>
      </div>
    </div>
  );
}
