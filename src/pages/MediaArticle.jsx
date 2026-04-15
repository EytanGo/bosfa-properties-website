import { useParams, Link } from 'react-router-dom';
import { mediaArticles } from '../data/properties';

export default function MediaArticle() {
  const { slug } = useParams();
  const article = mediaArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="w-full">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-navy mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 font-montserrat text-lg mb-8">
              We couldn't find the article you're looking for.
            </p>
            <Link
              to="/media"
              className="inline-block px-8 py-3 bg-navy text-white font-montserrat font-semibold uppercase tracking-widest rounded hover:bg-navy-dark transition-colors"
            >
              Back to Media
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-navy py-10 md:py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/media"
            className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-8 font-montserrat font-semibold"
          >
            <span className="mr-2">&larr;</span>
            ALL ARTICLES
          </Link>

          <p className="text-gold font-montserrat text-sm font-semibold uppercase tracking-widest mb-4">
            PRESS COVERAGE
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-300 font-montserrat text-sm">
            <span>{article.date}</span>
            {article.source && (
              <>
                <span className="text-gold">&bull;</span>
                <span>{article.source}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-montserrat text-lg leading-relaxed mb-6">
              {article.content || article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Back to Media */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/media"
            className="inline-block px-8 py-3 bg-gold text-navy font-montserrat font-bold uppercase tracking-widest rounded hover:bg-gold-light transition-colors duration-200"
          >
            Back to Media &amp; Press
          </Link>
        </div>
      </section>
    </div>
  );
}

