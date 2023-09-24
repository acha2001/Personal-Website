import { Link } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard"
import Spacer from "../components/projects/Spacer"
import ClusteringProj from "../components/projects/ClusteringProj"
import GameOfLife from "../components/projects/GameOfLife/Game.js"
import NetworkGameView from "../components/projects/networkGame/NetworkGameView";

import '../css/projects.css'

const Projects = () => {
    return (
      <section className='section'>
        <div class="center">
          <Link to="/" className=" home_button_proj">Go Home</Link>
        </div>
        <div class="card_wrapper">
          <ProjectCard class="card" id= "0"/>
          <ProjectCard class="card" id= "1"/>
          <ProjectCard class="card" id= "2"/>
        </div>
        <Spacer/>
        <ClusteringProj/>
        <NetworkGameView/>
        {/*<GameOfLife id="GAME_OF_LIFE"/>*/}        
        
        
      </section>
    );
  };
  export default Projects;