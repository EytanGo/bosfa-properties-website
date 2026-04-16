import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { properties } from '../data/properties';
import { images } from '../data/images';

const CATEGORIES = [
  { id: 'all', label: 'ALL', heading: 'Full Portfolio', sub: 'Browse all properties' },
  { id: 'residential', label: 'RESIDENTIAL', heading: 'Residential', sub: 'Apartment & housing' },
  { id: 'development', label: 'DEVELOPMENT', heading: 'Development', sub: 'New construction' },
  { id: 'commercial', label: 'COMMERCIAL', heading: 'Commercial', sub: 'Office & retail' },
];

export default function Properties() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProperties = activeCategory === 'all'
    ? properties
    : properties.filter(prop => prop.category === activeCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <PageHero
        title="PROPERTIES"
        subtitle="Finding value in underappreciated situations and transforming them into thriving communities"
        backgroundImage={images.investmentBuilding}
      />

      {/* Filter Buttons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gold font-noto text-xs uppercase tracking-widest font-semibold mb-2">Filter by Type</p>
          <h3 className="text-center text-navy font-heading text-2xl mb-8">Explore Our Portfolio</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 font-noto font-semibold uppercase text-sm tracking-widest transition-all duration-200 rounded ${
                  activeCategory === category.id
                    ? 'bg-navy text-white border-2 border-navy'
                    : 'bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProperties.map(property => (
              <Link
                key={property.id}
                to={`/properties/${property.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg h-80 md:h-96 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Property Image */}
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2 leading-tight">
                      {property.name}
                    </h3>

                    <p className="font-noto text-white text-sm font-semibold uppercase tracking-widest mb-3">
                      {property.units}
                    </p>

                    <div className="font-noto text-white/80 text-sm mb-0 flex items-center justify-between">
                      <span>{property.location}</span>
                      <span className="w-9 h-9 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                        <svg className="w-4 h-4 transform rotate-[-45deg] text-white group-hover:text-navy transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 font-noto text-lg">
                No properties found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
