import React from 'react';
import { Phone } from 'lucide-react'; // Using lucide-react for the icon

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm font-sans">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-10 h-10 bg-[#f3a011] rounded-sm">
          <span className="text-2xl font-bold text-[#0f172a]">B</span>
        </div>
        <span className="text-2xl font-bold text-[#0f172a] tracking-tight">
          BuildCraft
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-sm font-semibold transition-colors ${
              link.active 
                ? 'text-[#f3a011]' 
                : 'text-gray-700 hover:text-[#f3a011]'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Contact & CTA Section */}
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2 text-[#0f172a] font-semibold">
          <Phone size={18} className="rotate-3" />
          <span className="text-sm">(123) 456-7890</span>
        </div>
        
        <button className="bg-[#f3a011] hover:bg-[#d98e0d] text-[#0f172a] px-6 py-3 rounded-md font-bold text-sm transition-all">
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;