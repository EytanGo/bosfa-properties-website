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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaArticles.map((article, index) => (
            <Link
              key={index}
              to={article.url}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col group"
            >
              {/* Article Image */}
              <div className="h-48 sm:h-52 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Date */}
                <p className="text-sm font-noto text-gold font-semibold uppercase tracking-wide mb-3">
                  {article.date}
                </p>

                {/* Title */}
                <h3 className="text-lg font-playfair font-bold text-navy mb-4 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 font-noto text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <span className="text-gold font-noto font-semibold inline-flex items-center group-hover:text-gold/80 transition-colors duration-300">
                  Read More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Press Inquiries Section */}
      <section className="bg-navy py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-white uppercase mb-4">
            Press Inquiries
          </h2>
          <p className="text-gray-300 font-noto mb-6 text-lg">
            For media inquiries, press kits, or interview requests, please contact us:
          </p>
          <a
            href="mailto:info@bosfamanagement.com"
            className="inline-block bg-gold text-navy font-noto font-bold px-8 py-3 rounded hover:bg-gold/90 transition-colors duration-300 text-lg"
          >
            info@bosfamanagement.com
          </a>
        </div>
      </section>
    </div>
  );
}
