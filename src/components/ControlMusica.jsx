// src/components/ControlMusica.jsx
import React, { useState, useRef } from 'react';

const ControlMusica = () => {
  const audioRef = useRef(new Audio('/src/assets/music/musica.mp3'));
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
