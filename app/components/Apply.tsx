"use client"
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const ApplyNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {

      axios.post('/api/upload-data', )

      console.log("Aplicación enviada:", { name, email, project, phone });
      alert(`Aplicación enviada. ¡Gracias por tu interés en UnisHub, ${name}!`);

      setName("");
      setEmail("");
      setProject("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-white max-w-4xl mx-auto p-8 rounded-lg mb-14">
      <h2 className="text-2xl font-bold mb-6 text-left">
        ¿Estás listo/a? Aplica ahora 👇
      </h2>
      <p className="text-lg mb-8 text-left">
        Completa el formulario para aplicar a nuestra incubadora y da el primer
        paso hacia el éxito de tu emprendimiento.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Nombre Completo{" "}
            <b className="text-gray-400">(de cualquier integrante si es un proyecto grupal)</b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Correo Electrónico{" "}
            <b className="text-gray-400">(de cualquier integrante si es un proyecto grupal)</b>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-medium">
            Número de teléfono{" "}
            <b className="text-gray-400">(de cualquier integrante si es un proyecto grupal)</b>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
          />
        </div>
        <div>
          <label htmlFor="project" className="block text-lg font-medium">
            Descripción del Proyecto{" "}
            <b className="text-gray-400">(Asegurate te describir tu proyecto completo y detalladamente)</b>
          </label>
          <textarea
            id="project"
            name="project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
            className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 border border-transparent md:text-lg font-medium rounded-md shadow-sm bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 hover:scale-105 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300"
        >
          Enviar Aplicación
        </button>
      </form>
      <div className="mt-10 text-center sm:text-left">
      <p className="text-lg mb-4">
        ¿Tienes preguntas? Revisa nuestras{" "}
        <Link href="/pages/blog">
          <button className="text-red-500 hover:text-red-700 hover:underline">Preguntas Frecuentes</button>
        </Link>{" "}
        o{" "}
        <Link href="#footer">
          <button className="text-red-500 hover:text-red-700">contáctanos a través de nuestras redes</button>
        </Link>
      </p>
    </div>
    </div>
  );
  
};

export default ApplyNow;
