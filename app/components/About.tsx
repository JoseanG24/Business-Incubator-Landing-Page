"use client";
import { useState } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  const slides = [
    {
      title: "Nuestro Equipo",
      content:
        "Integrado por catedráticos, alumnos y personas apasionadas por el emprendimiento, nuestro equipo se dedica a orientar a los estudiantes en el lanzamiento de sus emprendimientos, combinando experiencia académica y práctica empresarial para fomentar la innovación.",
    },
    {
      title: "Nuestros Colaboradores  ",
      content:
        "Contamos con el apoyo de una amplia red de colaboradores e inversores que creen firmemente en nuestro propósito y en el impacto positivo del emprendimiento. Estas alianzas estratégicas nos permiten brindar más oportunidades y recursos, ampliando el alcance y el éxito de nuestras emprendimientos.",
    },
    {
      title: "Nuestra Misión",
      content:
        "Nuestra misión es facilitar un ecosistema de incubación que permita a los estudiantes transformar sus ideas innovadoras en empresas sostenibles. Proveemos apoyo en cada etapa del desarrollo, desde la ideación hasta la comercialización, asegurando una base sólida para el futuro empresarial de nuestros emprendedores.",
    },
    {
      title: "Nuestra Visión",
      content:
        "Aspiramos una incubadora única, reconocida por su contribución al ecosistema emprendedor. Nuestro enfoque está en fomentar proyectos que generen un impacto significativo en la sociedad y en la economía, además de ayudar a estudiantes a poder cumplir sus sueños emprendedores.",
    },
    {
      title: "Nuestros Valores",
      content:
        "Innovación, colaboración, excelencia e integridad son los pilares que nos definen. Estos valores están presentes en cada aspecto de este proyecto, desde el trato con los estudiantes y mentores hasta nuestras interacciones con la comunidad empresarial y académica.",
    },
  ];

  const whiteShadowStyle = {
    boxShadow: '0px 0px 8px 2px rgba(255, 255, 255, 0.39)',
    transition: 'opacity 0.7s',
    margin: '0 auto',
  };

  const changeSlide = (next: any) => {
    setSlideIn(false); 

    setTimeout(() => {
      setCurrentSlide((prev) =>
        next
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
      setSlideIn(true);
    }, 370);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-24">¿Quiénes somos?</h1>
        <button
            onClick={() => changeSlide(false)}
            className="absolute left-0 z-10 ml-4 md:ml-8 lg:ml-12 xl:ml-16 mt-10 md:mt-20 text-white hover:bg-opacity-100 rounded-full p-2 md:p-4 text-2xl md:text-4xl focus:outline-none"
          >
            &#10094;
          </button>
          <button
            onClick={() => changeSlide(true)}
            className="absolute right-0 z-10 mr-4 md:mr-8 lg:mr-12 xl:mr-16 mt-10 md:mt-20 text-white md:bg-black bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 md:p-4 text-2xl md:text-4xl focus:outline-none"
          >
            &#10095;
          </button>
        <div className="relative w-full max-w-4xl sm:max-w-6xl">
          <div
            className={`hidden lg:flex w-full h-auto sm:aspect-w-16 sm:aspect-h-9 overflow-hidden rounded-lg bg-opacity-20 bg-black backdrop-blur-lg  justify-center items-center transition-opacity duration-500 ${slideIn ? "opacity-100" : "opacity-20"}`}
            style={whiteShadowStyle}
          >
            <div className="p-6 sm:p-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-800 mb-5 sm:mb-7">
                {slides[currentSlide].title}
              </h2>
              <p className="text-white text-lg sm:text-xl">{slides[currentSlide].content}</p>
            </div>
          </div>
          <div className={`lg:hidden w-full h-auto sm:aspect-w-16 sm:aspect-h-9 overflow-hidden rounded-lg bg-opacity-20 bg-black backdrop-blur-lg flex justify-center items-center transition-opacity duration-500 ${slideIn ? "opacity-100" : "opacity-20"}`}>
            <div className="p-6 sm:p-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-800 mb-5 sm:mb-7">
                {slides[currentSlide].title}
              </h2>
              <p className="text-white text-lg sm:text-xl">{slides[currentSlide].content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
