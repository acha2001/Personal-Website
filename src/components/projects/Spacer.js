import HeadShot from "../../photos/boots.png"
import HeadShot2 from "../../photos/backpacking.png"

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