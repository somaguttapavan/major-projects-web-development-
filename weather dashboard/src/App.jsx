import React, { useState } from "react";
import "./App.css";

const API_KEY = "ee4dc32d45ff9b93a2f38ead574b2561"; // Your OpenWeatherMap API Key

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Fetch Weather Data
  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-container">
          <h2>
            {weather.name}, {weather.sys?.country}
          </h2>
          <p>🌡 Temperature: {weather.main?.temp}°C</p>
          <p>💧 Humidity: {weather.main?.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind?.speed} m/s</p>
          <p>☁ Condition: {weather.weather?.[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
