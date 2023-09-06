import SearchBar from "../searchbar/SearchBar";
import style from "./nav.module.css"
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";
const Nav = (props) => {
  const location = useLocation();
  
    return (
<div className={location.pathname === '/' ? style.hidden : style.visible}>
      <div className={style.nav}>
        
          <Link to={`/about`}>
              <button className={style.about}>About</button>
          </Link>
          <SearchBar onSearch={props.onSearchnav}  />

        <Link to={`/home`}>
            <button className={style.home}>Home</button>
        </Link>
        <Link to={`/Favorites`}>
            <button className={style.home}>Favoritos</button>
        </Link>

       
      </div>
</div>     
    );
  }
  
  export default Nav;