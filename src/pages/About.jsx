import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Forever</h1>
        <p className="text-lg text-gray-700">
          Welcome to <span className="font-semibold">Forever</span>, your number one source for unique, high-quality products. We are dedicated to providing you the very best in style, quality, and customer service.
        </p>
        <p className="mt-4 text-gray-700">
          Founded with a passion for excellence, Forever has evolved from a small startup into a trusted brand. Our journey began with a simple idea: to offer products that stand the test of time and create lasting impressions.
        </p>
        <p className="mt-4 text-gray-700">
          At Forever, we believe in building long-term relationships with our customers. We carefully curate our collection, ensuring that every item reflects our commitment to quality, innovation, and sustainability.
        </p>
        <p className="mt-4 text-gray-700">
          Thank you for choosing Forever. We hope you enjoy our products as much as we enjoy offering them to you.
        </p>
        <p className="mt-6 text-gray-700 font-semibold">
          Sincerely,
          <br />
          The Forever Team
        </p>
      </div>
    </div>
  );
};

export default About;
