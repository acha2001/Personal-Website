
import NavBar from "../components/home/NavBar"
import Name from "../components/home/Name"
import PersonalStatement from "../components/home/PersonalStatement"
import Spacer from "../components/home/Spacer"
import About from "../components/home/About"

import '../css/home.css'

const Home = () => {
  window.scrollTo(0, 0)
  return (
    <>
      <div class="main">
        <NavBar/>
        <Name/>
        <PersonalStatement/>
     </div>
     <Spacer/>    
     <div class="main2" id="about_section">
      <About/>
     </div>
     </>
  );
};
export default Home;
