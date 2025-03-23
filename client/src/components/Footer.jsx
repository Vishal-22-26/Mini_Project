import React from "react";

function Footer() {
  return (
    <footer className="bg-[#212527] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center text-sm text-gray-700 space-y-2 md:space-y-0">
          {["HELP", "TERMS AND CONDITIONS", "CONTACT US", "FEEDBACK"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
