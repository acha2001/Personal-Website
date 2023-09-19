import { Link } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard"

import '../css/projects.css'

const Projects = () => {
    return (
      <section className='section'>
        <div class="card_wrapper">
          <ProjectCard class="card" id= "0"/>
          <ProjectCard class="card" id= "1"/>
          <ProjectCard class="card" id= "2"/>
        </div>

        <Link to="/" className="btn">Home</Link>
      </section>
    );
  };
  export default Projects;