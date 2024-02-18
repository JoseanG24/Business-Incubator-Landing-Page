import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">UnisHub Aceleradora de emprendimientos</h3>
            <p className="text-sm">Universidad del Istmo (UNIS)</p>
            <p className="text-sm"> km. 19.2, Carr. a Fraijanes, Guatemala</p>
            <p className="text-sm">Tel: +502 1234 5678</p>
          </div>
          <Image src="/UnisHub_logo-removebg-preview.png" width={200} height={200} alt='unishub'/>
          <div className="flex justify-center mb-6 md:mb-0 text-3xl">
            <a href="https://www.facebook.com/UnisHub" className="mr-4 hover:text-blue-500"><FaFacebook /></a>
            <a href="https://www.youtube.com/UnisHub" className="mr-4 hover:text-red-600"><FaYoutube /></a>
            <a href="https://www.instagram.com/UnisHub" className="hover:text-purple-400"><FaInstagram /></a>
          </div>
          <div>
            <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Contáctanos</a>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          © {new Date().getFullYear()} UnisHub. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
