let currentTemp = 22.0;
let currentHumidity = 55.0;
let currentCO2 = 400;

function simulateTemperature() {
  const change = (Math.random() - 0.5) * 1.5;
  currentTemp = Math.max(15, Math.min(30, currentTemp + change));
  return parseFloat(currentTemp.toFixed(1));
}

function simulateHumidity() {
  const change = (Math.random() - 0.5) * 5;
  currentHumidity = Math.max(30, Math.min(80, currentHumidity + change));
  return Math.round(currentHumidity);
}

function simulateCO2() {
  const change = (Math.random() - 0.5) * 20;
  currentCO2 = Math.max(350, Math.min(1200, currentCO2 + change));
  return Math.round(currentCO2);
}

module.exports = {
  simulateTemperature,
  simulateHumidity,
  simulateCO2
};