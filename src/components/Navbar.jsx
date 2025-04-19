import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv-heng_visal.pdf";
    link.download = "cv-heng_visal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-black text-white px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-2 flex flex-col md:flex-row justify-between items-center">
        {/* <div className="text-2xl font-bold mb-2 md:mb-0">Yousof</div> */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="mt-2 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-black font-semibold 
                       transform transition-transform duration-300 hover:scale-105 
                       px-4 py-2 rounded-full w-full md:w-auto"
          >
            Connect Me
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full md:w-48 
                            bg-white border rounded-lg shadow-lg p-2 z-10">
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://t.me/notvalsy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/heng.visal.399826"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/heng-visal-91a997308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mt-2 space-x-4 md:space-x-6 mb-2 md:mb-0">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;