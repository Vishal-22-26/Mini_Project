import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with logos and helpline */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/india-emblem.png" alt="India Emblem" className="h-14 mr-4" />
            <div className="text-center md:text-left">
              <h1 className="text-base font-bold">कृषि एवं किसान कल्याण विभाग</h1>
              <h2 className="text-sm font-semibold">DEPARTMENT OF AGRICULTURE & FARMERS WELFARE</h2>
              <p className="text-xs text-gray-700">MINISTRY OF AGRICULTURE & FARMERS WELFARE<br />GOVERNMENT OF INDIA</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <img src="/assets/kisan-call-center.png" alt="Kisan Call Center" className="h-8 mr-2" />
              <span className="text-green-800 font-bold">1800-180-1551</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <img src="/assets/g20-logo.png" alt="G20" className="h-8" />
              <img src="/assets/azadi-ka-amrit.png" alt="Azadi Ka Amrit" className="h-8" />
              <img src="/assets/swachh-bharat.png" alt="Swachh Bharat" className="h-8" />
              <img src="/assets/digital-india.png" alt="Digital India" className="h-8" />
              <img src="/assets/make-in-india.png" alt="Make in India" className="h-8" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#722f37] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <a href="#about" className="py-3 px-6 hover:bg-[#883944] transition">ABOUT US</a>
            <a href="#division" className="py-3 px-6 hover:bg-[#883944] transition">DIVISION</a>
            <a href="#acts" className="py-3 px-6 hover:bg-[#883944] transition">ACT AND RULES</a>
            <a href="#schemes" className="py-3 px-6 hover:bg-[#883944] transition">SCHEMES</a>
            <a href="#links" className="py-3 px-6 hover:bg-[#883944] transition">RELATED LINKS</a>
            <a href="#register" className="ml-auto py-3 px-6 bg-[#883944] hover:bg-[#9a4450] transition">REGISTER</a>
          </div>
        </div>
      </nav>

      {/* Main banner */}
      <section className="relative bg-[#242f53] text-white">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left arrow */}
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10">
            &lt;
          </button>
          
          {/* Banner content */}
          <div className="p-6 md:p-10 flex-1">
            <div className="flex flex-col h-full justify-center">
              <div className="mb-6">
                <img src="/assets/india-emblem-small.png" alt="India Emblem" className="h-12 mb-4" />
                <p className="text-sm">Celebrating</p>
                <h3 className="text-lg font-semibold mb-1">150<sup>th</sup> Birth Anniversary Year of</h3>
                <h2 className="text-xl font-bold">Dhani Aatso Bhagwan Birsa Munda</h2>
              </div>
              
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2">JANJATIYA</h1>
                <div className="bg-red-600 px-3 py-1 text-lg font-bold inline-block mb-2">GAURAV DIWAS</div>
                <div className="text-lg mb-4">15 November, 2024</div>
                <div className="text-sm mb-6">
                  <p>#BirsaMunda150</p>
                  <p>#JanjatiyaGauravDiwas</p>
                </div>
                <button className="bg-gray-800 px-4 py-2 text-sm">View Gallery</button>
              </div>
            </div>
          </div>
          
          {/* Banner image */}
          <div className="md:flex-1 min-h-[300px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/assets/birsa-munda-statue.jpg')"}}>
          </div>
        </div>
      </section>

      {/* Ministers section */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Minister 1 */}
            <div className="bg-white p-4 rounded shadow text-center">
              <img src="../assets/shivraj.jpg" alt="Minister" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold mb-1">Shri Example Name</h4>
              <p className="text-sm text-gray-600">Hon'ble Minister of Agriculture & Farmers Welfare</p>
            </div>
            
            {/* Minister 2 */}
            <div className="bg-white p-4 rounded shadow text-center">
              <img src="assets/Shri-Bhagirath-Choudhary.jpg" alt="Minister" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold mb-1">Shri Example Name</h4>
              <p className="text-sm text-gray-600">Hon'ble Minister of State for Agriculture & Farmers Welfare</p>
            </div>
            
            {/* Minister 3 */}
            <div className="bg-white p-4 rounded shadow text-center">
              <img src="assets/Shri-Ram-Nath-Thakur.jpg" alt="Minister" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold mb-1">Shri Example Name</h4>
              <p className="text-sm text-gray-600">Hon'ble Minister of State for Agriculture & Farmers Welfare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Initiatives - Updated with text instead of images */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">RECENT INITIATIVES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Initiative 1 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">Minimum Support Price of Raw Jute for 2025-26 Season</h4>
              <p className="text-sm text-gray-500">21-02-2025</p>
            </div>
            
            {/* Initiative 2 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">Final Approved Guidelines for National Mission on Natural Farming</h4>
              <p className="text-sm text-gray-500">27-12-2024</p>
            </div>
            
            {/* Initiative 3 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">Minimum Support Price (MSP) of Toria for Rabi Marketing Season (RMS) 2025-26</h4>
              <p className="text-sm text-gray-500">27-12-2024</p>
            </div>
            
            {/* Initiative 4 */}
            <div className="bg-white p-4 border border-gray-200 rounded shadow hover:shadow-md transition">
              <h4 className="font-medium text-blue-800 hover:underline mb-2">Draft National Policy Framework on Agricultural Marketing – public comments /suggestions regarding</h4>
              <p className="text-sm text-gray-500">25-11-2024</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer logos */}
      <section className="bg-gray-100 py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center mb-4 gap-6">
            <img src="/assets/cashless-india.png" alt="Cashless India" className="h-10" />
            <img src="/assets/public-grievances.png" alt="Public Grievances" className="h-10" />
            <img src="/assets/web-directory.png" alt="Web Directory" className="h-10" />
            <img src="/assets/digital-india-footer.png" alt="Digital India" className="h-10" />
            <img src="/assets/my-gov.png" alt="MyGov" className="h-10" />
          </div>
          
          <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </section>
      
      {/* Bottom footer */}
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-sm text-gray-700">
            <a href="#help" className="my-1 md:my-0">HELP</a>
            <a href="#terms" className="my-1 md:my-0">TERMS AND CONDITIONS</a>
            <a href="#contact" className="my-1 md:my-0">CONTACT US</a>
            <a href="#feedback" className="my-1 md:my-0">FEEDBACK</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;