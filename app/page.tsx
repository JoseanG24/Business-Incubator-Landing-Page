"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Program from "./components/Program";
import Resources from "./components/Resources";
import ApplyNow from "./components/Apply";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Aplica una clase con una sombra más oscura o una figura más grande
      } else {
        // Vuelve a la clase original
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full overflow-hidden mb-0">
        {/* Overlay oscuro para mejorar la visibilidad del texto */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-white via-transparent to-gray-700 min-w-[150%] min-h-[150%] rounded-full opacity-10"></div>
        {/* Contenido de la página */}
        <div
          id="home"
          className="flex flex-col items-center justify-center h-full px-4 text-center z-10"
        >
          <h1 className="text-white text-8xl font-extrabold tracking-tighter duration-1000 ease-in-out transform hover:scale-125 transition-all hover:mb-6 cursor-default">
            IMPULSA TU IDEA
          </h1>
          <h2 className="mt-4 text-xl text-white max-w-lg mx-auto">
            Transforma el futuro en UnisHub. Aplica ahora y comienza a hacer
            realidad tus sueños emprendedores.
          </h2>
          {/* Botones de acción con efectos de hover y cambio de color */}
          <div className="mt-8">
            <button className="px-8 py-3 bg-red-800 text-white text-lg rounded hover:bg-white hover:text-red-700 hover:scale-105 transform transition duration-300 ease-in-out cursor:pointer">
              <Link href="#apply">Aplica Ahora</Link>
            </button>
            <button className="px-8 py-3 text-white text-lg rounded border border-white hover:border-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out ml-4 hover:scale-105 transform cursor:pointer">
              <Link href="/pages/blog">Explora Más</Link>
            </button>
          </div>
        </div>
      </div>

      {/*<div className="hero">
        <h2>Se la próxima idea revolucionaria</h2>
        <Image src="/tipo-persona-emprendedora.webp" width={32} height={32} alt="emprendedor"/>
       </div>*/}

      <div id="about" className="mb-20">
        <About />
      </div>

      <div id="program">
        <Program />
      </div>

      <div id="resources">
        <Resources />
      </div>

      <div id="blog" className="bg-red-800 py-24 ease-in-out hover:py-60 mt-0 text-white text-4xl font-bold hover:text-5xl transition-all duration-700 pl-28 mb-32">
          ¿Te interesa aprender más?
        
        <Link href="/pages/blog">
          <button className="text-2xl text-yellow-500 font-bold hover:text-4xl transition-all duration-500 pl-11 hover:pl-20 hover:underline">Explora nuestro blog</button>
        </Link>
      </div>

      <div id="apply">
        <ApplyNow />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
