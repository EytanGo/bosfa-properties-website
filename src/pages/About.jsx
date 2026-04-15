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
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-gold font-montserrat text-sm font-semibold uppercase tracking-widest mb-4">
            OUR STORY
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-8">
            A Legacy of Transformation
          </h2>
        </div>

        <div className="space-y-6 text-gray-700 font-montserrat">
          <p className="text-lg leading-relaxed">
            BOSFA Properties was founded by Daniel Goldstein, a visionary entrepreneur whose passion for real estate and community development has shaped the company's direction for decades. Beginning his career in 1981 as an electrician, Daniel demonstrated the work ethic and attention to detail that would become hallmarks of BOSFA's approach to property management and development.
          </p>

          <p className="text-lg leading-relaxed">
            Daniel's entrepreneurial journey led him to establish an import company in Israel, where he honed his business acumen and developed a deep understanding of international commerce. This experience prepared him for the next chapter of his career when he joined E&M Management, where he gained extensive expertise in the real estate sector. Recognizing the potential to create something uniquely his own, Daniel founded BOSFA Properties alongside his son Aron, bringing together their shared vision of finding value in underappreciated real estate situations and transforming them into thriving communities.
          </p>

          <p className="text-lg leading-relaxed">
            Today, BOSFA Properties manages a diverse portfolio spanning multiple states, with a focus on residential, commercial, and development projects. Beyond his professional achievements, Daniel's commitment to service extends to his volunteer work as a firefighter and his role as a trustee at Lawrence. His life exemplifies the values that guide BOSFA: integrity, dedication, and a genuine desire to improve the communities we serve.
          </p>
        </div>
      </section>

      {/* Our People Section */}
      <section className="bg-navy-dark py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-gold font-montserrat text-sm font-semibold uppercase tracking-widest mb-4">
              OUR PEOPLE
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Meet the Team
            </h2>
            <p className="text-gray-300 font-montserrat text-lg max-w-2xl mx-auto">
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

      {/* Leadership Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-gold font-montserrat text-sm font-semibold uppercase tracking-widest mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy">
            Leadership
          </h2>
        </div>

        <div className="space-y-16">
          {/* Daniel Goldstein */}
          <div className="border-b border-gray-200 pb-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:flex-shrink-0">
                <div className="h-48 w-48 bg-navy-light rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy mb-2">
                  Daniel Goldstein
                </h3>
                <p className="text-gold font-montserrat font-semibold uppercase text-sm tracking-widest mb-6">
                  Founder & Managing Member
                </p>
                <div className="space-y-4 text-gray-700 font-montserrat">
                  <p className="leading-relaxed">
                    Daniel Goldstein is the visionary founder and managing member of BOSFA Properties. With a career spanning over four decades, he has built an impressive portfolio of residential, commercial, and development properties across multiple states.
                  </p>
                  <p className="leading-relaxed">
                    His entrepreneurial journey began in 1981 as an electrician, demonstrating the foundational work ethic that continues to drive BOSFA's success. Daniel's experience extends internationally through his founding of an import company in Israel, and he further honed his real estate expertise while working with E&M Management before establishing BOSFA Properties with his son Aron.
                  </p>
                  <p className="leading-relaxed">
                    Beyond his professional accomplishments, Daniel is deeply committed to his community, serving as a volunteer firefighter and as a trustee at Lawrence. He exemplifies the values of integrity, dedication, and a genuine desire to create positive change through real estate transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benjamin Diehl */}
          <div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:flex-shrink-0">
                <div className="h-48 w-48 bg-navy-light rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy mb-2">
                  Benjamin Diehl
                </h3>
                <p className="text-gold font-montserrat font-semibold uppercase text-sm tracking-widest mb-6">
                  Development Manager
                </p>
                <div className="space-y-4 text-gray-700 font-montserrat">
                  <p className="leading-relaxed">
                    Benjamin Diehl is the Development Manager at BOSFA Properties, overseeing the company's ambitious portfolio of development projects. With expertise managing over 2 million square feet of property, Benjamin brings a strategic and detail-oriented approach to every project he leads.
                  </p>
                  <p className="leading-relaxed">
                    He began his tenure at BOSFA on the leasing team, where he gained valuable insight into property operations and tenant relationships. His educational background, featuring a degree in Architecture from Virginia Tech, provides him with a unique perspective on design and development feasibility that enhances BOSFA's project outcomes.
                  </p>
                  <p className="leading-relaxed">
                    Benjamin's combination of hands-on property experience and formal architectural training makes him an invaluable asset to BOSFA's growth and development initiatives, ensuring that each project is executed with precision and vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
