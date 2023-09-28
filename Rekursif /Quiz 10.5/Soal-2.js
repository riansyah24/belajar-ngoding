function changeVocals(str) {
  let newStr = "";
  let vocals = "aiueoAIUEO";
  let nextChar = "bjvfpBJVFP";
  for (let i = 0; i < str.length; i++) {
    let index = vocals.indexOf(str[i]);
    if (index === -1) {
      newStr += str[i];
    }
    else {
      newStr += nextChar[index];
    }
  }
  return newStr;
}

function reverseWord(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function setLowerUpperCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    }
    else if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}

function removeSpaces(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return newStr;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  else {
    let password = "";
    password = changeVocals(name);
    password = reverseWord(password);
    password = setLowerUpperCase(password);
    password = removeSpaces(password);
    return password;
  }
}

// TEST CASES
console.log(passwordGenerator("Sergei Dragunov"))
console.log(passwordGenerator("Dimitri Wahyudiputra"))
console.log(passwordGenerator("Alexei"))
console.log(passwordGenerator("Alex"))
