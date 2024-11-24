// src/App.jsx
import React from 'react';
import Galeria from './components/Galeria';
import ControlMusica from './components/ControlMusica';
// Importa estilos globales si los tienes
import './App.css';

function App() {
  return (
    <div className="App">
      <ControlMusica />
      <Galeria />
    </div>
  );
}

export default App;
