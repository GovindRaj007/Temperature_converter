const celsiusE1 = document.getElementById("celsius");
const fahrenheitE1 = document.getElementById("fahrenheit");
const kelvinE1 = document.getElementById("kelvin");


function computeTemp(event) {
    const currentValue = +event.target.value; //('+') unary plus operator is used to convert the value from a string to a number.In javascript ,input field values are always strings by default,even if the input type is number.

    switch (event.target.name) {
        case "celsius":
            kelvinE1.value = (currentValue + 273.32).toFixed(2);
            fahrenheitE1.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusE1.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinE1.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusE1.value = (currentValue - 273.32).toFixed(2);
            fahrenheitE1.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;

    }
}
// celsiusE1.addEventListener('input', computeTemp);
// fahrenheitE1.addEventListener('input', computeTemp);
// kelvinE1.addEventListener('input', computeTemp);
