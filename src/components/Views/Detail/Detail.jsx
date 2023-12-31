import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css"; 
const Detail = ()=> {
    const  [character, setCharacter]= useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
       <div>
         <div className={style.card} >
       
        
         <h1 >{character?.name}</h1>
         <h2>{character?.status}</h2>
         <h2>{character?.species}</h2>
         <h2>{character?.gender}</h2>
         <h2>{character?.origin?.name}</h2>
         <h2>{character?.image}</h2>

            
        
      </div>
       </div>
    );

}
export default Detail; 