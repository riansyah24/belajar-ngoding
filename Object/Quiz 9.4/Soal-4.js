function checkAB(num) {
  let arr = num.split("")
  let panjang = num.length - 1
  for(let i = 0;i<=panjang;i++) {
    if(arr[i] === "a" && arr[i+4] === "b") {
      return true
    }
    else if(arr[i] === "b" && arr[i+4] === "a") {
      return true 
    }
  }
      return false
}

console.log(checkAB('lane borrowed'))
console.log(checkAB('i am sick'))
console.log(checkAB('you are boring'))
console.log(checkAB('barbarian'))
console.log(checkAB('bacon and meat'))
