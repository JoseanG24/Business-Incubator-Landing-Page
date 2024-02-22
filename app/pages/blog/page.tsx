import React from "react";
import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/app/components/Carousel";

const Blog = () => {
  return (
    <div className="bg-black max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap justify-center -mx-2">
        <Link href="/">
          <button className="text-red-600 hover:underline text-lg my-3 mx-2">
            Regresar al inicio
          </button>
        </Link>
        <Link href="#faq">
          <button className="text-red-600 hover:underline text-lg my-3 mx-2">
            Preguntas Frecuentes
          </button>
        </Link>
      </div>

      <article className="space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-500 text-center">
          De idea a innovación:{" "}
          <span className="text-white font-semibold">
            Transformando Ideas en Emprendimientos Exitosos: La Misión de
            UnisHub
          </span>
        </h1>

        <div className="my-6">
          <Image
            src="/emprendedor.jpg"
            width={900}
            height={600} // Ajustado para una relación de aspecto más común
            layout="responsive" // Hace que la imagen sea responsive
            alt="Emprendedor"
          />
        </div>

        <div className="text-gray-200 text-xl">
          <article>
            <br></br>
            <p>
              En el corazón de la Universidad del Istmo, se encuentra UnisHub,
              una incubadora de empresas que no solo es un espacio físico de
              colaboración y crecimiento, sino un crisol de ideas innovadoras,
              talento estudiantil y oportunidades de financiamiento. Nuestra
              misión es clara: transformar las ideas audaces en emprendimientos
              exitosos que marcan la diferencia.
            </p>
            <br></br>
            <h2>El Viaje Comienza en UnisHub</h2>
            <p>
              Cada semestre, estudiantes emprendedores de la UNIS tienen la
              oportunidad de aplicar a UnisHub, llevando consigo no solo sus
              ideas sino también sus sueños de cambiar el mundo. UnisHub no es
              solo una incubadora; es un laboratorio de innovación donde las
              ideas se nutren con la experiencia y el conocimiento de un equipo
              dedicado de mentores y expertos de la industria.
            </p>
            <br></br>
            <h2>Conexión y Crecimiento</h2>
            <p>
              El camino del emprendimiento está lleno de desafíos, pero en
              UnisHub, los emprendedores no caminan solos. La red de contactos
              que proporcionamos abre puertas en exhibiciones y eventos,
              generando un ecosistema de mejora continua y apoyo mutuo. Más que
              un programa, UnisHub es una comunidad donde la innovación florece
              en la colaboración.
            </p>
            <br></br>
            <h2>Del Concepto al Cliente</h2>
            <p>
              La historia de cada startup es única, pero todas comparten un
              comienzo común: un concepto brillante. En UnisHub, llevamos esos
              conceptos a través de un proceso de refinamiento, desde la
              validación del mercado hasta la estrategia de marketing,
              preparando a cada emprendimiento para el crucial &quot;Demo
              Day&quot; donde las ideas se presentan ante inversores y la
              comunidad.
            </p>
            <br></br>
            <h2>Apoyo Integral</h2>
            <p>
              UnisHub ofrece más que orientación. Brindamos asesoramiento
              especializado en áreas legales y financieras, protección de
              propiedad intelectual y acceso a tecnología de punta. Nuestro
              compromiso es integral, asegurando que cada aspecto de la startup
              esté fundamentado en una base sólida para su crecimiento y éxito a
              largo plazo.
            </p>
            <br></br>
            <h2>Conclusión</h2>
            <p>
              UnisHub es más que una incubadora dentro de la UNIS; es un
              trampolín para el futuro, donde las ideas se convierten en
              acciones y los estudiantes en empresarios. Al invertir en cada
              proyecto, estamos invirtiendo en un futuro innovador y sostenible,
              demostrando que con el apoyo correcto, cualquier idea puede
              florecer y convertirse en un emprendimiento exitoso.
            </p>
            <br></br>
            <p>
              ¿Tienes una idea que crees que puede cambiar el mundo, o
              simplemente quieres saber más sobre cómo podemos ayudarte a
              convertir esa idea en realidad? Visita nuestra página de{" "}
              <a href="#">Inicio</a> para aprender más sobre UnisHub y aplica
              hoy para comenzar tu viaje emprendedor con nosotros.
            </p>
          </article>
        </div>

        <TestimonialCarousel />

        <div id="faq" className="my-12">
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="text-gray-200 text-xl">
            <div className="mb-8">
              <h3 className="font-semibold">¿Cómo puedo aplicar a UnisHub?</h3>
              <p>
                Para aplicar a UnisHub, visita nuestra página de Aplicaciones y
                completa el formulario con los detalles de tu proyecto.
                Aceptamos solicitudes una vez por semestre.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold">
                ¿Qué tipo de proyectos busca UnisHub?
              </h3>
              <p>
                Buscamos proyectos innovadores con el potencial de generar un
                impacto positivo. Valoramos la originalidad, la viabilidad y la
                pasión de los emprendedores por su idea.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold">
                ¿Hay algún costo por participar en la incubadora?
              </h3>
              <p>
                UnisHub cobra una cuota inicial para evaluar y estudiar las
                ideas. Una vez que un inversor está interesado, se negocian las
                acciones y se establece un acuerdo financiero.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold">
                ¿Qué recursos ofrece UnisHub a los emprendedores?
              </h3>
              <p>
                Ofrecemos asesoramiento legal y financiero, acceso a tecnología
                de punta, y una red de contactos que incluye a inversionistas
                ángeles, mentores y expertos de la industria.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold">
                ¿Cómo se diferencia UnisHub de otras incubadoras?
              </h3>
              <p>
                UnisHub se centra en la conexión con la Universidad del Istmo y
                en el apoyo integral en todas las etapas del desarrollo
                empresarial, desde la ideación hasta la comercialización.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center my-12">
          <Link href="https://www.youtube.com/@CanalUnisGT/videos">
            <button
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition duration-300"
            >
              Visita nuestro canal de YouTube
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Blog;
