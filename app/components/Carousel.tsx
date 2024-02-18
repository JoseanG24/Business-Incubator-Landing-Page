// Componente Carrusel de Opiniones
const TestimonialCarousel = () => {
    const testimonials = [
      {
        name: "Juanita Pérez",
        testimonial: "Participar en la incubadora de la UNIS ha sido un punto de inflexión para mi empresa. Los recursos y la mentoría que recibimos fueron fundamentales para refinar nuestra propuesta de valor y obtener nuestra primera ronda de inversión."
      },
      {
        name: "Luis González",
        testimonial: "La red de contactos que construí gracias a la incubadora ha sido invaluable. No solo conseguimos inversores, sino también valiosos asesores que han sido claves en nuestro crecimiento."
      },
      {
        name: "Ana Méndez",
        testimonial: "La experiencia en la incubadora me ha enseñado más que cualquier clase. Pude aplicar teoría en situaciones reales y eso fue esencial para el lanzamiento exitoso de nuestro producto al mercado."
      },
      // Puedes añadir más testimonios aquí
    ];
  
    return (
      <div className="testimonial-carousel py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros emprendedores</h3>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded shadow-lg">
              <p className="italic">&quot!{testimonial.testimonial}&quot;</p>
              <p className="text-right mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default TestimonialCarousel;