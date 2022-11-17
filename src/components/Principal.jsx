import React from "react";
import logo from "../image/photoprincipal.jpg";
import beanBag from "../image/bean-bag.png";
import bag from "../image/bag.png";
import umbrella from "../image/umbrella.png";
import sleepingBag from "../image/sleeping-bag.png";
import "../styles/components/principal.css";

function principal() {
  return (
    <div className="principal-container">
      <img className="principalLogo" src={logo} alt="principal" />
      <nav>
        <h1>Pufi</h1>
        <div className="nav-options">
          <img className="imagesList" src={beanBag} alt="bean-bag" />
          <img className="imagesList" src={umbrella} alt="" />
          <img className="imagesList" src={bag} alt="bag" />
          <img className="imagesList" src={sleepingBag} alt="" />
          <a href="/">PUFI PUFF</a>
          <a href="/">PUFI RAIN</a>
          <a href="/">PUFI VART</a>
          <a href="/">PUFI NAP</a>
        </div>
        <div className="options">
          <div className="account-container">
            <h4>MI CUENTA</h4>
            <a href="/">
              <span className="material-symbols-outlined">expand_more</span>{" "}
            </a>
          </div>
          <a href="/"> MI COMPRA </a>
        </div>
      </nav>

      <div className="label-container">
        <h2>ESTÁR CÓMODO, </h2>
        <h2>NUNCA FUE TAN FACIL.</h2>
        <button> SHOP </button>
      </div>
    </div>
  );
}

export default principal;
