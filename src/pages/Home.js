
import {Link} from 'react-router-dom'
import {Text,Style} from 'react'
import HeadShot from "../photos/headshot.png"
import HeadShot2 from "../photos/waterfall.png"
import '../css/home.css'

const Home = () => {

  return (
    <section className='section'>
      <div class="main">
        <div class="nav_bar main_item">
          <a href="#about_section" class="nav_btn">About</a>
          <Link to="/projects" className="nav_btn">Projects</Link>
          <Link to="/contact" className="nav_btn">Contact</Link>
        </div>
        <div class="main_title main_item">
          <h1>Andrew Chapman</h1>
          <text >Sophtware Developer</text>
        </div>
        <div class = " summary main_item">
          <text>Energetic and highly motivated computer science graduate with a strong foundation in software development, seeking a challenging entry-level position to apply my technical skills, problem-solving abilities, and passion for coding. Committed to delivering innovative solutions and contributing to the success of a dynamic software development team.</text>
        </div>
     </div>
     
     <div class="block">
      <div class="headshot_containter">
        <img src={HeadShot} class="headshot"/>
      </div>
      <div class="headshot_conatiner">
        <img src={HeadShot2} class="headshot"/>
      </div>
     </div>
     
     <div class="main2" id="about_section">
    
     </div>
    </section>
  );
};
export default Home;
