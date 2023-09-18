
import HeadShot from "../photos/headshot.png"
import HeadShot2 from "../photos/waterfall.png"
import NavBar from "../components/NavBar"
import '../css/home.css'

const Home = () => {

  return (
    <>
      <div class="main">
        <NavBar/>
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
     </>
  );
};
export default Home;
