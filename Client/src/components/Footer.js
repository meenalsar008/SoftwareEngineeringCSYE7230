import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/ProjectLogo.png'
import insta from '../images/instagram.png'
import fb from '../images/facebook.png'
import yt from '../images/movie.png'


const Footer = () => {
  return (
    <div className="footer" id="contact">
      <img src={logo} alt="logo" />
      <h1>Northeastern Pharma</h1>
      <p>Feel free to reach out to us; subscribe to our newsletter to get the updates with Northeastern Pharm</p>
      <a  className="mailto" href="mailto:rishi@gmail.com">
      Email
    </a>
    <div className="socialicons">
      <Link>
        <img src={insta} alt="insta" />
      </Link>
      <Link>
        <img src={yt} alt="youtube" />
      </Link>
      <Link>
        <img src={fb} alt="fb" />
      </Link>
    </div>
    </div>
  );
};

export default Footer;
