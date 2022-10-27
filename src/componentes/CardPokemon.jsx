import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../my-context";

import Card from 'react-bootstrap/Card';


const CardPokemon = () => {
  const { selector } = useParams();
  const { pokemon, setPokemon } = useContext(MyContext);

  useEffect (() => {
    consultaNewPokemon()
  },[]);

  const consultaNewPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selector}`)
    const data = await response.json()
    const objetoData = [data]
    const dataFiltrada = objetoData.map(info => {
      return {
        id: info.id,
        name: info.name,
        img: info.sprites.front_default,
        height: info.height,
        weight: info.weight,
        experience: info.base_experience
      }
    })
   setPokemon(dataFiltrada)
  };
  
  return (    
    <div className="divCard">
      {pokemon.map(item =>
        <Card key={item.id} style={{ width: '20rem'}}>
          <div id="cardPoke">
          <Card.Img variant="left" src={item.img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <ul>
                <li> Experiencia:{item.experience}</li>
                <li> Altura:{item.height}</li>
                <li> Peso:{item.weight}</li>
              </ul>             
            </Card.Text>
          </Card.Body>
          </div>
        </Card>
      )}
                        
    </div>   
  )
};

export default CardPokemon;