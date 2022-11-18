import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    // <div>
    //     <Link to='/' style={{marginRight: "5px"}}>Home</Link>
    //     <Link to='/about' style={{marginRight: "5px"}}>About</Link>
    //     <Link to='/login' style={{marginRight: "5px"}}>Login</Link>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to='/'>
              Home
            </NavLink>
            
            <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to='/about'>
              About
            </NavLink>

            <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} to='/login'>
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
