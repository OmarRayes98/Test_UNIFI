import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/last_logo_navbar.svg";

import "./Navbar.css";

const Navbar = () => {



 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
       <img src={Logo}  />
       </NavLink>

       <div
         className={`nav__menu`}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link" >
               Search Bikes
             </NavLink>
           </li>
          
         </ul>
        
       </div>
     </nav>
   </header>

 );
};

export default Navbar;