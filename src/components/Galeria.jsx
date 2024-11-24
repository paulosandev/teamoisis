// src/components/Galeria.jsx
import React from 'react';
import './Galeria.css';

// Importa las imágenes
import foto1 from '../assets/images/teamomiamor1.jpg';
import foto2 from '../assets/images/teamomiamor2.jpg';
import foto3 from '../assets/images/teamomiamor3.jpg';

const Galeria = () => {
  return (
    <div className="galeria">
      <img src={foto1} alt="Foto 1" />
      <img src={foto2} alt="Foto 2" />
      <img src={foto3} alt="Foto 3" />
      {/* Añade más imágenes según sea necesario */}
    </div>
  );
};

export default Galeria;
