import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { properties } from '../data/properties';

export default function PropertyDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="w-full">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-navy mb-4">
              Property Not Found
            </h1>
            <p className="text-gray-600 font-noto text-lg mb-8">
              We couldn't find the property you're looking for.
            </p>
            <Link
              to="/properties"
              className="inline-block px-8 py-3 bg-navy text-white font-noto font-semibold uppercase tracking-widest rounded hover:bg-navy-dark transition-colors"
            >
              Back to Properties
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Use gallery images if available, otherwise fall back to single image
  const galleryImages = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.image];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-navy pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 pt-32 md:pt-44">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/properties"
            className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-8 font-noto font-semibold"
          >
            <span className="mr-2">&larr;</span>
            ALL PROPERTIES
          </Link>

          <p className="text-gold font-noto text-sm font-semibold uppercase tracking-widest mb-4">
            {property.category.toUpperCase()}
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4 leading-tight">
            {property.name}
          </h1>

          <p className="text-gray-300 font-noto text-lg">
            {property.address}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Units */}
            <div className="text-center">
              <p className="text-gray-600 font-noto text-sm uppercase tracking-widest mb-2">
                Units
              </p>
              <p className="text-2xl md:text-3xl font-playfair font-bold text-navy">
                {property.units}
              </p>
            </div>

            {/* Sq Ft */}
            <div className="text-center">
              <p className="text-gray-600 font-noto text-sm uppercase tracking-widest mb-2">
                Sq Ft
              </p>
              <p className="text-2xl md:text-3xl font-playfair font-bold text-navy">
                {property.sqft}
              </p>
            </div>

            {/* Acquired */}
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-gray-600 font-noto text-sm uppercase tracking-widest mb-2">
                Acquired
              </p>
              <p className="text-2xl md:text-3xl font-playfair font-bold text-navy">
                {property.acquired}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img
              src={galleryImages[selectedImage]}
              alt={`${property.name} - Image ${selectedImage + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Thumbnail Row - only show if multiple images */}
          {galleryImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 h-20 w-20 rounded overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-gold'
                      : 'border-gray-300 hover:border-gold-light'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${property.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About the Project Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-8">
            About the Project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Description */}
            <div>
              <h3 className="text-xl font-playfair font-bold text-navy mb-4">
                Project Overview
              </h3>
              <p className="text-gray-700 font-noto text-lg leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Additional Info */}
            <div>
              {/* Neighborhood */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-navy mb-4">
                  Neighborhood
                </h3>
                <p className="text-gray-700 font-noto text-lg">
                  {property.neighborhood}
                </p>
              </div>

              {/* Transportation */}
              <div>
                <h3 className="text-xl font-playfair font-bold text-navy mb-4">
                  Transportation
                </h3>
                <ul className="space-y-2">
                  {property.transportation.map((transit, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 font-noto text-lg flex items-center"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {transit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Update Video - Gardens at Buffalo */}
      {property.id === 'gardens-at-buffalo' && (
        <section className="bg-navy py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-4">
                Construction Update
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                Progress on the Ground
              </h2>
              <p className="text-gray-300 font-noto text-base max-w-3xl mx-auto">
                Mayor Robert Kennedy of Freeport joins the BOSFA Properties team on-site to walk through the demolition and foundation progress — and share the vision for this 200-unit, multi-generational community.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nvKhnoqLMy4"
                  title="Construction Update - Gardens at Buffalo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Interested in This Property?
          </h2>
          <p className="text-gray-300 font-noto text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn more about investment opportunities or property leasing.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gold text-navy font-noto font-bold uppercase tracking-widest rounded hover:bg-gold-light transition-colors duration-200 text-lg"
          >
            Inquire About This Property
          </Link>
        </div>
      </section>
    </div>
  );
}
