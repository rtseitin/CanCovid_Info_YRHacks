import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" width="45"/>
      <h1 style={{marginLeft: "10px", fontSize: "30px"}}>CanCovid Info</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link className="information_link" to="/info">Information</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;