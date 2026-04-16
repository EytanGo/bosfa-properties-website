import PageHero from '../components/PageHero';
import { images } from '../data/images';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PageHero
        title="ABOUT US"
        subtitle="A Private, Family-Owned Real Estate Company"
        backgroundImage={images.aboutHero}
        tall
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-4">
            OUR STORY
          </p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-8">
            A Legacy of Transformation
          </h2>
        </div>

        <div className="space-y-6 text-gray-700 font-noto">
          <p className="text-base leading-relaxed">
            BOSFA Properties was founded by Daniel Goldstein, a visionary entrepreneur whose passion for real estate and community development has shaped the company's direction for decades. Beginning his career in 1981 as an electrician, Daniel demonstrated the work ethic and attention to detail that would become hallmarks of BOSFA's approach to property management and development.
          </p>

          <p className="text-base leading-relaxed">
            Daniel's entrepreneurial journey led him to establish an import company in Israel, where he honed his business acumen and developed a deep understanding of international commerce. This experience prepared him for the next chapter of his career when he joined E&M Management, where he gained extensive expertise in the real estate sector. Recognizing the potential to create something uniquely his own, Daniel founded BOSFA Properties alongside his son Aron, bringing together their shared vision of finding value in underappreciated real estate situations and transforming them into thriving communities.
          </p>

          <p className="text-base leading-relaxed">
            Today, BOSFA Properties manages a diverse portfolio spanning multiple states, with a focus on residential, commercial, and development projects. Beyond his professional achievements, Daniel's commitment to service extends to his volunteer work as a firefighter and his role as a trustee at Lawrence. His life exemplifies the values that guide BOSFA: integrity, dedication, and a genuine desire to improve the communities we serve.
          </p>
        </div>
      </section>

      {/* Our People Section */}
      <section className="bg-navy-dark py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-4">
              OUR PEOPLE
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Meet the Team
            </h2>
            <p className="text-gray-300 font-noto text-base max-w-2xl mx-auto">
              Our dedicated team brings decades of combined experience in real estate, development, and property management.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Nqe3RQOx70s"
                title="BOSFA Properties Team"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
