import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Configuration for links
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Events', href: '#', hasDropdown: true },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Testimonials', href: '#' },
    { name: 'Network', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Media', href: '#' },
  ];

  return (
    <nav className="bg-[#f8f9fa] w-full font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 1. LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            {/* IMPORTANT: Replace '/path-to-your-logo.png' with your actual image path.
              If using Next.js, put the image in the 'public' folder.
              If using standard React, import the image at the top.
            */}
            <img 
              src="/path-to-your-logo.png" 
              alt="SMR Logo" 
              className="h-12 w-auto object-contain" 
            />
            
            {/* Fallback if you don't have the image file linked yet: */}
             {/* <span className="text-3xl font-black text-slate-800 tracking-tighter ml-2">SMR</span> */}
          </div>

          {/* 2. DESKTOP MENU */}
          <div className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <a
                  href={link.href}
                  className="flex items-center text-gray-700 hover:text-[#0066cc] text-[16px] font-normal transition-colors duration-200"
                >
                  {link.name}
                  {/* Inline SVG for Dropdown Arrow */}
                  {link.hasDropdown && (
                    <svg className="ml-1 w-3 h-3 fill-current opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block z-50">
                    <div className="bg-white rounded-md shadow-xl py-2 border border-gray-100">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066cc]">Submenu Item 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0066cc]">Submenu Item 2</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3. CTA BUTTON */}
          <div className="hidden xl:flex items-center">
            <button className="bg-[#0f6cbd] hover:bg-[#0b5c9e] text-white px-7 py-2.5 rounded text-[15px] font-medium transition-colors duration-200 shadow-sm">
              Let's Talk
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Close Icon */
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[#0066cc] hover:bg-gray-50 border-b border-gray-50"
              >
                <div className="flex justify-between items-center">
                  {link.name}
                  {link.hasDropdown && (
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </div>
              </a>
            ))}
            <div className="pt-4 px-3">
              <button className="w-full bg-[#0f6cbd] text-white px-6 py-3 rounded font-medium">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;