function convertTemperature() {
    var temperatureInput = document.getElementById('temperature').value;
    var unitSelect = document.getElementById('unit');
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // Validate 
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Perform temperature conversion
    var enteredTemperature = parseFloat(temperatureInput);
    var convertedTemperature;

    if (selectedUnit === 'celsius') {
        convertedTemperature = (enteredTemperature - 32) * 5/9;
    } else {
        convertedTemperature = (enteredTemperature * 9/5) + 32;
    }

    
    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${selectedUnit.toUpperCase()}`;
}
