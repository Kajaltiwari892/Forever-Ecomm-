import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/638/074/non_2x/illustration-isometric-concept-safety-of-online-shopping-in-e-commerce-stores-free-vector.jpg"
              alt="Forever Store"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Text Section */}
          <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
            <h1 className="text-5xl font-bold text-gray-800">About Forever</h1>
            <p className="mt-4 text-lg text-gray-600">
              Forever isn’t just an e-commerce website—it’s a lifestyle. We are dedicated to bringing you timeless designs that never go out of style. Our passion for quality and innovation inspires us to curate products that speak to your unique tastes.
            </p>
            <p className="mt-4 text-gray-600">
              Founded with a vision to merge modern trends with classic elegance, Forever has grown from a small startup into a trusted brand. Our journey is driven by the belief that every product tells a story, and every detail matters.
            </p>
            <p className="mt-4 text-gray-600">
              At Forever, quality, sustainability, and authenticity are at the core of everything we do. We invite you to explore our collection and join us on this exciting journey.
            </p>
            <p className="mt-8 text-xl font-semibold text-gray-700">
              – The Forever Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
