import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../styles/ProjectDetails.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GitHub } from 'react-feather';

export default function ProjectDetails(props) {

  const [project, setProject] = useState([]);
  
  
  const data = props.match.params

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`http://localhost:5000/project/${data.id}`,{
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
  }, [data.id]);


  return <div className="projectDetails">
    {project.map((project)=>(
    <div key={project.id}> <p><strong>Name : </strong>{project.title}</p>
    <Carousel>
        <div>
        <img src={project.main_picture} alt={project.title}/>
        </div>
        <div>
        <img src={project.secondary_picture} alt={project.title}/>
        </div>
        <div>
        <img src={project.third_picture} alt={project.title}/>
        </div>
    </Carousel>
    <p><em>{project.description}</em></p>
    <p><strong>Technology used : </strong>{project.name}</p>
    
    <a href={project.url_github}> <GitHub/> Repo github</a>
    </div>
    ))}
    </div>;
}
