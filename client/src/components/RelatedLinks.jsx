import React from "react";

const links = [
  {
    name: "Ministry of Agriculture & Farmers Welfare",
    url: "https://agricoop.gov.in",
  },
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    url: "https://pmkisan.gov.in",
  },
  {
    name: "Soil Health Card Scheme",
    url: "https://soilhealth.dac.gov.in",
  },
  {
    name: "Kisan Call Centre (KCC)",
    url: "https://krishi.icar.gov.in",
  },
  {
    name: "e-NAM (National Agriculture Market)",
    url: "https://enam.gov.in",
  },
  {
    name: "Indian Council of Agricultural Research (ICAR)",
    url: "https://icar.org.in",
  },
];

const RelatedLinks = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#722f37]">
        Related Links
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 border-l-4 border-[#883944] p-6 rounded-lg shadow hover:shadow-lg transition duration-200"
          >
            <h2 className="text-lg font-semibold text-[#212527] mb-1">
              {link.name}
            </h2>
            <p className="text-sm text-blue-500">{link.url}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;
