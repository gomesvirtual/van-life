import { Link, NavLink } from "react-router-dom";
import avatarUrl from "/assets/images/avatar-icon.png"
import logOutUrl from "/assets/images/logout-icon.png"

function Header() {

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return ( 
    <header>
      <Link to="/" className='home-link'>#VANLIFE</Link>
      <nav>
        <NavLink 
          to="host" 
          className={({isActive}) => isActive ? "active-link" : "nav-link"}>
            Host
        </NavLink>
        <NavLink 
          to="about" 
          className={({isActive}) => isActive ? "active-link" : "nav-link"}>
            About
        </NavLink>
        <NavLink 
          to="vans" 
          className={({isActive}) => isActive ? "active-link" : "nav-link"}>
            Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatarUrl} className="login-icon" title="log in" />
        </Link>
        <button onClick={fakeLogOut} className="logout"><img src={logOutUrl} title="log out" /></button>
      </nav>
    </header>
   );
}

export default Header;