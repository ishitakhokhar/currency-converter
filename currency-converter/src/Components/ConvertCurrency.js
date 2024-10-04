import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function ConvertCurrency() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Fetching the data using native fetch API
  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${from}.json`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data[from]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [from]);

  // Setting the options for the dropdown when the info changes
  useEffect(() => {
    setOptions(Object.keys(info));
    convert(); // To update the conversion when info updates
  }, [info]);

  // Function to convert the currency
  function convert() {
    const rate = info[to];
    setOutput(input * rate);
  }

  // Function to switch between two currencies
  function flip() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1 className="display-4">Currency Converter</h1>
        </div>

        <div className="row g-4">
          {/* Amount Input */}
          <div className="col-md-4">
            <h3>Amount</h3>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the amount"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* From Currency Dropdown */}
          <div className="col-md-3">
            <h3>From</h3>
            <select
              className="form-select"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Switch Button */}
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <button className="btn btn-warning" onClick={flip}>
              Switch
            </button>
          </div>

          {/* To Currency Dropdown */}
          <div className="col-md-3">
            <h3>To</h3>
            <select
              className="form-select"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg" onClick={convert}>
            Convert
          </button>

          <h2 className="mt-4">Converted Amount:</h2>
          <p className="lead">
            {`${input} ${from.toUpperCase()} = ${output.toFixed(
              2
            )} ${to.toUpperCase()}`}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Link className="btn btn-primary btn-lg" to="/">
          Back
        </Link>
      </div>
    </>
  );
}

export default ConvertCurrency;
