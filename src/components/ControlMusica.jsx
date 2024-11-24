// src/components/ControlMusica.jsx
import React, { useState, useRef } from 'react';
import musica1 from '../assets/music/laboda.mp3';
import musica2 from '../assets/music/cancion2.mp3';
import musica3 from '../assets/music/cancion3.mp3';
// Importa más canciones según sea necesario

const ControlMusica = () => {
  // Lista de canciones disponibles
  const canciones = [
    { id: 1, nombre: 'La Boda', archivo: musica1 },
    { id: 2, nombre: 'Quererte bonito', archivo: musica2 },
    { id: 3, nombre: 'Diseñame', archivo: musica3 },
    // Añade más canciones aquí
  ];

  const [cancionActual, setCancionActual] = useState(canciones[0].archivo);
  const [nombreCancion, setNombreCancion] = useState(canciones[0].nombre);
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(new Audio(cancionActual));

  // Función para manejar la selección de una nueva canción
  const seleccionarCancion = (cancion) => {
    // Pausar la canción actual si está reproduciéndose
    if (reproduciendo) {
      audioRef.current.pause();
    }

    // Actualizar la canción actual
    setCancionActual(cancion.archivo);
    setNombreCancion(cancion.nombre);

    // Crear un nuevo objeto Audio para la nueva canción
    audioRef.current = new Audio(cancion.archivo);

    // Si se estaba reproduciendo, iniciar la nueva canción
    if (reproduciendo) {
      audioRef.current.play();
    }
  };

  // Función para reproducir o pausar la música
  const toggleMusica = () => {
    if (reproduciendo) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setReproduciendo(!reproduciendo);
  };

  // Limpieza del objeto Audio al desmontar el componente
  React.useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div>
        <label style={{color:'black'}} htmlFor="seleccionar-cancion">Selecciona una canción: </label>
        <select
          id="seleccionar-cancion"
          value={nombreCancion}
          onChange={(e) => {
            const cancion = canciones.find((c) => c.nombre === e.target.value);
            seleccionarCancion(cancion);
          }}
        >
          {canciones.map((cancion) => (
            <option key={cancion.id} value={cancion.nombre}>
              {cancion.nombre}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={toggleMusica}
      >
        {reproduciendo ? '⏸️ Pausar Música' : '▶️ Reproducir Música 💖'}
      </button>
      <div style={{ marginTop: '10px', fontStyle: 'italic' }}>
        {reproduciendo && <p>Reproduciendo: {nombreCancion}</p>}
      </div>
    </div>
  );
};

export default ControlMusica;
