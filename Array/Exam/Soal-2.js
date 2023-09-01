function mengelompokkanAngka(arr) {
  let panjang = arr.length - 1
  let kelipatanTiga = []
  let genap = []
  let ganjil = []
  let result = []
  for (let i = 0; i<=panjang;i++) {
    if(arr[i]%3 === 0) {
      kelipatanTiga.push(arr[i])
    }
    else if(arr[i]%2 === 0) {
      genap.push(arr[i])
    }
    else {
      ganjil.push(arr[i])
    }
  }
  result.push(genap)
  result.push(ganjil)
  result.push(kelipatanTiga)
  return result
}

console.log(mengelompokkanAngka([2,4,6]))
console.log(mengelompokkanAngka([1,2,3,4,5,6,7,8,9]))
console.log(mengelompokkanAngka([100,151,122,99,111]))
console.log(mengelompokkanAngka([]))
