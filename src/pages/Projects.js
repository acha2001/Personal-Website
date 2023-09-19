import { Link } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard"
import Spacer from "../components/projects/Spacer"
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
        <Spacer/>
        <GameOfLife id="GAME_OF_LIFE"/>
        <Link to="/" className="btn">Home</Link>
      </section>
    );
  };
  export default Projects;