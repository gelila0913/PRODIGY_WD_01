import React from "react";
import "./Header.css";
import { Search,User } from "lucide-react";
const Header =() =>{
    return(
        <>
        <body>
        <header className="header">
            <div className="container">
            <div className="logo">
                <h2>JOYVIEW</h2>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="">MyList</a></li>
                </ul>
            </nav>
           </div>
           <div className="search">
            <ul>
            <li><Search className="icon1" size={18}/>             
            <input type="text" placeholder="    search" /> </li>
            <li>Kids</li>

            <li> <User className="icon" size={20} /> </li>
            </ul>

           </div>
        </header>
        </body>
        </>
    )
}

export default Header;