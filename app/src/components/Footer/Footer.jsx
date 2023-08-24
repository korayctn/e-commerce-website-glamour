import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <h3 className="footerSectionHeader">Our Company</h3>
          <div className="arrow"></div>
          <span className="footerSectionLink">Delivery</span>
          <span className="footerSectionLink">Legal Notice</span>
          <span className="footerSectionLink">Terms and Conditions</span>
          <span className="footerSectionLink">About Us</span>
          <span className="footerSectionLink">Secure Payment</span>
        </div>
        <div className="footerSection">
          <h3 className="footerSectionHeader">Services</h3>{" "}
          <div className="arrow"></div>
          <span className="footerSectionLink">Prices</span>
          <span className="footerSectionLink">Products</span>
          <span className="footerSectionLink">Hot Sales</span>
          <span className="footerSectionLink">Contact Us</span>
          <span className="footerSectionLink">Sitemap</span>
        </div>
        <div className="footerSection">
          <h3 className="footerSectionHeader">Contact</h3>{" "}
          <div className="arrow"></div>
          <span className="footerSectionLink">
            {" "}
            73938 Phillips Mountain West Richard, FM 38654-5271
          </span>
          <span className="footerSectionLink"> ucole@gmail.com</span>
          <span className="footerSectionLink"> 101-024-1493</span>
        </div>
        <div className="footerSection">
          <h3 className="footerSectionHeader">FUTURE</h3>{" "}
          <div className="arrow"></div>
          <span className="footerSectionLink">Career</span>
          <span className="footerSectionLink">Alumni</span>
          <span className="footerSectionLink">Green Life</span>
          <span className="footerSectionLink">About Us</span>
          <span className="footerSectionLink">Secure Payment</span>
        </div>
      </div>
    </div>
  );
};
