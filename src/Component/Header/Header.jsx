import React from "react";
import "./Header.css";
import { search,user } from "lucide-react";
const Header =() =>{
    return(
        <>
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
                    <label htmlFor="">MyList</label>
                </ul>
            </nav>
           </div>
           <div className="search">
            <ul>
            <li><search className="icon" size={20}/>             
            <input type="text" placeholder="search" /> </li>
            <li>Kids</li>

            <li> <user className="icon" size={20} /> </li>
            </ul>

           </div>
        </header>

        </>
    )
}