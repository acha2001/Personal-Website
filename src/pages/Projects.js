import { Link } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard"
import Spacer from "../components/projects/Spacer"
import ClusteringProj from "../components/projects/ClusteringProj"
import GameOfLife from "../components/projects/GameOfLife/Game.js"

import '../css/projects.css'

const Projects = () => {
    return (
      <section className='section'>
        <div class="card_wrapper">
          <ProjectCard class="card" id= "0"/>
          <ProjectCard class="card" id= "1"/>
          <ProjectCard class="card" id= "2"/>
        </div>
        <div class="center">
          <Link to="/" className="home-button btn">Go Home</Link>
        </div>
        <Spacer/>
        <ClusteringProj/>
        <GameOfLife id="GAME_OF_LIFE"/>        
        
        
      </section>
    );
  };
  export default Projects;