import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../styles/Admin.css"

export default function Admin() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const source = axios.CancelToken.source();
    axios
      .post("http://localhost:5000/admin/projects", data, {
        cancelToken: source.token,
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          console.log('Error:', err.message);
        }
      })
  };

  return (
    <div className="administration">


      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" ref={register} placeholder="title" />
        <input name="description" ref={register} placeholder="description" />
        <input name="main_picture" ref={register} placeholder="main picture" />
        <input name="secondary_picture" ref={register} placeholder="secondary picture" />
        <input name="third_picture" ref={register} placeholder="third picture" />
        <input name="url_github" ref={register} placeholder="github" />
        <input name="techno_id" ref={register} placeholder="techno" />
        <input type="submit" />
      </form>
    </div>
  );
}
