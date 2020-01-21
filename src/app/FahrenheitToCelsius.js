import { convertingToNumber, roundingCalculatedValue } from './utils/util';

export function FahrenheitToCelsius() {
    let value = document.getElementById("f").value;
    value = convertingToNumber(value);
    value = (value - 32)  * 5 / 9;
    value = roundingCalculatedValue(value);
    document.getElementById("c").value = value;
  }
  