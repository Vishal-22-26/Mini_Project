import React from "react";
import { Link } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";

import shivrajImg from "../assets/shivraj.jpg";
import shriBhagirathChoudhary from "../assets/Shri-Bhagirath-Choudhary.jpg";
import shriRamNathThakur from "../assets/Shri-Ram-Nath-Thakur.jpg";
import indiaEmblem from "../assets/indiaEmblem.jpg";
import call from "../assets/call.png";
import birsaMunda from "../assets/birsa_munda.jpg";
import digitIndia from "../assets/digital_india.png";
import makeIndia from "../assets/makeIndia.png";
import flag from "../assets/flag.jpg";
import khet from "../assets/khet.avif";
const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with logos and helpline */}
      <header className="bg-[#212527] border-b border-[#FFDF00">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src={indiaEmblem} alt="India Emblem" className="h-14 mr-4" />
            <div className="text-center md:text-left">
              <h1 className="text-base font-bold text-white">
                कृषि एवं किसान कल्याण विभाग
              </h1>
              <h2 className="text-sm mt-2 font-semibold text-gray-200">
                DEPARTMENT OF AGRICULTURE & FARMERS WELFARE
              </h2>
              <p className="text-xs mt-1.5 text-gray-400">
                MINISTRY OF AGRICULTURE & FARMERS WELFARE
                <br />
                GOVERNMENT OF INDIA
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <img src={call} alt="Kisan Call Center" className="h-8 mr-2" />
              <span className="text-green-800 font-bold">1800-180-1551</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <img src={digitIndia} alt="Digital India" className="h-8" />
              <img src={makeIndia} alt="Make in India" className="h-8" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#722f37] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <a
              href="#about"
              className="py-3 px-6 hover:bg-[#883944] transition"
            >
              ABOUT US
            </a>
            <a
              href="#division"
              className="py-3 px-6 hover:bg-[#883944] transition"
            >
              DIVISION
            </a>
            <a href="#acts" className="py-3 px-6 hover:bg-[#883944] transition">
              ACT AND RULES
            </a>
            <a
              href="/schemes"
              className="py-3 px-6 hover:bg-[#883944] transition"
            >
              SCHEMES
            </a>
            <a
              href="#links"
              className="py-3 px-6 hover:bg-[#883944] transition"
            >
              RELATED LINKS
            </a>
            <a
              href="/register"
              className="ml-auto py-3 px-6 bg-[#883944] hover:bg-[#9a4450] transition"
            >
              REGISTER
            </a>
          </div>
        </div>
      </nav>

      {/* Main banner */}
      <section className="relative bg-[#242f53] text-white">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left arrow */}
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-2xl z-10">
            &lt;
          </button>

          {/* Banner content */}
          <div className="p-6 md:p-10 flex-1">
            <div className="flex flex-col h-full justify-center">
              <div className="flex flex-col items-center text-center space-y-2 mb-6">
                <img
                  src={flag}
                  alt="India Emblem"
                  className="h-20 w-auto rounded-full object-contain"
                />

                <p className="text-sm text-gray-600">Celebrating</p>
                <h3 className="text-lg font-semibold">
                  150<sup>th</sup> Birth Anniversary Year of
                </h3>
                <h2 className="text-xl font-bold text-gray-800">
                  Dhani Aatso Bhagwan Birsa Munda
                </h2>
              </div>

              <div className="mb-6 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2">JANJATIYA</h1>
                <div className="bg-red-600 px-3 py-1 text-lg font-bold rounded-2xl inline-block mb-2">
                  GAURAV DIWAS
                </div>
                <div className="text-lg mb-4">15 November, 2024</div>
                <div className="text-sm mb-6"></div>
                <button className="bg-gray-300 px-4 py-2 text-black text-sm hover:bg-amber-950 transition-colors duration-100 rounded-md">
                  View Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Banner image */}
          <div
            className="md:flex-1 min-h-[300px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${khet})` }}
          ></div>
        </div>
      </section>

      {/* Ministers section */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Minister 1 */}
            <div className="bg-white p-4 rounded shadow text-center">
              <img
                src={shivrajImg}
                alt="Minister"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold mb-1">Shri Example Name</h4>
              <p className="text-sm text-gray-600">
                Hon'ble Minister of Agriculture & Farmers Welfare
              </p>
            </div>

            {/* Minister 2 */}
            <div className="bg-white p-4 rounded shadow text-center">
              <img
                src={shriBhagirathChoudhary}
                alt="Minister"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold mb-1">Shri Example Name</h4>
              <p className="text-sm text-gray-600">
                Hon'ble Minister of State for Agriculture & Farmers Welfare
              </p>
            </div>

            {/* Minister 3 */}
            <div className="bg-white p-4 rounded shadow text-center">
              <img
                src={shriRamNathThakur}
                alt="Minister"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold mb-1">Shri Example Name</h4>
              <p className="text-sm text-gray-600">
                Hon'ble Minister of State for Agriculture & Farmers Welfare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Initiatives - Updated with text instead of images */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold flex flex-col items-center mt-6 mb-5  border-gray-200">
            RECENT INITIATIVES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Initiative 1 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">
                Minimum Support Price of Raw Jute for 2025-26 Season
              </h4>
              <p className="text-sm text-gray-500">21-02-2025</p>
            </div>

            {/* Initiative 2 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">
                Final Approved Guidelines for National Mission on Natural
                Farming
              </h4>
              <p className="text-sm text-gray-500">27-12-2024</p>
            </div>

            {/* Initiative 3 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">
                Minimum Support Price (MSP) of Toria for Rabi Marketing Season
                (RMS) 2025-26
              </h4>
              <p className="text-sm text-gray-500">27-12-2024</p>
            </div>

            {/* Initiative 4 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">
                Draft National Policy Framework on Agricultural Marketing –
                public comments /suggestions regarding
              </h4>
              <p className="text-sm text-gray-500">25-11-2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer logos */}
    </div>
  );
};

export default LandingPage;
