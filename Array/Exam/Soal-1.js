function targetTerdekat(arr) {
  let jarakO = 0
  let jarakX = []
  let minus = []
  let panjang = arr.length - 1
  for(let i = 0;i<=panjang;i++) {
    if(arr[i] === "x") {
      jarakX.push(i)
    }
    else if(arr[i] === "o") {
      jarakO = i
    }
  }
  if(jarakX.length === 0) {
    return 0
  }
  else {
    for(let j = 0;j<=jarakX.length - 1;j++) {
    minus.push(Math.abs(jarakX[j] - jarakO))
    minus.sort()
    }
    return minus[0]
  }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']));
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']));
console.log(targetTerdekat([' ', ' ', 'o', ' ']));
console.log(targetTerdekat([" ","o"," ","x","x"," "," ","x"]))
