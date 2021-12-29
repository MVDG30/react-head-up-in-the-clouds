import React from "react";
import City from "./City";
import Day from "./Day";
import Temperature from "./Temperature";
import Weather from "./Weather";
import Humidity from "./Humidity";
import Wind from "./Wind";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cardBody">
          <h1>Head up in the clouds</h1>
          <form className="searchForm">
            <div className="row">
              <div className="col-5">
                <input
                  id="input-city"
                  type="search"
                  className="form-control"
                  placeHolder="Look up a city..."
                  autoComplete="off"
                  autoFocus="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="search-button btn"
                  value="Search"
                />
              </div>
              <div className="col-4">
                <button className="current-position">Current Location</button>
              </div>
            </div>
          </form>
          <br />
          <h2>
            Today in <City />
          </h2>
          <h5>
            <Day />
          </h5>

          <div className="row">
            <div className="col-4">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                id="icon"
                alt="weather-icon"
                width="220px"
              />
            </div>
            <div className="col-6">
              <span className="ms-3 float-left">
                <strong className="currentTemperature">
                  <Temperature />
                </strong>
                <div className="units">
                  <a href="/" className="celsius-link">
                    ˚C
                  </a>
                  |
                  <a href="/" className="fahrenheit-link">
                    ˚F
                  </a>
                </div>
              </span>

              <ul className="weather-description">
                <li>
                  <strong>
                    <Weather />
                  </strong>
                </li>
                <li>
                  <strong>
                    <Humidity />
                  </strong>
                  % humidity
                </li>
                <li>
                  <strong>
                    <Wind />
                  </strong>{" "}
                  km/h wind
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-3">Tomorrow</div>
            <div className="col-3">Monday</div>
            <div className="col-3">Tuesday</div>
            <div className="col-3">Wednesday</div>
          </div>
        </div>
      </div>
      <small>
        <a href="" target="_blank" rel="noreferrer">
          Open source code
        </a>{" "}
        by Michelle van de Griend
      </small>
    </div>
  );
}

export default App;
