import React, { useEffect, useState } from 'react';
import axios from "axios";


export default function Projects() {


  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
        console.log(response.data)
      })
      .catch(console.error);
  }, []);



  return <div>
    <h1>My projects</h1>
     {projects.map((project)=> {
      return (
      <div key={project.id} className="Project_Row">
        <p>{project.title}</p>
        <p>{project.description}</p>
        <img src={project.main_picture} alt={project.title}/>
        <p>{project.url_github}</p>
        <p>{project.techno_id}</p>
      </div>)
    })} 
    </div>;
}
