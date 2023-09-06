
import { addFav, removeFav } from "../../redux/actions/actions";
import style from "./card.module.css"; 
import { Link, useLocation } from "react-router-dom";
import { connect } from 'react-redux';

import React, { useState, useEffect } from "react";

function Card(props) {
   const { myFavorites } = props; 
   const { pathname } = useLocation();
   const  [isFav, setIsFav] = useState(false); 
   const handleFavorite = () => {
      isFav ? props.removeFav(props.id) : props.addFav(props);
      setIsFav(!isFav)
    };

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
             setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card} >
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         { pathname !== "/Favorites" && (
         <button className={style.boton} onClick={ () => props.onClose(props.id) }>X</button>
             )}

            <Link to={`/Detail/${props.id}`}>
         <h2>{props.name}</h2>
            </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} alt='' />
         
      </div>
      
   );

}




const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (characters) => {
       dispatch(addFav(characters));
     },
     removeFav: (id) => {
       dispatch(removeFav(id));
     }
   };
 }

 const mapStateToProps= (state) => {
   return {
      myFavorites: state.myFavorites
   }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Card);
