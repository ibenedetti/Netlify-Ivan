import "./style.css";
import SFL1 from "../../public/img/SHUFFLE-1.png";
import SFL2 from "../../public/img/SHUFFLE-2.png";
import SFL3 from "../../public/img/SHUFFLE-3.png";
import SFL4 from "../../public/img/SHUFFLE-4.png";

const Random = () => {
  return (
    <div>
      <div className="project-text-box">
        <p>A simple refactoring of a function that shuffles and shows cards, and then saves the results in a JSON.</p>
        </div>  
        <img className="shuffle-img" id="shot1" src="/img/code-snapshot1.png" alt=":(" />
        <img className="shuffle-img" id="shot2" src="/img/code-snapshot2.png" alt=":(" />
      <div className="banner">
        <div className="slider" style={{ "--quantity": 4 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={SFL1} alt="WH-1" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={SFL2} alt="WH-2" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={SFL3} alt="WH-3" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={SFL4} alt="WH-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
