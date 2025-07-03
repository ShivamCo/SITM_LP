import { Phone, Mail, GraduationCap } from "lucide-react";
import { useState } from "react";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm  top-0 z-50">
      {/* Main Header Bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          
            <img src="/logo.png" className="w-12  " />
          
          <div>
            <h1 className="text-lg font-bold text-blue-800">SAROJ INSTITUTE</h1>
            <p className="text-xs text-gray-600  sm:block">Technology & Management</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+919555699988" className="flex items-center group">
            <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition">
              <Phone className="text-blue-600 h-4 w-4" />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-700">+91 9555699988</p>
              <p className="text-xs text-gray-500">Admission Helpline</p>
            </div>
          </a>

          <a href="mailto:admission.cell@seglko.org" className="flex items-center group">
            <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition">
              <Mail className="text-blue-600 h-4 w-4" />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-700">admission.cell@seglko.org</p>
              <p className="text-xs text-gray-500">Email Us</p>
            </div>
          </a>

          <a 
            href="#begin-journey" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-blue-600 text-white p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-4">
            <a 
              href="tel:+919555699988" 
              className="flex items-center p-2 rounded-lg bg-blue-50"
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <Phone className="text-blue-600 h-4 w-4" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Call Us</p>
                <p className="text-xs text-gray-500">+91 9555699988</p>
              </div>
            </a>

            <a 
              href="mailto:admission.cell@seglko.org" 
              className="flex items-center p-2 rounded-lg bg-blue-50"
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <Mail className="text-blue-600 h-4 w-4" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Email Us</p>
                <p className="text-xs text-gray-500">admission.cell@seglko.org</p>
              </div>
            </a>

            <a 
              href="#begin-journey" 
              className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition font-medium"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;