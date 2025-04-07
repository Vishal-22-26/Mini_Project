import React from "react";

const divisions = [
  {
    title: "Crop Production & Management",
    description:
      "Focuses on increasing agricultural productivity through sustainable farming practices, use of improved seeds, fertilizers, and modern equipment.",
  },
  {
    title: "Horticulture Division",
    description:
      "Promotes the cultivation of fruits, vegetables, flowers, spices, and medicinal plants to enhance income generation and nutrition security.",
  },
  {
    title: "Soil & Water Conservation",
    description:
      "Responsible for managing soil health, promoting organic farming, and ensuring water resource sustainability through rainwater harvesting and micro-irrigation.",
  },
  {
    title: "Agricultural Education & Research",
    description:
      "Coordinates agricultural research institutions and universities to ensure innovation and dissemination of knowledge to farmers.",
  },
  {
    title: "Extension & Training",
    description:
      "Works to bridge the gap between research and real-world farming by training farmers through Kisan Call Centres, field demonstrations, and awareness programs.",
  },
  {
    title: "Market & Price Support",
    description:
      "Ensures fair pricing for agricultural produce and regulates procurement through schemes like MSP and e-NAM platforms.",
  },
];

const DivisionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans py-12 px-4">
      <div className="mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#722f37]">
          Divisions of the Department
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {divisions.map((div, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-2 text-[#212527]">
                {div.title}
              </h2>
              <p className="text-sm text-gray-600">{div.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivisionPage;
