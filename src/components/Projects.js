import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Project.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/projects", {
        cancelToken: source.token,
      })
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          console.log("Error:", err.message);
        }
      });
  }, []);

  return (
    <div>
      <h1>My projects</h1>
      <p>You can see here all my projects</p>
      <div>
        {projects.map((project) => {
          return (
            <div key={project.id} className="Project_Row">
              <p> Name :{project.title}</p>
              <p>Description : {project.description}</p>
              <p>
                <img src={project.main_picture} alt={project.title} />
              </p>
              <a href={project.url_github}>Link to the github repo</a>
              <p>Technology used : {project.techno_name}</p>
              <Link to={`/project/${project.id}`}>
                <button type="button">more details</button>
              </Link>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
