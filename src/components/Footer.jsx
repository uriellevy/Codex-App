import React from "react";
import "./Footer.scss";
import { SiPokemon } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p className="copyright">copyright &copy; 2021, All rights reserved</p>
        <p className="copyright">Made by Uriel Levy</p>
      </div>
      <div className="media">
        <ul>
          <li>
            <SiPokemon size="90px" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
