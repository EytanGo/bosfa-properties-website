import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function InvestorPortal() {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Real-Time Performance',
      description: 'Access up-to-date financial reports, occupancy rates, and operational metrics for all your investments.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
        </svg>
      ),
      title: 'Document Library',
      description: 'Download tax documents, K-1s, quarterly reports, and all important investment documentation in one secure location.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      ),
      title: 'Investor Relations',
      description: 'Stay connected with our team, receive updates on new opportunities, and communicate directly about your portfolio.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mt-20">
        <div className="relative bg-navy py-16 sm:py-24 px-6 sm:px-8 lg:px-12 flex items-center justify-center min-h-96">
          {/* Lock Icon Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg
              className="w-64 h-64"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative text-center max-w-3xl">
            <svg
              className="w-16 h-16 text-gold mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white uppercase mb-4 tracking-tight">
              Investor Portal
            </h1>
            <p className="text-lg sm:text-xl font-montserrat text-gray-300 max-w-2xl mx-auto">
              Secure access to your investment information and portfolio performance
            </p>
          </div>
        </div>
      </div>

      {/* Portal Access Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-sm font-montserrat text-gold font-semibold uppercase tracking-widest mb-3">
              Portal Access
            </p>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy uppercase mb-4">
              Everything You Need in One Place
            </h2>
            <div className="w-12 h-1 bg-gold mb-8"></div>
            <p className="text-lg font-montserrat text-gray-700 max-w-3xl leading-relaxed">
              Our investor portal provides secure, 24/7 access to your investment information. Review performance metrics, download documents, and stay connected with the BOSFA Properties team—all from a single, easy-to-use dashboard.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-navy mb-3 uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Portal Section */}
      <section className="bg-gray-50 py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-navy uppercase mb-6">
            Access Your Portal
          </h2>
          <p className="text-lg font-montserrat text-gray-700 mb-10 leading-relaxed">
            Ready to view your portfolio? Log in to your secure investor portal to access all your investment information, documents, and performance reports.
          </p>

          {/* Login Button */}
          <Link
            to="#"
            className="inline-block bg-gold hover:bg-gold/90 text-navy font-montserrat font-bold py-4 px-10 rounded transition-colors duration-300 uppercase tracking-wide text-lg mb-8 shadow-lg hover:shadow-xl"
          >
            Log In to Investor Portal
          </Link>

          {/* Support Text */}
          <p className="text-gray-700 font-montserrat">
            Need access? Contact us to request credentials
          </p>
          <a
            href="mailto:info@bosfamanagement.com"
            className="text-gold font-montserrat font-semibold hover:text-gold/80 transition-colors duration-300 inline-block mt-3"
          >
            info@bosfamanagement.com
          </a>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Security */}
            <div>
              <h3 className="text-xl font-playfair font-bold text-navy mb-4 uppercase">
                Bank-Level Security
              </h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                Your information is protected with enterprise-grade encryption and security protocols. We use industry-leading authentication methods to ensure only authorized investors can access their portfolios.
              </p>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-playfair font-bold text-navy mb-4 uppercase">
                Dedicated Support
              </h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                Our investor relations team is here to help. Whether you have questions about your documents, need technical assistance, or want to discuss your investments, we're available to support you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
