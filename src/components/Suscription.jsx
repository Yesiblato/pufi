import React from "react";
import arrow from "../image/right-arrow.png";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/components/suscription.css";

function Subscription() {
  const [state, handleSubmit] = useForm("xlevzwop");
  if (state.succeeded) {
    return <p>¡Gracias por suscribirte a Pufi!</p>;
  }
  return (
    <div className="form-container">
      <form
        action="https://formspree.io/f/xlevzwop"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="input-container">
          <input
            id="email"
            type="email"
            className="inpt-newsletter"
            placeholder="Ingresa tu email"
            name="email"
            required
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button
            className="btn-newsletter"
            type="submit"
            disabled={state.submitting}
          >
            <img src={arrow} alt="flecha"></img>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subscription;
