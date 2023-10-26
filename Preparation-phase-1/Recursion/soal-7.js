function parseNumber(equation) {
  let result;
  if (equation < 9) {
    return equation;
  } else {
    if (equation >= 1000) {
      result = parseInt(equation / 1000) * 1000;
      if (equation - result == 0) {
        return result;
      }
    } else if (equation >= 100) {
      result = parseInt(equation / 100) * 100;
      if (equation - result == 0) {
        return result;
      }
    } else if (equation >= 10) {
      result = parseInt(equation / 10) * 10;
      if (equation - result == 0) {
        return result;
      }
    } else {
      result = equation;
    }

    return `${result}+${parseNumber(equation - result)}`;
  }
}
console.log(parseNumber(3333))
console.log(parseNumber(90))
console.log(parseNumber(2333))
