import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { mediaArticles } from '../data/properties';

export default function Media() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Media & Press"
        subtitle="Stay up to date with BOSFA news, press releases, and featured articles"
      />

      {/* Articles Grid */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {mediaArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Article Image */}
              <div className="h-48 sm:h-56 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Date */}
                <p className="text-sm font-montserrat text-gold font-semibold uppercase tracking-wide mb-3">
                  {article.date}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-navy mb-4 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 font-montserrat text-base leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={article.url}
                  className="text-gold font-montserrat font-semibold inline-flex items-center hover:text-gold/80 transition-colors duration-300 group"
                >
                  Read More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Inquiries Section */}
      <section className="bg-navy py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white uppercase mb-4">
            Press Inquiries
          </h2>
          <p className="text-gray-300 font-montserrat mb-6 text-lg">
            For media inquiries, press kits, or interview requests, please contact us:
          </p>
          <a
            href="mailto:info@bosfamanagement.com"
            className="inline-block bg-gold text-navy font-montserrat font-bold px-8 py-3 rounded hover:bg-gold/90 transition-colors duration-300 text-lg"
          >
            info@bosfamanagement.com
          </a>
        </div>
      </section>
    </div>
  );
}
