import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../my-context";

const Pokemones = ({getPokemon}) => {
  const { pokemon, setPokemon } = useContext(MyContext);
  const [selector, setSelector] = useState("")


  useEffect (() => {
    consultaPokemones()
  },)

    
  const consultaPokemones = async () =>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    let {results} = await response.json()
    const getPokemon = results.map(elem => {
      return {
      id: elem.name,
      src: elem.url
      }
    })
    setPokemon(getPokemon)      
  };
  
  const navegacion = useNavigate();
  const irInfoPokemon = () => {
    selector ? navegacion(`/pokemones/${selector}`)
              : alert("Sigue buscando otro pokemon")
  };


  return (
    <div className="divPokemones">
      <h4>Selecciona un Pokemon</h4>
      <div className="divSelect">
          <select onChange={({ target }) => setSelector(target.value)}>
            {
            pokemon
            .map(poke =>
              <option
                value={poke.id}
                key={poke.id}                
                >{poke.id}</option>
            )}
          </select>        
          <button onClick={irInfoPokemon}>Ver detalle</button>
        
      </div>
    </div>
  )
};

export default Pokemones;