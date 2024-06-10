export function TitleSection({ title, subtitle }) {
  return (
    <div className="mt-32 mb-14 mx-auto text-left sm:mt-52 sm:mb-16">
      <p className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gold-800 to-gray-900 sm:text-4xl">{title}</p>
      <h2 className="mt-2 text-base font-semibold leading-7 text-gray-400">
          {subtitle}
      </h2>
    </div>
  );
}