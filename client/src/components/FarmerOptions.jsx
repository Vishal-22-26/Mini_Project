import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FarmerOptions = () => {
  // State to store user information
  const [userInfo, setUserInfo] = useState({
    name: "",
    state: "",
    district: ""
  });

  // State schemes data organized by state
  const stateSchemes = {
    "Rajasthan": {
      cropProduction: [
        { id: 1, name: "Rajasthan Krishi Vikas Yojana", description: "Supports crop diversification and sustainable farming practices" },
        { id: 2, name: "Rajasthan Drought Mitigation Scheme", description: "Supports drought-resistant crop varieties and water conservation" }
      ],
      finance: [
        { id: 1, name: "Rajasthan Kisan Credit Card", description: "Special credit facilities for farmers in Rajasthan" },
        { id: 2, name: "Rajasthan Agricultural Loan Waiver", description: "Financial relief for eligible farmers" }
      ]
    },
    "Maharashtra": {
      cropProduction: [
        { id: 1, name: "Maharashtra Agri-business and Rural Transformation Project", description: "Support for climate-resilient agriculture" },
        { id: 2, name: "Maharashtra Horticulture Development Program", description: "Promotes high-value crop production" }
      ],
      finance: [
        { id: 1, name: "Maharashtra Farmer Loan Assistance", description: "Low-interest loans for small and marginal farmers" },
        { id: 2, name: "Maharashtra Farm Equipment Subsidy", description: "Financial support for purchasing modern equipment" }
      ]
    },
    "Punjab": {
      cropProduction: [
        { id: 1, name: "Punjab Crop Residue Management Program", description: "Alternatives to crop burning and sustainable practices" },
        { id: 2, name: "Punjab Smart Farming Initiative", description: "Technology integration in farming practices" }
      ],
      finance: [
        { id: 1, name: "Punjab Agricultural Insurance Scheme", description: "Crop insurance for farmers" },
        { id: 2, name: "Punjab Direct Benefit Transfer for Farmers", description: "Financial assistance directly to farmer accounts" }
      ]
    },
    // Add more states as needed
    "default": {
      cropProduction: [
        { id: 1, name: "National Food Security Mission", description: "Increase production of rice, wheat, pulses, coarse cereals" },
        { id: 2, name: "Mission for Integrated Development of Horticulture", description: "Holistic growth of horticulture sector" }
      ],
      finance: [
        { id: 1, name: "PM-KISAN", description: "Income support to all farmers across the country" },
        { id: 2, name: "Agriculture Infrastructure Fund", description: "Financing facility for farm-gate infrastructure" }
      ]
    }
  };

  // State to track which scheme category is currently selected
  const [schemeCategory, setSchemeCategory] = useState("");

  // Load user information from localStorage when component mounts
  useEffect(() => {
    const storedUserData = localStorage.getItem("farmerUserData");
    if (storedUserData) {
      setUserInfo(JSON.parse(storedUserData));
    }
  }, []);

  // Get schemes based on user's state
  const getSchemes = (category) => {
    const userState = userInfo.state;
    if (userState && stateSchemes[userState] && stateSchemes[userState][category]) {
      return stateSchemes[userState][category];
    }
    return stateSchemes.default[category];
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with welcome message */}
      <header className="bg-[#722f37] text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Farmer Portal</h1>
          {userInfo.name && (
            <p className="text-lg">
              Welcome, {userInfo.name} | {userInfo.state}, {userInfo.district}
            </p>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Farmer Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* State Schemes Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-xl font-bold">State Schemes</h3>
            </div>
            <div className="p-4">
              <p className="mb-4">
                Access government schemes specific to your region for agricultural support.
              </p>
              {schemeCategory ? (
                <div>
                  <div className="flex items-center mb-4">
                    <button 
                      onClick={() => setSchemeCategory("")}
                      className="text-blue-600 flex items-center"
                    >
                      <span className="mr-1">←</span> Back to options
                    </button>
                  </div>
                  
                  <h4 className="font-bold text-lg mb-3">
                    {schemeCategory === "cropProduction" 
                      ? "Crop Production Schemes" 
                      : "Financial Assistance Schemes"}
                  </h4>
                  
                  <ul className="space-y-3">
                    {getSchemes(schemeCategory).map(scheme => (
                      <li key={scheme.id} className="border-b pb-2">
                        <div className="font-medium text-blue-700">{scheme.name}</div>
                        <p className="text-gray-600 text-sm">{scheme.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => setSchemeCategory("cropProduction")}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-md transition"
                  >
                    Crop Production Enhancement Schemes
                  </button>
                  <button
                    onClick={() => setSchemeCategory("finance")}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-md transition"
                  >
                    Financial Assistance Schemes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Plant Disease Detection Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-yellow-600 text-white p-4">
              <h3 className="text-xl font-bold">Plant Disease Detection</h3>
            </div>
            <div className="p-4">
              <p className="mb-4">
                Use our AI-powered tool to identify and diagnose plant diseases from photos.
              </p>
              <Link 
                to="/plant-disease-detection" 
                className="block w-full bg-yellow-100 hover:bg-yellow-200 text-center py-3 rounded-md transition"
              >
                Access Disease Detection Tool
              </Link>
              <div className="mt-4 text-sm text-gray-600">
                <p>Upload a clear photo of your affected plant for accurate diagnosis and treatment recommendations.</p>
              </div>
            </div>
          </div>

          {/* Land History Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold">Land History</h3>
            </div>
            <div className="p-4">
              <p className="mb-4">
                View historical information about your land, including crop patterns, soil health, and yields.
              </p>
              <Link 
                to="/land-history" 
                className="block w-full bg-blue-100 hover:bg-blue-200 text-center py-3 rounded-md transition"
              >
                View Land History
              </Link>
              <div className="mt-4 text-sm text-gray-600">
                <p>Access data-driven insights to make informed decisions for your next growing season.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">
              Home
            </Link>
            <Link to="/register" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">
              Update Profile
            </Link>
            <a href="#weather" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">
              Weather Forecast
            </a>
            <a href="#market" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">
              Market Prices
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerOptions;