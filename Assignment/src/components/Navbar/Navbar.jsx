import {Link} from 'react-router-dom'
import  './Navbar.module.css'
const  Navbar= ()=>{
   console.log("Inside the Navbar");
    return <div className="container">
         <div>
            <h1>LOGO</h1>
         </div>
         <div className="minicontainer">
            <Link>About</Link>
            <Link>Portfolio</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <button className="button">Sign up</button>
         </div>
    </div>
}

export default Navbar;