"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const menuStyles = {
    closed: "transform translate-x-full transition ease-in-out duration-500",
    open: "transform translate-x-0 transition ease-in-out duration-500",
  };

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 80) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollTop(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`md:bg-black fixed w-full sm:py-2 z-30 transition-transform duration-300 ease-in-out ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } md:shadow-md md:shadow-white/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 align-middle">
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-3xl mb-2 md:hidden"
            >
              <span>≣</span>
            </button>
            <div className="flex-shrink-0 ">
              <Link href="#home">
                <h1 className="flex-shrink-0 hover:scale-95 transition-all duration-300 pt-2">
                  <Image
                    src="/UnisHub_logo-removebg-preview.png"
                    alt="UnisHub"
                    width={200}
                    height={200}
                  />
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#home">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 hover:scale-110 transition-all duration-300">
                    Inicio
                  </button>
                </Link>
                <Link href="#about">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 hover:scale-110 transition-all duration-300">
                    Sobre Nosotros
                  </button>
                </Link>
                <Link href="#program">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 hover:scale-110 transition-all duration-300">
                    Programa de Incubación
                  </button>
                </Link>
                <Link href="#resources">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 hover:scale-110 transition-all duration-300">
                    Recursos
                  </button>
                </Link>
                <Link href="/pages/blog">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 hover:scale-110 transition-all duration-300">
                    Blog y Noticias
                  </button>
                </Link>
                <Link href="#apply">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 hover:scale-110 transition-all duration-300">
                    Aplica Ahora
                  </button>
                </Link>
                <Link href="#contact">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:text-red-500 hover:scale-110 transition-all duration-300">
                    Contáctanos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-opacity duration-200 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#home">
                <button className="block text-left px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-red-800 transition-colors ease-in-out w-auto underline">
                  Inicio
                </button>
              </Link>
              <Link href="#about">
                <button className="block text-left px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-red-800 transition-colors ease-in-out w-auto underline">
                  Sobre Nosotros
                </button>
              </Link>
              <Link href="#program">
                <button className="block text-left px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-red-800 transition-colors ease-in-out w-auto underline">
                  Programa de Incubación
                </button>
              </Link>
              <Link href="#apply">
                <button className="block text-left px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-red-800 transition-colors ease-in-out w-auto underline">
                  Aplica Ahora
                </button>
              </Link>
              <Link href="#resources">
                <button className="block text-left px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-red-800 transition-colors ease-in-out w-auto underline">
                  Recursos
                </button>
              </Link>
              <Link href="#blog">
                <button className="block text-left px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-red-800 transition-colors ease-in-out w-auto underline">
                  Blog y Noticias
                </button>
              </Link>
              <Link href="#footer">
                <button className="block text-left px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-red-800 transition-colors ease-in-out w-auto underline">
                  Contáctanos
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
