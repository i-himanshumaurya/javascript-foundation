function celsiusToFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage:
let celsiusTemperature = 25;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

// Display the temperature in Fahrenheit to the console
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
