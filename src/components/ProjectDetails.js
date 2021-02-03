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
  }, []);


  return <div><p> Name :{project[0].title}</p>
        <p>Description : {project[0].description}</p>
        <img src={project[0].main_picture} alt={project[0].title}/>
        <img src={project[0].secondary_picture} alt={project[0].title}/>
        <img src={project[0].third_picture} alt={project[0].title}/>
        <a href={project[0].url_github}>Lien vers le dépot github</a>
        <p>{project[0].techno_id}</p></div>;
}
