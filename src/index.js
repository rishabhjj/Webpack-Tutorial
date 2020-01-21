
console.log("Welcome to WebPack Demo");

function CelsiusToFahrenheit() {
  let value = document.getElementById("c").value;
  value = convertingToNumber(value);
  value *= 9 / 5 + 32;
  value = roundingCalculatedValue(value);
  document.getElementById("f").value = value;
}

function FahrenheitToCelsius() {
  let value = document.getElementById("f").value;
  value = convertingToNumber(value);
  value = (value - 32)  * 5 / 9;
  value = roundingCalculatedValue(value);
  document.getElementById("c").value = value;
}

function convertingToNumber(value) {
  return Number(value);
}

function roundingCalculatedValue(value) {
  return Math.round(value)
}