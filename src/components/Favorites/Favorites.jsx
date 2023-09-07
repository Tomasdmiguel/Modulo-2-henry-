import { connect } from "react-redux";
import Card from "../card/Card";
import { orderCards, filterCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";



const Favorites = ({myFavorites}) => {
const dispatch = useDispatch(); 
const [aux, setAux] = useState(false);
  // Funcion handleorder para ordernar de asendente o decendente 
  const handleOrder = (event)=> {
      dispatch(orderCards(event.target.value))
  }
  //Funcion para ordernar por generos 
  const filterCardss = (event) => {
    dispatch(filterCards(event.target.value))
    setAux(!aux); 
  }
    
  return (
    <div>
      {/* Ordenamos los favoritos de Ascendente y Descendente */}
      <select onChange={handleOrder} name="" id="">
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
      </select>

      {/* Ordenamos  por genero  */}
      <select onChange={filterCardss} name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
      </select>
      
      {myFavorites.map((character) => (
       
       
       <Card

       key={character.id}
       id={character.id}
       name={character.name}
       status={character.status}
       species={character.species}
       gender={character.gender}
       origin={character.origin}
       image={character.image}
     />
   ))}
     
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

export default connect(mapStateToProps, null)(Favorites);