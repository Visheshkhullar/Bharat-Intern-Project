function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("fahrenheit").value = celsius.toFixed(2);
    }
}

function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("celsius").value = fahrenheit.toFixed(2);
    }
}
