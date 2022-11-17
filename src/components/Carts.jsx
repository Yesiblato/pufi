import React from "react";
import "../styles/components/cart.css";
import umbrellasMan from "../image/umbrellasMan.jpg";
import umbrellaCard from "../image/umbrellaCard.jpg";
import puff from "../image/puff.jpg";
import puffBag from "../image/puffBag.jpg";
import shopping from "../image/shopping-bags.jpg";
import cartBagShopping from "../image/cartBagSpopping.jpeg";
import nap from "../image/nap.jpg";
import napTravel from "../image/napTravel.jpg";

function Carts() {
  return (
    <div className="carts-container">
      <div className="btn-container">
        <button className="button-2">SHOP</button>
        <img className="photo-1" src={umbrellasMan} alt="umbrellas" />
      </div>
      <div className="mini-card">
        <img className="mini-photos" src={umbrellaCard} alt="/" />
        <h2>Pufi RAIN</h2>
        <h3>_____</h3>
        <h3>
          Descripción del producto. Este es <br />
          un texto simulado
        </h3>
        <div className="verMas-container">
          <span class="material-symbols-outlined">chevron_right</span>
          <a href="/"> VER MAS</a>
        </div>
      </div>

      <div className="mini-card">
        <img className="mini-photos" src={puffBag} alt="/" />
        <h2>Pufi PUFF</h2>
        <h3>_____</h3>
        <h3>
          Descripción del producto. Este es <br />
          un texto simulado
        </h3>
        <div className="verMas-container">
          <span class="material-symbols-outlined">chevron_right</span>
          <a href="/"> VER MAS</a>
        </div>
      </div>
      <img className="photos" src={puff} alt="umbrellas" />

      <img className="photos" src={shopping} alt="umbrellas" />
      <div className="mini-card">
        <img className="mini-photos" src={cartBagShopping} alt="/" />
        <h2>Pufi CART</h2>
        <h3>_____</h3>
        <h3>
          Descripción del producto. Este es <br />
          un texto simulado
        </h3>
        <div className="verMas-container">
          <span class="material-symbols-outlined">chevron_right</span>
          <a href="/"> VER MAS</a>
        </div>
      </div>

      <div className="mini-card">
        <img className="mini-photos" src={napTravel} alt="/" />
        <h2>Pufi NAP</h2>
        <h3>_____</h3>
        <h3>
          Descripción del producto. Este es <br />
          un texto simulado
        </h3>
        <div className="verMas-container">
          <span class="material-symbols-outlined">chevron_right</span>
          <a href="/"> MAS INFO</a>
        </div>
      </div>
      <img className="photos" src={nap} alt="umbrellas" />
    </div>
  );
}

export default Carts;
