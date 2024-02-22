import Link from "next/link";

const Program = () => {
  return (
    <div className="py-6 md:py-12 border-t-2 border-b-2">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Protest+Strike&display=swap"
        rel="stylesheet"
      />
      <div className="container mx-auto px-6 mt-20 mb-24">
        <div className="text-center mb-10 md:mb-44">
          <h2 className="text-2xl md:text-6xl font-bold">
            Programa de <b className="text-red-800">Incubación</b>
          </h2>
        </div>

        {/*Pantallas pequeñas*/}
        <div className="lg:hidden relative inset-0 flex items-center justify-center bg-black rounded px-6 py-7">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">
              ¿Cómo Funciona?
            </h3>
            <p className="mb-4 text-lg md:text-xl">
              Inscribete a nuestro proceso de selección de proyectos y convierte
              tu idea en un emprendimiento de éxito. Desde la ideación hasta la
              comercialización, te acompañamos en cada fase del viaje
              emprendedor.
            </p>
            <p className="text-xl">
              Con una duración adaptada a cada proyecto, nuestro programa te
              ofrece las herramientas y conocimientos necesarios para alcanzar
              tus metas.
            </p>
          </div>
        </div>

        {/* Visible solo en pantallas pequeñas (sin hover) */}
        <div className="lg:hidden relative inset-0 flex items-center justify-center bg-black rounded px-6 py-7">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">
              Financiamiento y Recursos
            </h3>
            <p className="mb-4 text-lg md:text-xl">
              Te ofrecemos acceso a financiamiento inicial, mentorías
              personalizadas y una red de contactos inigualable que abrirá las
              puertas al éxito de tu emprendimiento.
            </p>
            {/* Puedes añadir más texto o botones según el contenido de esta sección */}
          </div>
        </div>

        {/* Visible solo en pantallas pequeñas (sin hover) */}
        <div className="lg:hidden relative inset-0 flex items-center justify-center bg-black rounded px-6 py-7">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">
              Aplicación al Programa
            </h3>
            <p className="mb-4 text-lg md:text-xl">
              Si estás listo para dar el siguiente paso, completa nuestro
              formulario de aplicación. Los candidatos seleccionados serán
              contactados para comenzar su camino hacia la transformación y el
              éxito.
            </p>
            <Link href="#apply">
              <button className="px-6 py-2 md:text-xl bg-red-600 text-white rounded hover:bg-red-900 transition duration-300">
                Aplicar Ahora
              </button>
            </Link>
          </div>
        </div>

      {/* Pantallas grandes */}
        <div className="hidden lg:flex flex-wrap -mx-4 my-36">
          {/* Cómo Funciona */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="relative rounded shadow p-6 transform transition duration-500 cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
                <h3 className="font-comforta text-4xl font-semibold text-white opacity-100 hover:opacity-0">
                  ¿Cómo Funciona?
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-500 px-6 py-7">
                <div className="text-center text-white">
                  <p className="mb-4 text-2xl">
                    Inscribete a nuestro proceso de selección de proyectos y
                    convierte tu idea en un emprendimiento de éxito. Desde la
                    ideación hasta la comercialización, te acompañamos en cada
                    fase del viaje emprendedor.
                  </p>
                  <p className="text-2xl">
                    Con una duración adaptada a cada proyecto, nuestro programa
                    te ofrece las herramientas y conocimientos necesarios para
                    alcanzar tus metas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Financiamiento y Recursos */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 mt-28">
            <div className="relative rounded shadow p-6 transform transition duration-500 cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
                <h3 className="font-comforta text-4xl font-semibold text-white opacity-100 hover:opacity-0">
                  Financiamiento y Recursos
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-500 px-6 py-7">
                <div className="text-center text-white">
                  <p className="mb-4 text-2xl">
                    Te ofrecemos acceso a financiamiento inicial, mentorías
                    personalizadas y una red de contactos inigualable que abrirá
                    las puertas al éxito de tu emprendimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aplicación al Programa */}
        <div className="hidden lg:inline-block w-full md:w-1/2 px-4 mb-8 md:mb-0 mt-20 ml-10">
          <div className="relative rounded shadow p-6 transform transition duration-500 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
              <h3 className="font-comforta text-4xl font-semibold text-white opacity-100 hover:opacity-0">
                Aplicación al Programa
              </h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-500 px-6 py-7">
              <div className="text-center text-white">
                <p className="mb-4 text-2xl">
                  Si estás listo para dar el siguiente paso, completa nuestro
                  formulario de aplicación. Los candidatos seleccionados serán
                  contactados para comenzar su camino hacia la transformación y
                  el éxito.
                </p>
                <Link href="#apply">
                  <button className="px-6 py-2 text-xl bg-red-600 text-white rounded hover:bg-red-900 transition duration-300">
                    Aplicar Ahora
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
