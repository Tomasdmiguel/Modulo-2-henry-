import './App.css';
//Se importa el componente cards que regenera todas las card
import Cards from './components/cards/Cards.jsx';
//import del usestate para los estados
import { useState, useEffect } from 'react';
//import de el navegador
import Nav from './components/nav/nav.jsx';
//import axios
import axios from 'axios'; 
//impórt unas partes de la paginas 
import Form  from './components/Form/Form.jsx'; 
import About from './components/Views/About/About.jsx';
import Detail from './components/Views/Detail/Detail.jsx';
import Favorites from './components/Favorites/Favorites';
//import para las rutas
import { Route, Routes} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


function App() {
   


   const [characters, Setcharacters] = useState([])
   const navigate = useNavigate();

   const [access, setAccess] = useState(false);
   const EMAIL = 'Tomasdeskate@hotmail.es';
   const PASSWORD = 'Contraseña1';
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      if (!access) {
         // Solo redirige si no hay acceso
         navigate('/');
      }
   }, [access]);
  
   //Funcionnn de busqueda por id 

   function Onsearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            Setcharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }


   
   //Funcion de cierre por id 
   function onClose (id) { 
      const parsedId = parseInt(id, 10);
      const UpdateCharacters = characters.filter((character) => character.id !==parsedId)
      Setcharacters(UpdateCharacters);
      
   }

   return (
      
      <div className='App'>

          <Nav onSearchnav={Onsearch}/>
          
         <Routes>

         <Route path='/' element={<Form login={login}/>} />
         <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}/>
         <Route path='/About' element={<About/>} />
         <Route path='/Detail/:id' element={<Detail/>} />
         <Route path='/Favorites' element={<Favorites/>} />
     
         </Routes>
      
      </div>
   );
}

export default App;
