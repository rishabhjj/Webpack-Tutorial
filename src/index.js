const c = document.getElementById("c");
const f = document.getElementById("f");
import './main.scss';
import { FahrenheitToCelsius } from './app/FahrenheitToCelsius';
import { CelsiusToFahrenheit } from './app/CelsiusToFahrenheit';


c.addEventListener('keyup', () => {
  CelsiusToFahrenheit();
  });
  
f.addEventListener('onkeyup', () => {
  FahrenheitToCelsius();
});
console.log("Welcome to WebPack Demo");
