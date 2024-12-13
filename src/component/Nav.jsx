import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Swifie Text */}
        <h1 className="text-3xl italic font-bold text-yellow-400">Swiftie</h1>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="Header"
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-[#14213d] font-medium text-lg cursor-pointer transition"
          >
            Home
          </Link>
          <Link
            to="Services"
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-[#14213d] font-medium text-lg cursor-pointer transition"
          >
            Services
          </Link>
          <Link
            to="Aboutus"
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-[#14213d] font-medium text-lg cursor-pointer transition"
          >
            About Us
          </Link>
          <Link
            to="Works"
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-[#14213d] font-medium text-lg cursor-pointer transition"
          >
            Work
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-[#14213d] font-medium text-lg cursor-pointer transition"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-gray-800 text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="Header"
              smooth={true}
              duration={500}
              className="text-yellow-400 hover:text-white font-medium text-lg cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="Services"
              smooth={true}
              duration={500}
              className="text-yellow-400 hover:text-white font-medium text-lg cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="Aboutus"
              smooth={true}
              duration={500}
              className="text-yellow-400 hover:text-white font-medium text-lg cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="Works"
              smooth={true}
              duration={500}
              className="text-yellow-400 hover:text-white font-medium text-lg cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="text-yellow-400 hover:text-white font-medium text-lg cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
