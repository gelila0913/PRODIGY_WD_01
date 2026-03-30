import React from "react";
import {Facebook,Instagram,Twitter} from "lucide-react";
import "./Footer.css";

const Footer= ()=>{
    return(
        <>
        <footer>
            <div className="Mcontainer">
                <div className="icons">
            <Facebook className="icon" size={20}/>
            <Instagram className="icon" size={20}/>
            <Twitter className="icon" size={20}/>
            </div>
            <div className="list">
                <ul>
                    <li>Audio Description</li>
                    <li>Help Center</li>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                </ul>
                <ul>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                    <li>Legal Notices</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li>JOYVIEW Store</li>
                    <li>Jobs</li>
                    <li>Cookie Policy</li>
                    <li>Speed Test</li>
                    <li>CSR</li>
                </ul>
               </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;