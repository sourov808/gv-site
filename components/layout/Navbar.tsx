"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Earth, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const navLinks = [
    { href: "/", label: "Destinations" },
    { href: "/", label: "Expeditions" },
    { href: "/", label: "Guides" },
    { href: "/", label: "Community" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5" 
            : "bg-transparent border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group z-10">
          <div className="bg-blue-600 p-1.5 rounded-lg flex items-center justify-center">
            <Earth className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <span className="font-extrabold text-lg md:text-xl tracking-tight text-zinc-900 dark:text-zinc-50">GV</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8 px-4 lg:px-8 py-2">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 z-10">
          <button className="relative px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-50 text-sm font-semibold text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95">
            View
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-zinc-900 dark:text-zinc-50 z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="text-xl font-semibold text-zinc-900 dark:text-zinc-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="mt-4 px-6 py-3 rounded-full bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                View
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
