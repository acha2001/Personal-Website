
import { Link } from "react-router-dom";
import ContactCard from "../components/contact/ContactCard";

import '../css/contact.css'

const Contact = () => {
    return (
      <section className='contact_background'>
        <div class="center">
          <Link to="/" className="home_button">Go Home</Link>
        </div>
        <h2 class="title contact_title">Get In Touch!</h2>
        <ContactCard/>
      </section>
      
    );
  };
  export default Contact;