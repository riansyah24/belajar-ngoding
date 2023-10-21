function squareNumber(num) {
  if(num < 3) {
    return "Minimal input adalah 3"
  }
  else {
    let data = []
    let result = []
    for(let i = 1;i<=num**2;i++) {
      if(i%4 === 0) {
        data.push("#")
      }
      else if(i%2 === 0) {
        data.push("o")
      }
      else if(i%2 !== 0) {
        data.push("x")
      }
      if(data.length === num) {
        result.push(data)
        data = []
      }
    }
    let finalResult = []
    for(let j = 0;j<result.length;j++) {
      if(j%2 !== 0) {
        finalResult.push(result[j].reverse())
      }
      else {
        finalResult.push(result[j])
      }
    }
    return finalResult
  }
}

console.log(squareNumber(3))
console.log(squareNumber(4))
console.log(squareNumber(5))
console.log(squareNumber(2))
