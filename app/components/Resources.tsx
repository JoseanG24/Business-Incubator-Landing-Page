import Link from "next/link";
import React, { useState, useEffect } from "react";

// Usa solo los IDs de los videos, no las URLs completas
const videoIds = ["H-PL1z12I2A?si=QN0lKoS8RIdURS6r", "H-PL1z12I2A?si=QN0lKoS8RIdURS6r", "H-PL1z12I2A?si=QN0lKoS8RIdURS6r"]; 

const Resources = () => {
  const [featuredVideoId, setFeaturedVideoId] = useState("");

  useEffect(() => {
    setFeaturedVideoId(videoIds[Math.floor(Math.random() * videoIds.length)]);
  }, []);

  const redShadowStyle = {
    boxShadow: '0 0px 15px 5px rgba(255, 0, 0, 0.39)',
    transition: 'opacity 0.2s',
    width: '90%', 
    height: '400px', 
    margin: '0 auto',
  };

  return (
    <div className="resources-section my-32 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl py-20 font-bold"><b className="text-red-600">Contenido</b> Destacado</h1>
      <div className="featured-content">
        {/* Contenido destacado - Video de YouTube embebido */}
        <div className="ring-red-700 ring-8 hover:ring-2 hover:ring-white ring-opacity-75 shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-110">
          <iframe
            className="w-full md:w-[800px] md:h-[435px] sm:w-[460px] sm:h-[315px] shadow-lg rounded-lg overflow-hidden transform transition duration-500"
            src={`https://www.youtube.com/embed/${featuredVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="youtube-channel-link my-14">
        {/* Botón o tarjeta para ir al canal de YouTube */}
        <Link href="https://www.youtube.com/@CanalUnisGT/videos">
          <button
            rel="noopener noreferrer"
            className="text-2xl md:text-4xl font-light font-poppins text-white hover:text-red-600 hover:underline"
          >
            Más videos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resources;
