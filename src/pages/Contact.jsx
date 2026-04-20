import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '302af511-4303-4ae2-9fa8-8a5711c90600',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'BOSFA Properties Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Contact"
        subtitle="Get in touch with our team"
      />

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div>
            {/* Gold Label */}
            <p className="text-xs font-noto text-gold font-semibold uppercase tracking-widest mb-3">
              Reach Out
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-navy uppercase mb-6">
              BOSFA Properties
            </h2>

            {/* Separator Line */}
            <div className="w-12 h-1 bg-gold mb-8"></div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-navy mb-2 uppercase">
                    Address
                  </h3>
                  <p className="text-gray-700 font-noto">
                    301A Central Ave<br />
                    Lawrence, NY 11559
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.346.839.739 1.881 1.310 2.982.571 1.100 1.038 1.986 1.311 2.982l1.548.773a1 1 0 01.54 1.06l-.74 4.435A1 1 0 015.153 19H3a1 1 0 01-1-1v-2.868a1 1 0 01.05-.196l10.122-4.695a1 1 0 001.097-1.97L3.146 8.964A1 1 0 013 8.868V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-navy mb-2 uppercase">
                    Phone
                  </h3>
                  <p className="text-gray-700 font-noto">
                    <a
                      href="tel:516.412.6100"
                      className="hover:text-gold transition-colors duration-300"
                    >
                      516.412.6100
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-navy mb-2 uppercase">
                    Email
                  </h3>
                  <div className="space-y-2 text-gray-700 font-noto">
                    <p>
                      <span className="font-semibold">General:</span>{' '}
                      <a
                        href="mailto:info@bosfamanagement.com"
                        className="hover:text-gold transition-colors duration-300"
                      >
                        info@bosfamanagement.com
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Acquisitions:</span>{' '}
                      <a
                        href="mailto:benny@bosfamanagement.com"
                        className="hover:text-gold transition-colors duration-300"
                      >
                        benny@bosfamanagement.com
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Leasing:</span>{' '}
                      <a
                        href="mailto:rentals.on.long.island@gmail.com"
                        className="hover:text-gold transition-colors duration-300"
                      >
                        rentals.on.long.island@gmail.com
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Development:</span>{' '}
                      <a
                        href="mailto:ben@bosfamanagement.com"
                        className="hover:text-gold transition-colors duration-300"
                      >
                        ben@bosfamanagement.com
                      </a>
                      <span className="block text-sm text-gray-500">Benjamin Diehl</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form / Thank You */}
          <div className="relative min-h-[500px]">
            {/* Thank You Message */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${
                isSubmitted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              {/* Animated Email Icon */}
              <div className="mb-8">
                <svg
                  className={`w-24 h-24 text-gold ${isSubmitted ? 'animate-bounce' : ''}`}
                  style={{ animationDuration: '1.5s', animationIterationCount: '3' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-playfair font-bold text-navy mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 font-noto text-lg mb-2">
                Your message has been sent successfully.
              </p>
              <p className="text-gray-500 font-noto text-sm mb-8">
                We'll get back to you as soon as possible.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-gold hover:text-navy font-noto font-semibold transition-colors duration-300 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isSubmitted
                  ? 'opacity-0 scale-95 pointer-events-none absolute inset-0'
                  : 'opacity-100 scale-100'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-noto font-semibold text-navy mb-2 uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-white font-noto text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-ring duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-noto font-semibold text-navy mb-2 uppercase"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-white font-noto text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-ring duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-noto font-semibold text-navy mb-2 uppercase"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-white font-noto text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-ring duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-noto font-semibold text-navy mb-2 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-white font-noto text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-ring duration-300 resize-none"
                    placeholder="Please tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 font-noto text-sm">{error}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gold hover:bg-gold/90 text-navy font-noto font-bold py-3 px-6 rounded transition-all duration-300 uppercase tracking-wide ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
