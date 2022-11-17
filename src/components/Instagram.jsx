import React from "react";

import "../styles/components/instagram.css";

import nap from "../image/nap.jpg";
import shopping from "../image/shopping-bags.jpg";
import puff from "../image/puff.jpg";
import umbrellasMan from "../image/umbrellasMan.jpg";

function Instagram() {
  return (
    <div className="instagram-cotainer">
      <h3>INSTAGRAM</h3>
      <h2>#ESPUFI</h2>

      <section className="collage">
        <img src={umbrellasMan} alt="umbrellaMan" />
        <img src={puff} alt="puff" />
        <img src={shopping} alt="shopping" />
        <img src={nap} alt="nap" />
        <img src={umbrellasMan} alt="umbrellaMan" />
        <img src={puff} alt="puff" />
      </section>
    </div>
  );
}

export default Instagram;
