"use client";

import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-950 fixed top-0 w-full z-50 shadow dark:shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-semibold tracking-tight text-rose-500">
          &lt;Prashant /&gt;
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition text-black hover:text-rose-500 dark:text-white dark:hover:text-rose-500"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition text-black hover:text-rose-500 dark:text-white dark:hover:text-rose-500"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <MdLightMode className="w-5 h-5" />
              ) : (
                <MdDarkMode className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {/* ✅ Mobile Menu Button*/}
        <div className="md:hidden p-1 rounded-md flex justify-center items-center bg-gray-200 dark:bg-gray-800">
          <button onClick={toggleNav} className="text-black dark:text-white focus:outline-none">
            {navOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Nav Links */}
      {navOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 px-6 pb-4 pt-4 space-y-4 shadow-lg border-t-2 border-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setNavOpen(false)}
              className="block text-black hover:text-rose-500 dark:text-white dark:hover:text-rose-500 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Theme Toggle */}
          {mounted && (
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setNavOpen(false);
              }}
              className="flex items-center space-x-2 text-black hover:text-rose-500 dark:text-white dark:hover:text-rose-500 transition"
            >
              {theme === "dark" ? (
                <>
                  <MdLightMode className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <MdDarkMode className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
