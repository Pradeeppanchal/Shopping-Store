import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?ga=GA1.1.1833494961.1734070854&semt=ais_hybrid')" }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-lg text-center mb-6">
          At E-Shop, our mission is to deliver exceptional shopping experiences by providing high-quality products at affordable prices. 
          We are committed to innovation, sustainability, and customer satisfaction.
        </p>
        <img
          src="https://img.freepik.com/free-photo/top-view-desk-with-black-friday-gifts_23-2148288216.jpg?ga=GA1.1.1833494961.1734070854&semt=ais_hybrid"
          alt="Mission"
          className="rounded-lg mx-auto shadow-lg w-3/4 h-96 sm:w-3/4 lg:w-1/2"
        />
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
        <p className="text-lg text-center mb-6">
          Have questions or need support? Reach out to us and our team will get back to you as soon as possible.
        </p>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
