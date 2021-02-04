import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Contact.css"

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  return <div className="contact">
    <div>
  <h2>Interested in collaborating ?</h2>
  <p>I am always open to discussion regarding code improvement or partnership opportunities.</p>
    </div>
    <div className="contactForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="Firstname" ref={register} placeholder="Firstname" required/>
          <input name="Lastname" ref={register} placeholder="Lastname" />
          <input name="email" ref={register} type="email" placeholder="email" required />
          <textarea id="message" name="message" ref={register} placeholder="message"></textarea>
          <input type="submit" />
        </form>
      </div>
  </div>;
}
