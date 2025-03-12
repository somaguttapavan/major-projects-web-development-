const express = require("express");
const Weather = require("../models/Weather");

const router = express.Router();

// Route to add weather data
router.post("/add", async (req, res) => {
  try {
    const { city, temperature, description } = req.body;
    const newWeather = new Weather({ city, temperature, description });

    await newWeather.save();
    res.status(201).json({ message: "Weather data added successfully", data: newWeather });
  } catch (error) {
    res.status(500).json({ error: "Error adding weather data" });
  }
});

// Route to get all weather data
router.get("/", async (req, res) => {
  try {
    const weatherData = await Weather.find();
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

// Route to delete a weather entry by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Weather.findByIdAndDelete(id);
    res.status(200).json({ message: "Weather data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting weather data" });
  }
});

module.exports = router;
