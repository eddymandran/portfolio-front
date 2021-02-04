import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function ProjectDetails(props) {

  const [project, setProject] = useState([]);
  
  
  const id = props.match.params.id

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`http://localhost:5000/project/${id}`,{
        cancelToken: source.token,
      })
      .then((response) => {
        setProject(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          console.log('Error:', err.message);
        }
      })
  }, [id]);


  return <div className="projectDetails">
    {project.map((project)=>(
     <div> <p> Name :{project.title}</p>
     <p>Description : {project.description}</p>
     <p>Techno:{project.name}</p>
     <img src={project.main_picture} alt={project.title}/>
     <img src={project.secondary_picture} alt={project.title}/>
     <img src={project.third_picture} alt={project.title}/>
     <a href={project.url_github}>Lien vers le dépot github</a>
    </div>
    ))}
    </div>;
}
