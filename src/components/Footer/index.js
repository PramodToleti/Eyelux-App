import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { GrAmazon } from "react-icons/gr";
import { SiFlipkart } from "react-icons/si";

import "./index.css";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-body">
      <div className="footer-details">
        <div className="nav-icon-container-footer">
          <img
            src="https://i.pinimg.com/736x/b8/28/76/b8287644c699251c0de78393830c62a8.jpg"
            alt="nav logo"
            className="nav-icon-footer"
          />
          <p className="icon-name-footer">EyeLux</p>
        </div>
        <p className="footer-description">
          We started EyeLux because we want to make sure buying modern and
          iconic eyewear is accessible and leaves you happy with plenty of money
          in your pocket. EyeLux-Facebook EyeLux-Instagram EyeLux-Twitter
        </p>
        <p className="founder"> - Mark</p>
        <p className="company-founder"> Founder, EyeLux</p>
      </div>
      <img
        src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1671967760/Instagram_Box_Filled_L_it3lqz.png"
        alt="footer"
        className="footer-image"
      />
    </div>
    <div className="social-icons-container">
      <FaFacebook className="social-icon" />
      <BsTwitter className="social-icon" />
      <GrInstagram className="social-icon" />
      <GrAmazon className="social-icon" />
      <SiFlipkart className="social-icon" />
    </div>
  </div>
);

export default Footer;
