import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-800 font-sans">
      <div className=" mx-auto">
        <h1 className="text-4xl font-bold text-[#722f37] mb-6">About Us</h1>
        <p className="text-lg mb-4">
          The Department of Agriculture & Farmers Welfare works tirelessly to uplift and empower Indian farmers.
          Through policies, technology, and collaboration with states, we aim to bring prosperity and sustainability
          to rural India.
        </p>
        <p className="text-lg mb-4">
          We focus on improving access to credit, seeds, irrigation, crop insurance, and knowledge sharing.
          Our mission is to transform agriculture into a more productive, sustainable, remunerative, and climate-resilient sector.
        </p>
        <p className="text-lg">
          By prioritizing farmer welfare, we take a giant step toward building an Atmanirbhar Bharat (self-reliant India).
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
