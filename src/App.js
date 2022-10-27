import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MyContext from "./my-context"

// Importar Vistas
import Home from "./vistas/Home";
import Pokemones from "./vistas/Pokemones";
import InfoPokemon from "./vistas/InfoPokemon";

// Importar Componentes
import Navbar from "./componentes/NavBar";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const estadoGlobal = {pokemon, setPokemon}

  return (
    <div className="App">
      <MyContext.Provider value={estadoGlobal}>
        < BrowserRouter >
          < Navbar />
            < Routes>
              < Route path="/" element={< Home />} />
              < Route path="/pokemones" element={< Pokemones />} />
              < Route path="/pokemones/:selector" element={< InfoPokemon />} />
            </ Routes >    
        </ BrowserRouter >
      </MyContext.Provider>      
    </div>
  );
}

export default App;
