import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../styles/Admin.css";

export default function Admin() {
  const { register, handleSubmit } = useForm();

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/projects", {
        cancelToken: source.token,
      })
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.log("Error:", err.message);
        }
      });
  }, [isLoading]);

  const onSubmit = (data, e) => {
    console.log(data);
    const source = axios.CancelToken.source();
    axios
      .post("http://localhost:5000/admin/projects", data, {
        cancelToken: source.token,
      })
      .then(setIsLoading(true))
      .then(e.target.reset())
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.log("Error:", err.message);
        }
      });
  };
  
  const onDelete = (id) => {
    const source = axios.CancelToken.source();
    axios
      .delete(`http://localhost:5000/project/${id}`, {
        cancelToken: source.token,
      })
      .then(setIsLoading(true))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.log("Error:", err.message);
        }
      });
  };

  return (
    <div className="administration">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="title" ref={register} placeholder="title" required/>
          <input name="description" ref={register} placeholder="description" required />
          <input
            name="main_picture"
            ref={register}
            placeholder="main picture"
          />
          <input
            name="secondary_picture"
            ref={register}
            placeholder="secondary picture"
          />
          <input
            name="third_picture"
            ref={register}
            placeholder="third picture"
          />
          <input name="url_github" ref={register} placeholder="github" required />
          <input name="techno_id" ref={register} placeholder="techno" required />
          <input type="submit" />
        </form>
      </div>
      <div>
        {projects.map((project) => (
          <div>
            <p key={project.id}>{project.title}</p>
            <button type="button" onClick={() => onDelete(project.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
