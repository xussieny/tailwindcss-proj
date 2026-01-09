import React from "react";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12 space-y-8">
      <div className="text-center">
        <h1 className=" pt-5 text-2xl font-bold my-6">We're Here to Help</h1>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md border space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Customer Support</h2>
          <p className="text-gray-700 leading-relaxed">
            Our dedicated support team is available Monday through Saturday to assist you 
            with product inquiries, technical issues, and purchase decisions. We're committed 
            to providing you with the best service possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Product Expertise</h2>
          <p className="text-gray-700 leading-relaxed">
            Looking for the right laptop, tablet, or networking device? Our knowledgeable 
            staff can help you compare features, understand specifications, and find the 
            perfect match for your needs and budget.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">After-Sales Service</h2>
          <p className="text-gray-700 leading-relaxed">
            We stand behind every product we sell. All our devices come with manufacturer 
            warranties, and we provide ongoing support to ensure your complete satisfaction. 
            From setup assistance to troubleshooting, we're with you every step of the way.
          </p>
        </section>

        <section className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-3">Reach Us</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">support@techstore.com</p>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+251-XX-XXX-XXXX</p>
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600">Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;