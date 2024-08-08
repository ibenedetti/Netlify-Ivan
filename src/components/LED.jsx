import "./style.css";
import ScreenScene from "./ScreenScene";
import CPLED1 from "../../public/img/CPLED-1.png";
import CPLED2 from "../../public/img/CPLED-2.png";
import CPLED3 from "../../public/img/CPLED-3.png";
import CPLED4 from "../../public/img/CPLED-4.png";

const CPLED = () => {
  return (
    <div>
      <div className="project-text-box">
        <p>A LED cabinet model that follows you as you navigate the main page. That's my first profesisonal React / Three.js website.</p>        
      </div>
      <div className="screen-scene-wrapper">
        <ScreenScene />
      </div>
      <div className="banner">
        <div className="slider" style={{ "--quantity": 4 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={CPLED1} alt="WH-1" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={CPLED2} alt="WH-2" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={CPLED3} alt="WH-3" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={CPLED4} alt="WH-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPLED;
