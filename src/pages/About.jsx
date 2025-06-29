import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?ga=GA1.1.1833494961.1734070854&semt=ais_hybrid')" }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
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

    {/* About Us Section */}
    <section className="max-w-7xl mx-auto p-6 md:p-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Who We Are</h2>
      <p className="text-lg text-center mb-6">
        E-Shop is a passionate team of professionals dedicated to making online shopping simple, secure, and enjoyable. 
        Since our launch, we have strived to connect customers with the best products from trusted brands, all while offering excellent customer service and fast delivery.
      </p>
    </section>
    </div>
  );
};

export default About;
