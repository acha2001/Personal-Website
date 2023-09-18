import {Link} from 'react-router-dom'


const navBar = () => {

    return (
        <div class="nav_bar main_item">
          <a href="#about_section" class="nav_btn">About</a>
          <Link to="/projects" className="nav_btn">Projects</Link>
          <Link to="/contact" className="nav_btn">Contact</Link>
        </div>

    );    

};
export default navBar;