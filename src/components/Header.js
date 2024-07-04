import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube, AiOutlineMail } from 'react-icons/ai';
import NLogo from "../images/N Logo.png";

function Header() {
    return (
        <div className="navBar">
            <img src={NLogo} width={64} height={64} className="navLogo"/>
            <div className="navEle">
                <a href="https://instagram.com/cineteria" target="_blank"><AiOutlineInstagram /></a>
                {/* <a href="https://twitter.com/nathancolesjr" target="_blank"><AiOutlineTwitter/></a> */}
                <a href="https://youtube.com/@cineteria" target="_blank"><AiFillYoutube/></a>
                <a href="mailto:nathancolesjr@gmail.com" target="_blank"><AiOutlineMail/></a>
                {/* <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/portfolio">Portfolio</Link> */}
            </div>
        </div>
    )
}

export default Header
