import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function GetAllCurrency() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch("https://latest.currency-api.pages.dev/v1/currencies.json")
      .then((res) => res.json())
      .then((res) => setCurrencies(res));
  }, []);

  return (
    <div className="container mt-5">
      {/* Page Heading */}
      <h1 className="display-4 text-center mb-5">Available Currencies</h1>
      <div className="d-flex justify-content-center mb-4">
        <Link className="btn btn-primary btn-lg" to="/ConvertCurrency">
          Currency Conversion
        </Link>
      </div>
      {/* Currency List */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {Object.entries(currencies).map(([currencyCode, currencyName]) => (
          <div className="col" key={currencyCode}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{currencyCode.toUpperCase()}</h5>
                <p className="card-text text-muted">{currencyName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
