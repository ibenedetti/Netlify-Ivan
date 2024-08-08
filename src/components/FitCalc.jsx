import "./style.css";
import FIT1 from "../../public/img/FIT-1.png";
import FIT2 from "../../public/img/FIT-2.png";
import FIT3 from "../../public/img/FIT-3.png";
import FIT4 from "../../public/img/FIT-4.png";
import { useState } from "react";

const Fit = () => {
  const [results, setResults] = useState(null);
  const [resultsAvailable, setResultsAvailable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const weight = parseFloat(event.target.weight.value);
    const height = parseFloat(event.target.height.value);
    const age = parseInt(event.target.age.value);
    const activityLevel = parseInt(event.target["activity-level"].value);
    const sex = event.target.sex.value;
    const goal = event.target.goal.value;

    let freqUser = activityLevel;
    let h = height * 0.01;
    let bmi = weight / (h * h);
    let mb = 0;
    let calChange;
    let dif = 200;
    let pesoMas;
    let pesoMenos;

    if (sex === "m") {
      mb = 665 + 9.6 * weight + 9.8 * height - 4.7 * age;
    } else if (sex === "h") {
      mb = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      alert("Error.");
    }

    for (let freq = 0; freq <= 6; freq++) {
      if (freq === 1) {
        calChange = mb;
      } else if (freq === 2) {
        calChange = mb + 50;
      } else if (freq === 3) {
        calChange = mb + 100;
      } else if (freq === 4) {
        calChange = mb + 200;
      } else if (freq === 5) {
        calChange = mb + 450;
      } else if (freq === 6) {
        calChange = mb + 700;
      } else {
        calChange = "ERROR";
      }

      if (freq === freqUser) {
        break;
      }
    }

    pesoMas = calChange + dif;
    pesoMenos = calChange - dif;

    const diffWeight = goal === "cut" ? pesoMenos : pesoMas;

    const resultsHTML = (
      <article>
        <p>BMI: {bmi.toFixed(2)}</p>
        <p>Calories required for your activity level: {calChange.toFixed(2)}</p>
        <p>
          Calories to {goal === "cut" ? "lose" : "gain"} weight:{" "}
          {diffWeight.toFixed(2)}
        </p>
      </article>
    );

    setResults(resultsHTML);
    setResultsAvailable(true);
  };

  return (
    <div>
      <div className="project-text-box">
        <p>
          A website built entirely around this calories calculator. It was a weird attempt at React like DOM when I still didn't know React.
        </p>
      </div>
      <div className="banner">
        <div className="slider" style={{ "--quantity": 4 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={FIT1} alt="WH-1" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={FIT2} alt="WH-2" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={FIT3} alt="WH-3" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={FIT4} alt="WH-4" />
          </div>
        </div>
      </div>

      <form id="calculator-form" onSubmit={handleSubmit}>
        <label>
          Weight (kg):
          <input type="number" id="weight" name="weight" required />
        </label>
        <label>
          Height (cm):
          <input type="number" id="height" name="height" required />
        </label>
        <label>
          Age:
          <input type="number" id="age" name="age" required />
        </label>
        <label>
          Activity Level:
          <select id="activity-level" name="activity-level" required>
            <option value="1">Sedentary</option>
            <option value="2">Lightly Active</option>
            <option value="3">Moderately Active</option>
            <option value="4">Very Active</option>
            <option value="5">Extra Active</option>
          </select>
        </label>
        <label>
          Sex:
          <select id="sex" name="sex" required>
            <option value="m">Female</option>
            <option value="h">Male</option>
          </select>
        </label>
        <label>
          Goal:
          <select id="goal" name="goal" required>
            <option value="cut">Lose Weight</option>
            <option value="bulk">Gain Weight</option>
          </select>
        </label>
        <button type="submit">Calculate</button>
      </form>

      {/* Display Results with Conditional Class */}
      <div id="results-kcal" className={resultsAvailable ? 'result-active' : ''}>
        {results}
      </div>
    </div>
  );
};

export default Fit;
