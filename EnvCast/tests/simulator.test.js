const { simulateTemperature, simulateHumidity, simulateCO2 } = require('../sensors/simulator'); // Adjust the path as needed

describe('Sensor Simulator', () => {
  test('should return valid temperature data', () => {
    const temperature = simulateTemperature();
    expect(temperature).toBeGreaterThanOrEqual(15);
    expect(temperature).toBeLessThanOrEqual(30);
    expect(typeof temperature).toBe('number');
  });

  test('should return valid humidity data', () => {
    const humidity = simulateHumidity();
    expect(humidity).toBeGreaterThanOrEqual(30);
    expect(humidity).toBeLessThanOrEqual(80);
    expect(typeof humidity).toBe('number');
  });

  test('should return valid CO2 data', () => {
    const co2 = simulateCO2();
    expect(co2).toBeGreaterThanOrEqual(350);
    expect(co2).toBeLessThanOrEqual(1200);
    expect(typeof co2).toBe('number');
  });
});
