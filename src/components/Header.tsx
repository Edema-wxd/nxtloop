"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { id: "features", label: "Features", href: "/features" },
    { id: "founders", label: "Meet the Founders", href: "/founders" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 animate-scale-in"
          >
            <Image
              src="/images/logo.png"
              alt="Nestloop"
              width={120}
              height={120}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`nav-link px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100/50 ${
                  pathname === item.href
                    ? "text-[#f4b75a] font-medium"
                    : "text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation (simplified) */}
          <nav className="flex lg:hidden items-center space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-black hover:text-accent transition-colors duration-200 ${
                  pathname === item.href ? "text-accent font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-fit h-fit">
              {isMenuOpen ? (
                <FaTimes className="text-black text-2xl" />
              ) : (
                <FaBars className="text-black text-2xl" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100/50 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100/50 ${
                  pathname === item.href
                    ? "text-accent font-medium bg-accent/10"
                    : "text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
