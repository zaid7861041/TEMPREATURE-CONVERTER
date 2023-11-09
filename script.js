function convertTemperature() {
    // Get the Celsius input value
    const celsiusInput = document.getElementById('celsiusInput').value;

    // Check if the input is a valid number
    if (!isNaN(celsiusInput)) {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (celsiusInput * 9/5) + 32;

        // Display the result
        document.getElementById('result').textContent = fahrenheit.toFixed(2);
    } else {
        // Display an error message if the input is not valid
        document.getElementById('result').textContent = 'Invalid input';
    }
}
