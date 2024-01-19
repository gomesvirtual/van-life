import { Link } from "react-router-dom";

function Header() {
  return ( 
    <header>
      <Link to="/" className='home-link'>#VANLIFE</Link>
      <nav>
        <Link to="/host" className='nav-link'>Host</Link>
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/vans" className='nav-link'>Vans</Link>
      </nav>
    </header>
   );
}

export default Header;