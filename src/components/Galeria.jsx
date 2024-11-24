// src/components/Galeria.jsx
import React from 'react';
import './Galeria.css';

// Importa las imágenes
import foto1 from '../assets/images/teamomiamor1.jpg';
import foto2 from '../assets/images/teamomiamor2.jpg';
import foto3 from '../assets/images/teamomiamor3.jpg';
import foto4 from '../assets/images/teamomiamor4.jpg';
import foto5 from '../assets/images/teamomiamor5.jpg';
import foto6 from '../assets/images/teamomiamor6.jpg';
import foto7 from '../assets/images/teamomiamor7.jpg';
import foto8 from '../assets/images/teamomiamor8.jpg';
import foto9 from '../assets/images/teamomiamor9.jpeg';
import foto10 from '../assets/images/teamomiamor10.jpg';

const Galeria = () => {
  // Arreglo de objetos con las imágenes y las frases
  const imagenes = [
    {
      src: foto1,
      alt: 'Foto 1',
      frase: "“Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección.” – Antoine de Saint-Exupéry",
    },
    {
      src: foto2,
      alt: 'Foto 2',
      frase: "“El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso.” – 1 Corintios 13:4",
    },
    {
      src: foto3,
      alt: 'Foto 3',
      frase: "“Te amo más de lo que he amado a cualquier otra persona en este mundo.” – Desconocido",
    },
    {
      src: foto4,
      alt: 'Foto 4',
      frase: "“Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.” – Colosenses 3:14",
    },
    {
      src: foto5,
      alt: 'Foto 5',
      frase: "“El amor verdadero no tiene final feliz, porque el amor verdadero nunca termina.” – Desconocido",
    },
    {
      src: foto6,
      alt: 'Foto 6',
      frase: "“Te he amado desde el momento en que te vi, y te seguiré amando cada día más.” – Desconocido",
    },
    {
      src: foto7,
      alt: 'Foto 7',
      frase: "“El amor es la fuerza más humilde, pero la más poderosa de que dispone el mundo.” – Mahatma Gandhi",
    },
    {
      src: foto8,
      alt: 'Foto 8',
      frase: "“Sobre todo, ámense los unos a los otros profundamente, porque el amor cubre multitud de pecados” 1 Pedro 4:8",
    },
    {
      src: foto9,
      alt: 'Foto 9',
      frase: "“Contigo, cada momento es especial y cada día es una bendición.” – Desconocido",
    },
    {
      src: foto10,
      alt: 'Foto 10',
      frase: "“Te amo sin saber cómo, ni cuándo, ni de dónde. Te amo directamente sin problemas ni orgullo.” - Neruda",
    },
  ];

  return (
    <div className="galeria">
      {imagenes.map((imagen, index) => (
        <div key={index} className="imagen-con-frase">
          <img src={imagen.src} alt={imagen.alt} />
          <p className="frase">{imagen.frase}</p>
        </div>
      ))}

      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJtOG41YnlkcXJ1dGNpem1odnd3bWZtaG84ZWp5YzVwazc2ajQxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GcJN2Dz5XMDeM/giphy.gif" alt="" srcset="" />
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFrNDJ3NDN4NjVpMzN3MWFkbGd3NzJzMDV0Z2pvcHdvbnQzcm01dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K0yXL4cDnFrq0/giphy.gif" alt="" srcset="" />
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWt3cTdqOXdrNG4zc3VvYTZodnM4YzR5NWN4MWRhYzVjdDZoYzFybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kvKFM3UWg2P04/giphy.gif" alt="" srcset="" />
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3MwamJnZHdkMTR6MXFoOXR2c3Zxa3RyazY4NTNydXdmMXZtNTBoYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wsySkjPDNC6vC/giphy.gif" alt="" srcset="" />
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2Y2bGw1azE1OTZhdzNobjU5b3lqOWE1YmY2eWJqaDM3bmwyZm40bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cHkrXQvSSY5La/giphy.gif" alt="" srcset="" />

      <q>Te veo en todo lo que exprese amor, sobre todo en cada animación de Studio Ghibli 🩷</q>
    </div>
  );
};

export default Galeria;
