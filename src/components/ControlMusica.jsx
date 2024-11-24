// src/components/ControlMusica.jsx
import React, { useState, useRef } from 'react';
import musica from '../assets/music/laboda.mp3';

const ControlMusica = () => {
  const audioRef = useRef(new Audio(musica));
  const [reproduciendo, setReproduciendo] = useState(false);

  const toggleMusica = () => {
    if (reproduciendo) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setReproduciendo(!reproduciendo);
  };

  return (
    <button onClick={toggleMusica}>
      {reproduciendo ? 'Pausar Música' : 'Reproducir Música'}
    </button>
  );
};

export default ControlMusica;
