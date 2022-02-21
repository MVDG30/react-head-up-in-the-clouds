import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather() {
  let [message, setMessage] = useState(false);
  let [city, setCity] = useState("");

  function displayWeather(response) {
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setMessage(
      <ul className="weatherList">
        <h2>{city}</h2>

        <h5>Today 12:23pm</h5>

        <div className="row">
          <div className="col-4">
            <img src={icon} id="icon" alt="weatherDescription" width="220px" />
          </div>
          <div className="col-6">
            <span className="ms-3 float-left">
              <strong className="currentTemperature">
                {Math.round(response.data.main.temp)}
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
                  {Math.round(response.data.weather[0].description)}
                </strong>
              </li>
              <li>
                <strong>{Math.round(response.data.main.humidity)}</strong>%
                humidity
              </li>
              <li>
                <strong>{Math.round(response.data.wind.speed)}</strong> km/h
                wind
              </li>
            </ul>
          </div>
        </div>

        <Forecast />
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
              <div className="col-9">
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
            </div>
          </form>
          <br />
          <div>{message}</div>
        </div>
        <footer>
          <a
            href="https://github.com/MVDG30/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Michelle van de Griend
        </footer>
      </div>
    </div>
  );
}
