import React from "react";

const actsAndRules = [
  {
    title: "The Farmers' Produce Trade and Commerce (Promotion and Facilitation) Act, 2020",
    description:
      "Allows farmers to sell their produce outside APMC mandis, promoting barrier-free inter-state and intra-state trade.",
  },
  {
    title: "The Farmers (Empowerment and Protection) Agreement on Price Assurance and Farm Services Act, 2020",
    description:
      "Creates a framework for contract farming, ensuring legal protection and a fair price mechanism for farmers.",
  },
  {
    title: "Essential Commodities (Amendment) Act, 2020",
    description:
      "Removes certain agricultural commodities from the list of essential items, encouraging private investment in supply chains.",
  },
  {
    title: "Insecticides Act, 1968",
    description:
      "Regulates the import, manufacture, sale, transport, distribution and use of insecticides to prevent risk to human beings and animals.",
  },
  {
    title: "Seed Act, 1966",
    description:
      "Ensures the quality of seeds for sale, distribution, and marketing, and promotes certified seed usage among farmers.",
  },
];

const ActAndRulesPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800 font-sans py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#722f37]">
        Acts & Rules
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actsAndRules.map((act, index) => (
          <div
            key={index}
            className="w-full bg-white border-l-4 border-[#883944] rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#212527]">
              {act.title}
            </h2>
            <p className="text-sm text-gray-600">{act.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActAndRulesPage;
