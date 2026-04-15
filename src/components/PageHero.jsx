export default function PageHero({ title, subtitle, backgroundImage, tall = false }) {
  const heightClass = tall ? 'h-[28rem] md:h-[32rem]' : 'h-80 md:h-96';

  return (
    <section
      className={`relative w-full ${heightClass} bg-navy bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden mt-20`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(26, 39, 68, 0.7), rgba(26, 39, 68, 0.7)), url('${backgroundImage}')`,
            }
          : {}
      }
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white uppercase mb-4 tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl font-montserrat text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
