function squareNumber(num) {
  if(num<3) {
    return "Minimal input adalah 3"
  }
  else {
    let data = []
    let result = []
    for(let i = num**2;i>=1;i--){
      data.push(i)
      if(data.length===num) {
        result.push(data)
        data = []
      }
    }
    let finalResult = []
    if(result.length%2 !== 0) {
      for(let j = 0;j<result.length;j++) {
        if(j%2 === 0) {
          finalResult.push(result[j].reverse())
        }
        else {
          finalResult.push(result[j])
        }
      }
    }
    else {
      for(let k = 0;k<result.length;k++) {
        if(k%2 !== 0) {
          finalResult.push(result[k].reverse())
        }
        else {
          finalResult.push(result[k])
        }
      }
    }
    return finalResult
  }
}

console.log(squareNumber(3))
console.log(squareNumber(4))
console.log(squareNumber(5))
console.log(squareNumber(2))
