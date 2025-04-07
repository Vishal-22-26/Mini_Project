import React from "react";
import { Link } from "react-router-dom";

import RegistrationPage from "./RegistrationPage";
import shivrajImg from "../assets/shivraj.jpg";
import shriBhagirathChoudhary from "../assets/Shri-Bhagirath-Choudhary.jpg";
import shriRamNathThakur from "../assets/Shri-Ram-Nath-Thakur.jpg";
import indiaEmblem from "../assets/indiaemblem.jpg";
import call from "../assets/call.png";
import digitIndia from "../assets/digital_india.png";
import makeIndia from "../assets/makeIndia.png";
import flag from "../assets/flag.jpg";
import khet from "../assets/khet.avif";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#212527] border-b-2 border-yellow-400 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center">
            <img src={indiaEmblem} alt="India Emblem" className="h-16 mr-4" />
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">
                कृषि एवं किसान कल्याण विभाग
              </h1>
              <h2 className="text-sm text-gray-300">
                DEPARTMENT OF AGRICULTURE & FARMERS WELFARE
              </h2>
              <p className="text-xs text-gray-400">
                MINISTRY OF AGRICULTURE & FARMERS WELFARE
                <br />
                GOVERNMENT OF INDIA
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="flex items-center justify-end mb-2">
              <img src={call} alt="Call" className="h-6 mr-2" />
              <span className="text-green-500 font-semibold text-lg">
                1800-180-1551
              </span>
            </div>
            <div className="flex gap-2 justify-end">
              <img src={digitIndia} alt="Digital India" className="h-8" />
              <img src={makeIndia} alt="Make in India" className="h-8" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#722f37] sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 text-white text-sm">
          <Link
            to="/about"
            className="py-3 px-5 hover:bg-[#883944] transition"
          >
            ABOUT US
          </Link>
          {["DIVISION", "ACT AND RULES", "SCHEMES", "RELATED LINKS"].map(
            (item, index) => (
              <a
                key={index}
                href={`${item.toLowerCase().replace(/\s+/g, "")}`}
                className="py-3 px-5 hover:bg-[#883944] transition"
              >
                {item}
              </a>
            )
          )}
          <Link
            to="/register"
            className="ml-auto py-3 px-5 bg-[#883944] hover:bg-[#9a4450] rounded-md"
          >
            REGISTER
          </Link>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative bg-[#242f53] text-white">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="flex-1 p-8 flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <img src={flag} alt="Flag" className="h-24 mb-4 rounded-full" />
            <p className="text-sm text-gray-300">Empowering the Backbone of India</p>
            <h2 className="text-2xl font-bold mt-1">
              हर खेत तक पानी, हर किसान को सम्मान
            </h2>
            <h1 className="text-3xl font-extrabold text-yellow-400">
              किसानों की उन्नति ही देश की प्रगति है।
            </h1>
            <p className="text-lg mt-4 font-semibold">Committed to rural prosperity and sustainable agriculture.</p>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-yellow-300">
              View Gallery
            </button>
          </div>
          <div
            className="flex-1 min-h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${khet})` }}
          ></div>
        </div>
      </section>

      {/* Ministers */}
<section className="bg-gray-50 py-10">
  <div className="container mx-auto grid md:grid-cols-3 gap-6 px-4">
    {[
      {
        img: shivrajImg,
        name: "Shri Shivraj Singh Chauhan",
        title: "Hon'ble Minister of Agriculture & Farmers Welfare",
      },
      {
        img: shriBhagirathChoudhary,
        name: "Shri Bhagirath Choudhary",
        title: "Hon'ble Minister of State for Agriculture & Farmers Welfare",
      },
      {
        img: shriRamNathThakur,
        name: "Shri Ram Nath Thakur",
        title: "Hon'ble Minister of State for Agriculture & Farmers Welfare",
      },
    ].map((minister, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition"
      >
        <img
          src={minister.img}
          alt={minister.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h4 className="font-semibold mb-1">{minister.name}</h4>
        <p className="text-sm text-gray-600">{minister.title}</p>
      </div>
    ))}
  </div>
</section>


      {/* Recent Initiatives */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            RECENT INITIATIVES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Minimum Support Price of Raw Jute for 2025-26 Season",
                date: "21-02-2025",
              },
              {
                title: "Final Approved Guidelines for National Mission on Natural Farming",
                date: "27-12-2024",
              },
              {
                title: "Minimum Support Price (MSP) of Toria for RMS 2025-26",
                date: "27-12-2024",
              },
              {
                title: "Draft National Policy Framework on Agricultural Marketing",
                date: "25-11-2024",
              },
            ].map((initiative, idx) => (
              <div
                key={idx}
                className="p-5 border rounded shadow-sm hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold text-blue-800 mb-1">
                  {initiative.title}
                </h4>
                <p className="text-sm text-gray-500">{initiative.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
