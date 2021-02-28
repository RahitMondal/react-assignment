import { useState } from "react";

import "./App.css";

function App() {
  // using the state values as the single source of truth for form inputs and using them to do calculations
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  // using an array of 3 elements for the 3 ouput lines at the bottom of the jsx
  const [output, setOutput] = useState(["", "", ""]);

  const changeHandler = (event) => {
    if (event.target.name === "height") setHeight(event.target.value);
    else setWeight(event.target.value);
  };

  // this is the form submission handler
  const submitHandler = (event) => {
    // preventing the default submission behaviour
    event.preventDefault();
    // making sure the input fields have number values
    if (height === "" || weight === "" || isNaN(height) || isNaN(weight)) {
      alert("please input your height and weight as numbers");
      return;
    }
    // doing the calculations
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    const lowerWeight = parseInt((20 * height * height) / 10000);
    const upperWeight = parseInt((25 * height * height) / 10000);

    const msg =
      weight >= lowerWeight && weight <= upperWeight
        ? "You are in a healthy weight range"
        : "You are in an unhealthy weight range";

    // setting the output here
    setOutput([
      `Your BMI is ${bmi}`,
      `Your suggested weight range is between ${lowerWeight}-${upperWeight}`,
      msg,
    ]);
  };

  return (
    <div className="App">
      <header>BMI Calculator</header>

      <form onSubmit={submitHandler}>
        <label>Enter your height in cm:</label>
        <input
          type="text"
          name="height"
          value={height} //making sure input value follows the component state
          onChange={changeHandler}
        />
        <label>Enter your weight in kg:</label>
        <input
          type="text"
          name="weight"
          value={weight} //making sure input value follows the component state
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
      </form>

      {/* below is the output section*/}
      <div className="output-line">{output[0]}</div>
      <div className="output-line">{output[1]}</div>
      <div className="output-line">{output[2]}</div>
    </div>
  );
}

export default App;
