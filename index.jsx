import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleNavbar} 
        className="absolute top-4 left-4 z-10 p-2 text-white bg-gray-800 rounded"
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}
      >
        <ul className="p-4">
          <li className="py-2"><a href="#home">Home</a></li>
          <li className="py-2"><a href="#about">About</a></li>
          <li className="py-2"><a href="#services">Services</a></li>
          <li className="py-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className={`transition-transform duration-300 ${isOpen ? 'ml-64' : 'ml-0'} p-4`}>
        {/* Add your main content here */}
        <h1 className="text-2xl font-bold">Welcome to the Site</h1>
        <p>This is where your main content goes.</p>
      </div>
    </div>
  );
}

export default Navbar;
