const mongoose = require("mongoose");

// Define Weather Schema
const WeatherSchema = new mongoose.Schema({
  city: { type: String, required: true },
  temperature: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create Model
const Weather = mongoose.model("Weather", WeatherSchema);

module.exports = Weather;
