import { Link } from "react-router-dom";
import '../styles/nav.css'


export const Navbar = ()=>{ 
 
  return (
    
    <nav className="nav">
      <Link to="/">Home</Link>
      <h2>Your Recipe</h2>
      <Link to="/add-recipe">Add Recipe</Link>
      
    </nav>
   
    
  );
}