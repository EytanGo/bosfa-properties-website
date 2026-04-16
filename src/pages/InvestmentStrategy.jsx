import { images } from '../data/images';
import PageHero from '../components/PageHero';

export default function InvestmentStrategy() {
  const pillars = [
    {
      number: '01',
      title: 'Identify',
      description:
        'We find value in underappreciated situations where our experience and capital can unlock significant upside. We identify properties with strong fundamentals and catalysts for improvement.',
    },
    {
      number: '02',
      title: 'Acquire & Rehabilitate',
      description:
        'We infuse the necessary capital and expertise to transform properties. Our hands-on approach ensures quality renovations that create lasting value for residents and investors.',
    },
    {
      number: '03',
      title: 'Stabilize & Grow',
      description:
        'We stabilize the properties through professional management and operational excellence. We then position them for long-term growth and sustainable returns.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Investment Strategy"
        subtitle="Our proven approach to identifying and developing value-add properties"
        backgroundImage={images.investmentBuilding}
        tall
      />

      {/* Description Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="space-y-6 text-gray-700 font-noto leading-relaxed">
          <p className="text-lg">
            BOSFA Properties specializes in acquiring, developing, and managing value-add
            multifamily and commercial properties throughout the Northeast. Our investment
            philosophy centers on identifying undervalued assets, executing strategic
            improvements, and creating sustainable, long-term value.
          </p>
          <p className="text-lg">
            As a family-owned company with deep roots in real estate, we bring hands-on
            expertise and a personal commitment to every project. Our strong relationships
            with local and national lenders provide us with access to capital and deal
            opportunities that give us a competitive advantage.
          </p>
          <p className="text-lg">
            We believe in building communities, not just buildings. Every property we touch
            reflects our commitment to quality, sustainability, and creating positive impact
            in the neighborhoods we serve.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gray-50 py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-navy uppercase mb-4">
              Our Approach
            </h2>
            <p className="text-lg font-noto text-gray-600 max-w-2xl mx-auto">
              Three proven pillars that drive our investment success
            </p>
          </div>

          {/* Investment Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number */}
                <div className="mb-6">
                  <span className="text-5xl sm:text-6xl font-playfair font-bold text-gold">
                    {pillar.number}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-navy mb-4 uppercase">
                  {pillar.title}
                </h3>
                {/* Description */}
                <p className="text-gray-700 font-noto leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BOSFA Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-navy uppercase mb-12 text-center">
            Why Choose BOSFA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-playfair font-bold text-gold mb-3 uppercase">
                Experienced Team
              </h3>
              <p className="text-gray-700 font-noto leading-relaxed">
                Our leadership brings decades of combined experience in acquisitions,
                development, operations, and financial management across multifamily and
                commercial sectors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-bold text-gold mb-3 uppercase">
                Capital & Banking Relationships
              </h3>
              <p className="text-gray-700 font-noto leading-relaxed">
                We maintain strong relationships with a diverse network of lenders,
                institutional investors, and capital partners that enable us to move quickly
                on opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-bold text-gold mb-3 uppercase">
                Hands-On Management
              </h3>
              <p className="text-gray-700 font-noto leading-relaxed">
                We are actively involved in every aspect of property management, ensuring
                quality execution and accountability at every stage of the investment
                lifecycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-bold text-gold mb-3 uppercase">
                Long-Term Vision
              </h3>
              <p className="text-gray-700 font-noto leading-relaxed">
                We are committed to building lasting value and sustainable communities. We
                think in decades, not quarters, ensuring every decision benefits residents
                and investors alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Inquiries Section */}
      <section className="bg-navy py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-white uppercase mb-4">
            Investment Inquiries
          </h2>
          <p className="text-lg font-noto text-gray-300 mb-8">
            For investment inquiries, please reach out
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-xl font-playfair font-bold text-gold mb-3">
              Benny Goldstein
            </h3>
            <p className="text-gray-200 font-noto">
              <a
                href="tel:3476069342"
                className="hover:text-gold transition-colors duration-300"
              >
                (347) 606-9342
              </a>
              <span className="text-gray-400 ml-2 text-sm italic">
                (please text)
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
