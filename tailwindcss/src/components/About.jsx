import React from "react";

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className=" text-sky-500 py-16 px-8 text-center my-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Tech Store</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Your one-stop shop for laptops, tablets, and electronics in Addis Ababa
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 pb-12 space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-md border">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            To provide accessible, reliable, and cutting-edge technology solutions that empower 
            our customers to achieve more in their personal and professional lives.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-4">About Our Business</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We specialize in bringing the latest electronics to the Ethiopian market. Our product 
            range includes high-performance laptops from HP and Acer, versatile tablets, reliable 
            Epson projectors for business presentations, advanced networking equipment from ZTE, 
            and affordable smartphones from Tecno.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every product in our store is carefully selected for quality and value. We work directly 
            with authorized distributors to ensure authenticity and provide comprehensive warranty 
            coverage. Our experienced team is passionate about technology and committed to helping 
            you find the perfect solution for your needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;