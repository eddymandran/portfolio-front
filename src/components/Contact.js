import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  return <div>
    <div>
  <p>Interested in collaborating ?</p>
  <p>I’m always open to discussing product design work or partnership opportunities.</p>
    </div>
    <div>
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
