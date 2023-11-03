function convertToFarh() {
    var celsiusInput = document.getElementById("celsius");
    var resultElement = document.getElementById("result");

    var celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        resultElement.textContent = "Please enter a valid number";
    } else {
        var fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    }
}