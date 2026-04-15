import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/images';
import { properties } from '../data/properties';

// Hero Carousel Component
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      image: images.courthouseCorporateCenter,
      title: 'COURTHOUSE CORPORATE CENTER',
      subtitle: 'CENTRAL ISLIP, NY',
      link: '/properties/courthouse-corporate-center',
    },
    {
      image: images.gardensAtBuffalo,
      title: 'GARDENS AT BUFFALO',
      subtitle: 'FREEPORT, NY',
      link: '/properties/gardens-at-buffalo',
    },
    {
      image: images.bayviewEstates,
      title: 'BAYVIEW ESTATES',
      subtitle: 'INWOOD, NY',
      link: '/properties/bayview-estates',
    },
    {
      image: images.rivoliHouse,
      title: 'RIVOLI HOUSE',
      subtitle: 'HEMPSTEAD, NY',
      link: '/properties/rivoli-house',
    },
  ];

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Overlay */}
            {slide.title && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h2 className="text-white font-heading text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-gold text-xl md:text-2xl mb-8">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="px-8 py-3 bg-gold text-navy font-bold uppercase text-sm tracking-widest hover:bg-gold-light transition-all duration-300"
                >
                  See Project
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold transition-colors duration-300 p-2"
        aria-label="Previous slide"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold transition-colors duration-300 p-2"
        aria-label="Next slide"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold w-8' : 'bg-white hover:bg-gold-light'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
// About Section Component
function AboutSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
          About Us
        </p>
        <h2 className="text-navy font-heading text-3xl md:text-5xl mb-6">
          Building Communities,{' '}
          <span className="italic">Restoring Value</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          BOSFA Properties is a real estate investment and development company
          headquartered in New York, with a deep portfolio of residential,
          commercial, and mixed-use properties across Nassau County and Long
          Island. We are committed to transforming underutilized properties
          into vibrant communities that enhance quality of life and create
          lasting value.
        </p>
        <Link
          to="/about"
          className="inline-block text-gold font-bold uppercase text-sm tracking-widest hover:text-gold-light transition-colors duration-300"
        >
          Find Out More <span className="text-lg">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

// Stats Counter Component
function CountUpNumber({ targetNumber, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(targetNumber * progress));
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, targetNumber, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// Stats Section Component
function StatsSection() {
  const stats = [
    {
      number: 852,
      label: 'Current Units Owned',
    },
    {
      number: 1462,
      label: 'Units Under Development',
    },
    {
      number: 700,
      label: 'Total Transaction Volume',
      prefix: '$',
      suffix: 'M+',
    },
    {
      number: 356000,
      label: 'Commercial SQFT',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-heading text-4xl md:text-5xl font-bold mb-2 animate-count-up">
                <span>{stat.prefix || ''}<CountUpNumber targetNumber={stat.number} />{stat.suffix || ''}</span>
              </div>
              <p className="text-gold text-xs uppercase font-bold tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Portfolio Section Component
function PortfolioSection() {
  const portfolioProperties = [
    properties.find((p) => p.id === 'bayview-estates'),
    properties.find((p) => p.id === 'james-burrell-senior-gardens'),
    properties.find((p) => p.id === 'pearsall-gardens'),
  ].filter(Boolean);

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
              Portfolio
            </p>
            <h2 className="text-navy font-heading text-3xl md:text-5xl font-bold">
              Properties
            </h2>
          </div>
          <Link
            to="/properties"
            className="mt-6 md:mt-0 text-gold font-bold uppercase text-sm tracking-widest hover:text-gold-light transition-colors duration-300"
          >
            More Properties <span className="text-lg">&rarr;</span>
          </Link>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProperties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              className="group relative overflow-hidden h-80 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${property.image})`,
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white font-heading text-2xl font-bold mb-2">
                  {property.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {property.units} &bull; {property.location}
                </p>
                <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">View Property</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
// Development Update Section Component
function DevelopmentUpdateSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-navy">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
          Development Update
        </p>
        <h2 className="text-white font-heading text-3xl md:text-5xl font-bold mb-8">
          Gardens of Buffalo &mdash; Construction Progress
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our flagship development project, Gardens of Buffalo, is transforming
              the flood-damaged Moxey Rigby public housing complex in Freeport into
              a modern 200-unit apartment complex. The project represents a major
              investment in Long Island's future, bringing new housing opportunities
              and revitalizing a long-vacant site.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Construction is progressing on schedule with units designated for
              veterans, seniors, and families. The development will bring significant
              economic impact to the region through job creation and tax revenue.
            </p>
          </div>

          {/* Video Container */}
          <div className="lg:col-span-3 w-full">
            <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Nqe3RQOx70s"
                title="Gardens of Buffalo Construction Progress"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/properties/gardens-at-buffalo"
          className="inline-block px-8 py-3 bg-gold text-navy font-bold uppercase text-sm tracking-widest hover:bg-gold-light transition-all duration-300"
        >
          View Property Details <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

// Investment Strategy Section Component
function InvestmentStrategySection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <img
              src={images.investmentBuilding}
              alt="Investment Building"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
              Strategy
            </p>
            <h2 className="text-navy font-heading text-3xl md:text-5xl font-bold mb-6">
              Investment Strategy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              BOSFA Properties focuses on acquiring undervalued residential, commercial,
              and mixed-use properties with strong fundamentals and repositioning
              potential. Our disciplined approach combines market expertise with hands-on
              property management to maximize returns and create lasting value.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We identify opportunities where strategic capital improvements, operational
              excellence, and market repositioning can unlock significant value creation,
              while maintaining our commitment to building strong communities.
            </p>
            <Link
              to="/investment-strategy"
              className="inline-block text-gold font-bold uppercase text-sm tracking-widest hover:text-gold-light transition-colors duration-300"
            >
              Find Out More <span className="text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Home Page Component
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <HeroCarousel />
      <AboutSection />
      <StatsSection />
      <PortfolioSection />
      <DevelopmentUpdateSection />
      <InvestmentStrategySection />
    </div>
  );
}
