import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__buttonTop">
        <span>Back to top</span>
      </div>
      <div className="footer__child">
        <div className="footer__col footer__col__one">
          <h5 className="footer__title">Get to Know Us</h5>
          <p className="footer__text">Careers</p>
          <p className="footer__text">Blog</p>
          <p className="footer__text">About Amazon</p>
          <p className="footer__text">Amazon Devices</p>
        </div>

        <div className="footer__col footer__col__two">
          <h5 className="footer__title">Make Money with Us</h5>
          <p className="footer__text">Sell products on Amazon</p>
          <p className="footer__text">Sell on Amazon Business</p>
          <p className="footer__text">Sell apps on Amazon</p>
          <p className="footer__text">Become an Affiliate</p>
        </div>

        <div className="footer__col footer__col__three">
          <h5 className="footer__title">Amazon Payment Products</h5>
          <p className="footer__text">Amazon Business Card</p>
          <p className="footer__text">Shop with Points</p>
          <p className="footer__text">Reload Your Balance</p>
          <p className="footer__text">Amazon Currency Converter</p>
        </div>

        <div className="footer__col footer__col__four">
          <h5 className="footer__title">Let Us Help You</h5>
          <p className="footer__text">Amazon and COVID-19</p>
          <p className="footer__text">Your Account</p>
          <p className="footer__text">Your Orders</p>
          <p className="footer__text">Returns & Replacements</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
