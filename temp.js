function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById('inputTemperature').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnit = document.getElementById('outputUnit').value;
    var outputTemp = 0;

    if (inputUnit === "Celsius") {
        if (outputUnit === "Celsius") {
            outputTemp = inputTemp;
        } else if (outputUnit === "Kelvin") {
            outputTemp = inputTemp + 273.15;
        } else if (outputUnit === "Fahrenheit") {
            outputTemp = (inputTemp * 9 / 5) + 32;
        }
    } else if (inputUnit === "Kelvin") {
        if (outputUnit === "Celsius") {
            outputTemp = inputTemp - 273.15;
        } else if (outputUnit === "Kelvin") {
            outputTemp = inputTemp;
        } else if (outputUnit === "Fahrenheit") {
            outputTemp = (inputTemp - 273.15) * 9 / 5 + 32;
        }
    } else if (inputUnit === "Fahrenheit") {
        if (outputUnit === "Celsius") {
            outputTemp = (inputTemp - 32) * 5 / 9;
        } else if (outputUnit === "Kelvin") {
            outputTemp = (inputTemp - 32) * 5 / 9 + 273.15;
        } else if (outputUnit === "Fahrenheit") {
            outputTemp = inputTemp;
        }
    }

    document.getElementById('outputTemperature').value = outputTemp.toFixed(2);
}

function resetTemperature() {
    document.getElementById('inputTemperature').value = '';
    document.getElementById('outputTemperature').value = '';
}

function clearTemperature() {
    document.getElementById('outputTemperature').value = '';
}