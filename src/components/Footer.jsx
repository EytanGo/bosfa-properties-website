import { Link } from 'react-router-dom';
import { images } from '../data/images';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Investment Strategy', href: '/investment-strategy' },
    { label: 'Media & Press', href: '/media' },
    { label: 'Contact', href: '/contact' },
    { label: 'Investor Portal', href: '/investor-portal' },
  ];

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-montserrat uppercase tracking-widest font-bold mb-6 text-white">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm font-montserrat text-gray-300">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.822l.04.26a1 1 0 00.987.822h3.468a1 1 0 00.987-.822l.04-.26A1 1 0 0110.847 2H13a1 1 0 011 1v2.847a1 1 0 01-.822.986l-.26.04a1 1 0 00-.822.987v3.468a1 1 0 00.822.987l.26.04a1 1 0 01.822.986V17a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.822l-.04-.26a1 1 0 00-.987-.822H5.468a1 1 0 00-.987.822l-.04.26A1 1 0 014.453 18H2a1 1 0 01-1-1v-2.847a1 1 0 01.822-.986l.26-.04a1 1 0 00.822-.987V7.468a1 1 0 00-.822-.987l-.26-.04A1 1 0 012 5.468V3z" />
                </svg>
                <a href="tel:+15164126100" className="hover:text-gold transition-colors">
                  516.412.6100
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <address className="not-italic">
                  <div>301A Central Ave</div>
                  <div>Lawrence, NY 11559</div>
                </address>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:info@bosfamanagement.com"
                  className="hover:text-gold transition-colors"
                >
                  info@bosfamanagement.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs font-montserrat uppercase tracking-widest font-bold mb-6 text-white">
              Navigation
            </h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm font-montserrat text-gray-300 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-xs font-montserrat uppercase tracking-widest font-bold mb-6 text-white">
              Hours of Operation
            </h3>
            <div className="space-y-2 text-sm font-montserrat text-gray-300">
              <div>
                <div className="font-semibold text-white">Monday - Thursday</div>
                <div>9:00 AM - 5:00 PM</div>
              </div>
              <div>
                <div className="font-semibold text-white">Friday</div>
                <div>9:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={images.logo}
              alt="BOSFA Properties Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Copyright Text */}
          <div className="text-sm font-montserrat text-gray-400 text-center md:text-right">
            &copy; {currentYear} BOSFA Properties. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
