import InstaLogo from "../../photos/instagram (1).png"
import LinkedinLogo from "../../photos/linkedin-logo.png"
import GmailLogo from "../../photos/gmail.png"
import GitLogo from "../../photos/github-mark.png"
const ContactCard = () => {

    return (
        <>
            <div class="contact_card">
                <h4 class ="title">CONTACT INFO</h4>
                
                <div class="contact_row">
                    <a class="clickable_link" href= "https://www.linkedin.com/in/andrew-chapman-22031021b/" target="_blank">
                    <img src= {LinkedinLogo} class="logo"></img>
                    </a>
                    <a class="clickable_link" href= "https://www.linkedin.com/in/andrew-chapman-22031021b/" target="_blank">Andrew Chapman</a>
                </div>
                <div class="contact_row">
                    <a href= "https://github.com/acha2001" target="_blank">
                        <img  src= {GitLogo} class="logo"></img>
                    </a>
                    <a href= "https://github.com/acha2001" target="_blank" class="clickable_link">acha2001</a>
                </div>
                <div class="contact_row">
                    <img src= {GmailLogo} class="logo"></img>
                    <a>andrewbryce001@gmail.com</a>
                </div>
                <div class="contact_row">
                    <img src= {InstaLogo} class="logo"></img>
                    <a>drew.chap</a>
                </div>
            </div>
    
        </>
    );
};
export default ContactCard;

