function cariModus(arr) {
  arr.sort(function(a, b){return a-b})
  let panjang = arr.length - 1
  let result
  for (let i = 0;i<=panjang;i++) {
    if(arr[i] === arr[i+1] && arr[i+1] === arr[i+2]) {
      result = -1
      break
    }
    else if(arr[i] === arr[i+1]) {
      result = arr[i]
      break
    }
  }
  if(result !== undefined) {
    return result
  }
  else {
    return -1
  }
}
console.log(cariModus([10,4,5,2,4]))
console.log(cariModus([5,10,10,6,5]))
console.log(cariModus([10,3,1,2,5]))
console.log(cariModus([1,2,3,3,4,5]))
console.log(cariModus([7,7,7,7,7]))
