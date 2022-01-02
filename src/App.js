import React, { useState } from "react";

import Day from "./Day";
import Temperature from "./Temperature";
import Weather from "./Weather";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Forecast from "./Forecast";
import axios from "axios";

import "./App.css";

function App() {
  let [message, setMessage] = useState(false);
  let [city, setCity] = useState("");

  function displayWeather(response) {
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setMessage(
      <ul className="weatherList">
        <li>
          The current temperature in {city} is{" "}
          {Math.round(response.data.main.temp)}˚C
        </li>
        <img src={icon} alt="weatherDescription" />
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `c3704d557b195c9549dbf7f2691c5783`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="cardBody">
          <h1>Head up in the clouds</h1>
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-5">
                <input
                  id="input-city"
                  type="text"
                  className="form-control"
                  placeHolder="Type a city name..."
                  onChange={updateCity}
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
          <h2>{message}</h2>
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
          <Forecast />
        </div>
      </div>
      <small>
        <a
          href="https://github.com/MVDG30/react-weather-app.git"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Michelle van de Griend
      </small>
    </div>
  );
}

export default App;
