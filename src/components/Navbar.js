// import { useContext } from "react";
// import { UserContext } from "./Contextapi";
import {Link} from 'react-router-dom'
 const Navbar=()=> {
    // const { setIsUserss } = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="title">
        <h2>React NavBar</h2>
      </div>
      <div className="menubar">
        <Link className='navlink' to="/">Home</Link>
       
        <Link className='navlink' to="./products">Products</Link>
        <Link className='navlink' to="./NavBar.js">Cart
        <div className='count-section'>1</div>
        </Link>
        {/* <button  onClick={() => {
            setIsUserss(false);
          }}>
          Logout
        </button> */}
        {/* <div><p>jj</p></div> */}
      </div>
    </div>
  );
}

export default Navbar;