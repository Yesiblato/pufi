import React from "react";
import "../styles/components/newsLettrer.css";
import Subscription from "./Suscription";

function NewsLetter() {
  return (
    <div className="news-cotainer">
      <h3>NEWSLETTER</h3>
      <h2>SUSCRIBITE</h2>
      <h4>Y enterate de todas las novedades</h4>
      <Subscription />
    </div>
  );
}

export default NewsLetter;
