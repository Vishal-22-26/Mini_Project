import React from "react";

const schemes = [
  {
    title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    description:
      "An income support scheme providing ₹6000 per year to all farmer families in three equal installments, directly transferred to their bank accounts.",
  },
  {
    title: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
    description:
      "A crop insurance scheme that provides financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.",
  },
  {
    title: "Soil Health Card Scheme",
    description:
      "Aimed at promoting balanced use of fertilizers by providing farmers with soil health cards, which carry crop-wise recommendations.",
  },
  {
    title: "e-NAM (National Agriculture Market)",
    description:
      "A pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities.",
  },
  {
    title: "RKVY (Rashtriya Krishi Vikas Yojana)",
    description:
      "Provides states with autonomy and flexibility in planning and executing agriculture and allied sector schemes to boost productivity and income.",
  },
  {
    title: "Kisan Credit Card (KCC)",
    description:
      "Offers timely access to credit for farmers to meet their cultivation and other needs, including post-harvest expenses and household consumption.",
  },
];

const Scheme = () => {
  return (
    <div className="min-h-screen w-full bg-white py-12 px-6 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#722f37] mb-10">
        Government Schemes for Farmers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-gray-50 border-l-4 border-[#883944] rounded-lg shadow p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-[#212527] mb-2">
              {scheme.title}
            </h2>
            <p className="text-gray-700 text-sm">{scheme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scheme;
