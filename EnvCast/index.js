const axios = require("axios");
const { simulateTemperature, simulateHumidity, simulateCO2 } = require("./sensors/simulator");

const API_URL = "http://localhost:3000/api/env";

async function sendData() {
  const payload = {
    timestamp: new Date().toISOString(),
    temperature: simulateTemperature(),
    humidity: simulateHumidity(),
    co2: simulateCO2()
  };

  try {
    const response = await axios.post(API_URL, payload);
    console.log("Data sent successfully:", response.status);
  } catch (err) {
    console.error("Failed to send data:", err.message);
  }
}

sendData();