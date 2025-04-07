import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center w-full p-4">
      <div className="w-full bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#722f37] mb-6">
          Help & Support
        </h1>

        <p className="text-gray-700 mb-4 text-center">
          Welcome to the Help Center. If you need any assistance related to agricultural schemes, registration, or using this portal, we're here to help!
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Frequently Asked Questions (FAQs)
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>How can I apply for a government scheme?</li>
          <li>What documents are required for scheme registration?</li>
          <li>How do I track the status of my application?</li>
          <li>Where can I get more information about eligibility?</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
          Need More Help?
        </h2>
        <p className="text-gray-700 mb-4">
          If your query is not listed above, feel free to reach out to our support team via the
          <a href="/contact" className="text-blue-600 underline ml-1">
            Contact Us
          </a>{" "}
          page. We’ll respond as soon as possible.
        </p>

        <p className="text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} Department of Agriculture & Farmers Welfare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Help;
