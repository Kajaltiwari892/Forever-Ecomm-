import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setSuccessMessage("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Information */}
        <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            Have any questions? We'd love to hear from you.
          </p>

          <div className="mt-4">
            <p className="font-medium">📍 Address:</p>
            <p className="text-gray-700">xyz Forever Street, New Delhi, India</p>
          </div>

          <div className="mt-4">
            <p className="font-medium">📧 Email:</p>
            <p className="text-gray-700">support@forever.com</p>
          </div>

          <div className="mt-4">
            <p className="font-medium">📞 Phone:</p>
            <p className="text-gray-700">+123 223 444</p>
          </div>

          
          
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
          {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}

          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              required
            />

            <label className="block font-medium text-gray-700 mt-4">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              required
            />

            <label className="block font-medium text-gray-700 mt-4">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
