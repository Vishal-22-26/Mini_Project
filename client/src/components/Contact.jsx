import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center w-full p-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-[#2f5d72] mb-6">
          Contact Us
        </h1>

        <p className="text-gray-700 text-center mb-6">
          Have a question, concern, or feedback? Reach out to us through the form or use the contact details below. We're here to help!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold">Office Address</h3>
              <p>
                Department of Agriculture & Farmers Welfare,
                <br />
                Krishi Bhavan, New Delhi, India
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>support@agriwelfare.in</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+91-123-456-7890</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-10 text-center">
          © {new Date().getFullYear()} Department of Agriculture & Farmers Welfare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
