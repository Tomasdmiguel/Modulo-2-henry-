import style from "./search.module.css"
import  react, { useState } from "react";


//IMPORTS ARRIBA ||




export default function SearchBar(props) {

   //Estado creado
   
   
const [id, setid] = useState('');

//Funcion

const handleChange= (event) => {
 setid(event.target.value); 

}

   return (
      <div className={style.search} >
         <input value={id} onChange={handleChange} className={style.searchInput} type='search' />
        
         <button className={style.searchBoton}
          onClick={()=> props.onSearch (id)}>Agregar</button>
      
      </div>
   );
}
