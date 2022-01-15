import React from "react";
import "./footer.css";
import spdLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="spd__footer section__padding">
      <div className="spd__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>

      <div className="spd__footer-btn">
        <p>Get Started</p>
      </div>

      <div className="spd__footer-links">
        <div className="spd__footer-links_logo">
          <img src={spdLogo} alt="spd_logo" />
          <p>
            Tuhinshubhra Atta, <br /> All Rights Reserved
          </p>
        </div>
        <div className="spd__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="spd__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="spd__footer-links_div">
          <h4>Get in touch</h4>
          <p>Tuhinshubhra Atta</p>
          <p>+91-8250561945</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="spd__footer-copyright">
        <p>@2022 Speedbar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
