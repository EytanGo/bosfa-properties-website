import PageHero from '../components/PageHero';
import { images } from '../data/images';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PageHero
        title="ABOUT US"
        subtitle="BOSFA Properties is a private and family owned real estate investment company focusing on development and value add distressed assets."
        backgroundImage={images.aboutHero}
        tall
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-4">
            OUR STORY
          </p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-8">
            A Legacy of Transformation
          </h2>
        </div>

        <div className="space-y-6 text-gray-700 font-noto">
          <p className="text-base leading-relaxed">
            Founded by Daniel Goldstein, BOSFA Properties is a private and family-owned real estate company focusing on development and distressed assets headquartered in New York, Nassau County. BOSFA Properties has acquired over 50 real estate assets, located throughout the United States, since its inception.
          </p>

          <p className="text-base leading-relaxed">
            Our portfolio is focused on developing, rehabilitating, and stabilizing neglected assets in growing communities. We have an outstanding track record in purchasing, financing, and managing those assets and bringing those once-neglected assets back to their original pristine condition.
          </p>

          <p className="text-base leading-relaxed">
            BOSFA Properties team consists of in-house professionals in the areas of Finance, Property Managers, Project Managers, Leasing Specialists, and Acquisition Specialists. Not only they understand the market, but they also appreciate the company's core values and goals.
          </p>
        </div>
      </section>

      {/* Our People / Meet the Team Section */}
      <section className="bg-navy-dark py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-4">
              OUR PEOPLE
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Meet the Team
            </h2>
            <p className="text-gray-300 font-noto text-base max-w-3xl mx-auto">
              From property managers and superintendents to investor relations and development — hear directly from the people who make BOSFA Properties run.
            </p>
          </div>

          {/* Video Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gxCxf5MNPO8"
                title="BOSFA Properties Team"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Our Team Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-4">
              LEADERSHIP
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-6">
              Our Team
            </h2>
          </div>

          {/* Daniel Goldstein */}
          <div className="mb-16">
            <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-2">
              FOUNDER & MANAGING MEMBER
            </p>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy mb-6">
              Daniel Goldstein
            </h3>
            <div className="space-y-5 text-gray-700 font-noto text-base leading-relaxed">
              <p>
                Daniel Goldstein is the Founder and Managing Member of BOSFA Properties. Daniel's resume is extensive. He began his career in 1981 as an electrician, working in both the construction and electrical field.
              </p>
              <p>
                In 1992, he started an import and manufacturing company in Israel. Under his direction, the company grew to #3 in sales in its category in the State of Israel. The company was subsequently sold in 1998. At the same time, Daniel was making his foray into real estate, managing his family portfolio in both rentals and property sales in Israel.
              </p>
              <p>
                In 2010, Daniel joined E&M Management a prominent real estate company that owned and operated over 12,000 units in the New York area, where he worked on the acquisition, rehabilitation, and repositioning of the properties, including a portfolio of over 3,400 apartments. Since then Daniel and his son Aron started BOSFA Properties. They focus on the Long Island metro area, acquiring and developing properties that enhance the community and surrounding populated area.
              </p>
              <p>
                The fervor with which Daniel conducts himself in business is surpassed only in his philanthropic endeavors. Mr. Goldstein joined the Meadowmere Park Fire Department as a Volunteer FireFighter and was later promoted to Captain. Daniel also served as village of Lawrence Trustee for over 4 years before stepping down in 2020.
              </p>
            </div>
          </div>

          {/* Benjamin Diehl */}
          <div>
            <p className="text-gold font-noto text-xs font-semibold uppercase tracking-widest mb-2">
              DEVELOPMENT MANAGER
            </p>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy mb-6">
              Benjamin Diehl
            </h3>
            <div className="space-y-5 text-gray-700 font-noto text-base leading-relaxed">
              <p>
                Benjamin Diehl, Development Manager at BOSFA Properties, is a seasoned professional with a keen eye for detail and a strategic approach. He manages a portfolio encompassing over 2 million square feet of development space.
              </p>
              <p>
                Benjamin's journey at BOSFA Properties began on the leasing and management team, where he gained invaluable insights into the intricacies of property operations. His passion for architecture and development led him to transition seamlessly into his current role, where he plays a pivotal role in every stage of the development process, from acquisition to construction.
              </p>
              <p>
                With a Bachelor's degree in Architecture from Virginia Tech, Benjamin brings a unique blend of design expertise and project management skills to his role. His commitment to excellence and dedication to delivering exceptional results make him an indispensable asset to the BOSFA Properties team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
