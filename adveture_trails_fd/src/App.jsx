import React from 'react';
import './App.css';
import CardTrilha from './Components/CardTrilha';

function App() {
  return (
    <div className="App">
      <CardTrilha
        nomeTrilha="Trilha da Costa da lagoa"
        cidadeEstado="Florianópolis, SC"
        duracao="3 horas"
        trajeto="4 Km"
        dificuldade="Iniciante"
        tipoTrilha="Seletiva"
        nomeCriador="Junior Pinho"
        imagemURL="https://images.pexels.com/photos/2132087/pexels-photo-2132087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
}

export default App;
