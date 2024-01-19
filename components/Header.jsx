import { Link, NavLink } from "react-router-dom";

function Header() {
  return ( 
    <header>
      <Link to="/" className='home-link'>#VANLIFE</Link>
      <nav>
        <NavLink to="/host" 
          className={({isActive}) => isActive ? "active-link" : "nav-link"}>
            Host
        </NavLink>
        <NavLink to="/about" 
          className={({isActive}) => isActive ? "active-link" : "nav-link"}>
            About
        </NavLink>
        <NavLink to="/vans" 
          className={({isActive}) => isActive ? "active-link" : "nav-link"}>
            Vans
        </NavLink>
      </nav>
    </header>
   );
}

export default Header;