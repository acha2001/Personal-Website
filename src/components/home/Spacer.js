import HeadShot from "../../photos/headshot.png"
import HeadShot2 from "../../photos/waterfall.png"

const Spacer = () => {
    return (
    <div class="block">
        <div class="headshot_containter">
          <img src={HeadShot} class="headshot"/>
        </div>
        <div class="headshot_conatiner">
          <img src={HeadShot2} class="headshot"/>
        </div>
    </div>
    );
  };
  export default Spacer;