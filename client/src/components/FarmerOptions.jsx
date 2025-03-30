import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const FarmerOptions = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userState = queryParams.get("state");

    const [schemeCategory, setSchemeCategory] = useState("");
    const [schemes, setSchemes] = useState([]);
    const [userInfo, setUserInfo] = useState({ name: "", state: "", district: "" }); // 🆕 User Info

    // Fetch user info
    useEffect(() => {
        if (userState) {
            axios.get(`http://localhost:3000/user/${userState}`)
                .then(response => {
                    setUserInfo(response.data);
                })
                .catch(error => {
                    console.error("Error fetching user info:", error);
                });
        }
    }, [userState]);

    const fetchSchemes = async (category) => {
        console.log("Fetching schemes for:", userState, category);
        try {
            const response = await axios.get(`http://localhost:3000/schemes/${userState}/${category}`);
            setSchemes(response.data || []);
        } catch (error) {
            console.error("Error fetching schemes:", error);
            setSchemes([]);
        }
    };

    useEffect(() => {
        if (schemeCategory && userState) {
            fetchSchemes(schemeCategory);
        }
    }, [schemeCategory, userState]);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-[#722f37] text-white p-4">
                <div className="container mx-auto flex justify-between">
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
                            <p className="mb-4">Access government schemes for agricultural support.</p>

                            {schemeCategory ? (
                                <div>
                                    <button onClick={() => setSchemeCategory("")} className="text-blue-600 flex items-center">
                                        <span className="mr-1">←</span> Back to options
                                    </button>

                                    <h4 className="font-bold text-lg mb-3">
                                        {schemeCategory === "cropProduction" ? "Crop Production Schemes" : "Financial Assistance Schemes"}
                                    </h4>

                                    <ul className="space-y-3">
                                        {schemes.length > 0 ? (
                                            schemes.map((scheme) => (
                                                <li key={scheme._id || scheme.id} className="border-b pb-2">
                                                    <div className="font-medium text-blue-700">{scheme.name}</div>
                                                    <p className="text-gray-600 text-sm">{scheme.description}</p>
                                                </li>
                                            ))
                                        ) : (
                                            <p className="text-gray-600">No schemes found for {userState}.</p>
                                        )}
                                    </ul>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <button onClick={() => setSchemeCategory("cropProduction")} className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-md">
                                        Crop Production Enhancement Schemes
                                    </button>
                                    <button onClick={() => setSchemeCategory("finance")} className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-md">
                                        Financial Assistance Schemes
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Other Cards */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-yellow-600 text-white p-4">
                            <h3 className="text-xl font-bold">Plant Disease Detection</h3>
                        </div>
                        <div className="p-4">
                            <p className="mb-4">Use our AI-powered tool to identify and diagnose plant diseases from photos.</p>
                            <Link to="/plant-disease-detection" className="block w-full bg-yellow-100 hover:bg-yellow-200 text-center py-3 rounded-md transition">
                                Access Disease Detection Tool
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-blue-600 text-white p-4">
                            <h3 className="text-xl font-bold">Land History</h3>
                        </div>
                        <div className="p-4">
                            <p className="mb-4">View historical information about your land, including crop patterns and soil health.</p>
                            <Link to="/land-history" className="block w-full bg-blue-100 hover:bg-blue-200 text-center py-3 rounded-md transition">
                                View Land History
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick links */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 bg-amber-900">Quick Links</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link to="/" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">Home</Link>
                        <Link to="/register" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">Update Profile</Link>
                        <a href="#weather" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">Weather Forecast</a>
                        <a href="#market" className="bg-white p-3 rounded shadow text-center hover:shadow-md transition">Market Prices</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerOptions;
