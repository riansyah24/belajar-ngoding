function doubleReverse(arr) {
  if(arr.length === 0) {
    return "Invalid input parameter"
  }
  else {
    let result = []
  for(let i = arr.length-1;i>=0;i--) {
    if(arr[i].length%2 === 0) {
      let reverseWord = ""
      for(let j = arr[i].length-1;j>=0;j--) {
        reverseWord+=arr[i][j]
      }
      result.push(reverseWord)
      reverseWord = ""
    }
    else {
      result.push(arr[i])
    }
  }
  return result
  }
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
console.log(doubleReverse([]))
