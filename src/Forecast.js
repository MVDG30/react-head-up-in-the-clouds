import React from "react";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div className="forecast-day">Tomorrow</div>
        <div className="forecast-icon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            id="icon"
            alt="weather-icon"
            width="50px"
          />
        </div>
        <div className="forecast-temp">18˚C</div>
      </div>

      <div className="col-sm-2">
        <div className="forecast-day">Mon</div>
        <div className="forecast-icon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            id="icon"
            alt="weather-icon"
            width="50px"
          />
        </div>
        <div className="forecast-temp">18˚C</div>
      </div>

      <div className="col-sm-2">
        <div className="forecast-day">Tue</div>
        <div className="forecast-icon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            id="icon"
            alt="weather-icon"
            width="50px"
          />
        </div>
        <div className="forecast-temp">18˚C</div>
      </div>

      <div className="col-sm-2">
        <div className="forecast-day">Wed</div>
        <div className="forecast-icon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            id="icon"
            alt="weather-icon"
            width="50px"
          />
        </div>
        <div className="forecast-temp">18˚C</div>
      </div>

      <div className="col-sm-2">
        <div className="forecast-day">Thu</div>
        <div className="forecast-icon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            id="icon"
            alt="weather-icon"
            width="50px"
          />
        </div>
        <div className="forecast-temp">18˚C</div>
      </div>
    </div>
  );
}
