import React from "react";
import "./navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

const Navbar = () => {
    return(
    <>
    <nav className="main-nav">
    <div className="logo">
        <h2><span>S</span>hahroz
        <span>R</span>aza
        </h2>
    </div>
    <div className="menu-link">
        <ul>
            <li>
                <a href= "#">Home</a>
            </li>
            <li>
                <a href= "#">about</a>
            </li>
            <li>
                <a href= "#">services</a>
            </li>
            <li>
                <a href= "#">Contact</a>
            </li>
        </ul>
    </div>
    { /* Social media Links */}
    <div className="social-media">
        <ul className="social-media-desktop">
        <li><a href="https://www.youtube.com/watch?v=OACRcGXVPDc" target="_pk"><FaFacebookSquare className="facebook" /></a></li>
        <li><a href="https://www.youtube.com/watch?v=OACRcGXVPDc" target="_pk"><FaInstagramSquare className="instagram" /></a></li>
        <li><a href="https://www.youtube.com/watch?v=OACRcGXVPDc" target="_pk"><FaYoutubeSquare className="youtube" /></a></li>

        </ul>
    </div>

    </nav>
    { /* Hero Sectiom */}
    <section className="hero-section">
        <p>Welcome To </p>
        <h1>First Project in React js</h1>
    </section>
    </>
    );
};
export default Navbar;