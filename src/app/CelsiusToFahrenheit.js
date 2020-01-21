import { convertingToNumber, roundingCalculatedValue } from './utils/util';

export function CelsiusToFahrenheit() {
    let value = document.getElementById("c").value;
    value = convertingToNumber(value);
    value *= 9 / 5 + 32;
    value = roundingCalculatedValue(value);
    document.getElementById("f").value = value;
  }