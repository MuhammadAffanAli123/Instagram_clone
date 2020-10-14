import React from "react";
import {Link} from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper indigo darken-2 ">
        <Link className="app_logo" style={{  fontSize:45}} to='/profile'> 
            Instagram
         </Link>  
          <ul id="nav-mobile" className="right">
            <li>
              <Link to='login' style={{}}>Login</Link>
            </li>
            <li>
              <Link to='/signup' style={{}}>SIGN UP</Link>
            </li>
            <li>
              <Link to='/profile' style={{}}>ProFile</Link>
            </li>
            <li>
              <Link to='/createpost' style={{}}>CreatePost</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}



{/* <div className="card"  style={{maxWidth:'200px' , margin:'10px auto',marginLeft:"150px" , display:'inline-block'}}>
            <img src={person}
            style={{width:'200px' , height:'200px'}}
            />
        </div>
        <div className="card"  style={{maxWidth:'200px' , margin:'10px auto',marginLeft:"150px",display:'inline-block'}}>
            <img src={person}
            style={{width:'200px' , height:'200px'}}
            />
        </div>
        <div className="card"  style={{maxWidth:'200px' , margin:'10px auto' ,marginLeft:"150px", display:'inline-block'}}>
            <img src={person}
            style={{width:'200px' , height:'200px' , display:'inline-block'}}
            />
        </div>
        <div className="card"  style={{maxWidth:'200px' , margin:'10px auto' ,marginLeft:"150px",display:'inline-block'}}>
            <img src={person}
            style={{width:'200px' , height:'200px'}}
            />
        </div> */}