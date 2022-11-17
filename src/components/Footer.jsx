import React, { Fragment } from "react";
import "../styles/components/footer.css";
import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import instagram from "../image/instagram.png";
import scan from "../image/scan.png";
import protection from "../image/protection.png";
import brandLive from "../image/brandlive.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="logo-container">
          <h1>Pufi</h1>
        </div>

        <div className="puffs-container">
          <ul>
            <li>
              <a href="/">PUFF RAIN</a>
            </li>
            <li>
              <a href="/">PUFF PUFF</a>
            </li>
            <li>
              <a href="/">PUFF CART</a>
            </li>
            <li>
              <a href="/">PUFF NAP</a>
            </li>
          </ul>
        </div>

        <div className="options-container">
          <ul>
            <li>
              <a href="/">CONTACTO</a>
            </li>
            <li>
              <a href="/">AYUDA</a>
            </li>
            <li>
              <a href="/">CÓMO COMPRAR</a>
            </li>
            <li>
              <a href="/">TÉRMINOS & CONDICIONES</a>
            </li>
          </ul>
        </div>

        <div className="compra-container">
          <h3>COMPRA 100% SEGURA</h3>
          <div className="compra-images">
            <a href="/">
              <img src={scan} alt="scan" />
            </a>
            <a href="/">
              <img src={protection} alt="protection" />
            </a>
            <p>
              COMPRÁ CON <br /> LA GARANTÍA <br /> DE PUFI
            </p>
          </div>
        </div>

        <div className="network-container">
          <h3>SEGUINOS EN </h3>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>

      <div className="copyright-container">
        <span>PUFI Copyright 2017 - Todos los derechos reservados</span>
        <a href="/">
          <img src={brandLive} alt="instagram" />
        </a>
      </div>
    </>
  );
}

export default Footer;
