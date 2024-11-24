// src/App.jsx
import React from 'react';
import Galeria from './components/Galeria';


function App() {
  return (
    <>
      <audio src="src\assets\music\laboda.mp3" autoPlay loop />
      <Galeria />
    </>
  );
}

export default App;
