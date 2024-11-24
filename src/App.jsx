// src/App.jsx
import React from 'react';
import Galeria from './components/Galeria';
import ControlMusica from './components/ControlMusica';
import CartaAmor from './components/CartaAmor'; // Importa el nuevo componente
import './App.css';

function App() {
  return (
    <div className="App">
      <ControlMusica />
      <CartaAmor /> {/* Añade el componente aquí */}
      <Galeria />
    </div>
  );
}

export default App;
