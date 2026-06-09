import { useState } from 'react';
import PageHero from '../components/PageHero';
import { images } from '../data/images';

// Web3Forms access key. Submissions are emailed to the single address this key
// is registered to. This is the site's existing key, which currently delivers to
// the main contact inbox (bennygoldstein@msn.com).
//
// TO ROUTE RENTAL INQUIRIES TO rentals.on.long.island@gmail.com:
// create a free key for that address at https://web3forms.com (enter the email,
// copy the key it sends to that inbox) and replace the value below. No other
// changes needed — every field is already included in the notification email.
const WEB3FORMS_ACCESS_KEY = '302af511-4303-4ae2-9fa8-8a5711c90600';

const BEDROOM_OPTIONS = ['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4+ Bedrooms'];

const PROGRAM_OPTIONS = [
  'No program',
  'Section 8 (Housing Choice Voucher)',
  'CityFHEPS',
  'FHEPS',
  'HASA',
  'HUD-VASH',
  'Other',
];

export default function RentalInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    lookingFor: '',
    bedrooms: '',
    program: '',
    voucher: '',
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
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Apartment Inquiry — ${formData.name || 'BOSFA Website'}`,
          from_name: 'BOSFA Rental Inquiries',
          // Human-readable keys so the notification email reads cleanly.
          Name: formData.name,
          Phone: formData.phone,
          'What they are looking for': formData.lookingFor,
          Bedrooms: formData.bedrooms,
          'Housing assistance program': formData.program,
          'Has a voucher in hand': formData.voucher,
          botcheck: '',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          lookingFor: '',
          bedrooms: '',
          program: '',
          voucher: '',
        });
      } else {
        setError('Something went wrong. Please try again, or call us at 516.412.6100.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again, or call us at 516.412.6100.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 border border-gray-300 rounded bg-white font-noto text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300';
  const labelClasses =
    'block text-sm font-noto font-semibold text-navy mb-2 uppercase';

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Apartment Inquiry"
        subtitle="Looking for a home? Tell us what you need and our leasing team will reach out."
        backgroundImage={images.pearsallGardens}
      />

      {/* Form Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-3xl mx-auto">
        <div className="relative min-h-[560px]">
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
              Your inquiry has been received.
            </p>
            <p className="text-gray-500 font-noto text-sm mb-8">
              Someone from our leasing team will get back to you soon.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-gold hover:text-navy font-noto font-semibold transition-colors duration-300 underline underline-offset-4"
            >
              Submit another inquiry
            </button>
          </div>

          {/* Inquiry Form */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              isSubmitted
                ? 'opacity-0 scale-95 pointer-events-none absolute inset-0'
                : 'opacity-100 scale-100'
            }`}
          >
            {/* Intro */}
            <p className="text-xs font-noto text-gold font-semibold uppercase tracking-widest mb-3">
              Find Your Home
            </p>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-navy uppercase mb-4">
              Tell Us What You're Looking For
            </h2>
            <div className="w-12 h-1 bg-gold mb-6"></div>
            <p className="text-gray-700 font-noto mb-10">
              Fill out the quick form below and our leasing team will follow up about
              available apartments that fit your needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Jane Doe"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="(516) 555-0123"
                />
              </div>

              {/* What they're looking for */}
              <div>
                <label htmlFor="lookingFor" className={labelClasses}>
                  What Are You Looking For?
                </label>
                <textarea
                  id="lookingFor"
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`${inputClasses} resize-none`}
                  placeholder="e.g. an apartment in the Lawrence / Far Rockaway area, preferred move-in date, budget, any must-haves..."
                ></textarea>
              </div>

              {/* Bedrooms */}
              <div>
                <label htmlFor="bedrooms" className={labelClasses}>
                  How Many Bedrooms?
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select number of bedrooms
                  </option>
                  {BEDROOM_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Housing program */}
              <div>
                <label htmlFor="program" className={labelClasses}>
                  Do You Have a Housing Assistance Program?
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select a program (or "No program")
                  </option>
                  {PROGRAM_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 font-noto mt-2">
                  e.g. Section 8, CityFHEPS, FHEPS, HASA. Select "No program" if none.
                </p>
              </div>

              {/* Voucher */}
              <div>
                <span className={labelClasses}>
                  Do You Currently Have a Voucher in Hand?
                </span>
                <div className="flex gap-6 mt-1">
                  {['Yes', 'No'].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 font-noto text-gray-700 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="voucher"
                        value={option}
                        checked={formData.voucher === option}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-gold accent-gold focus:ring-gold"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 font-noto text-sm">{error}</p>}

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
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
