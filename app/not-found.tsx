import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl font-medium text-gray-800 mb-8">Página no encontrada</p>
      <Link href="/">
        <button className="px-6 py-3 bg-red-500 text-white text-lg rounded hover:bg-red-700 transition duration-300">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
