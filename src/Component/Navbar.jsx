import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const style = (e) => ({
    color: e.isActive ? "red" : "",
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center p-4 w-[90%] m-auto">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-4 text-lg font-bold">
        <NavLink style={style} to="/">
          Home
        </NavLink>
        <NavLink style={style} to="/contact">
          Contact
        </NavLink>
        <NavLink style={style} to="/about">
          About
        </NavLink>
      </div>

      {/* Login Button for Desktop */}
      <div className="hidden md:block">
        <button className="text-lg font-bold text-white bg-[#D01C28] px-4 py-2 rounded">
          Login
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-2xl font-bold focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center gap-4 py-4">
            <NavLink
              style={style}
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              style={style}
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              style={style}
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-white bg-[#D01C28] px-4 py-2 rounded"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
