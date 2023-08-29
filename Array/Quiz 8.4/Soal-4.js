function pasanganTerbesar(num) {
  let numString = num.toString()
  let panjang = numString.length - 1
  let maxNumResult = 0
  for(let i = 0;i<=panjang-1;i++) {
    maxNum = parseInt(numString[i] + numString[i+1])
    if(maxNum > maxNumResult) {
      maxNumResult = maxNum
    }
  }
  return maxNumResult
}

console.log(pasanganTerbesar(641573))
console.log(pasanganTerbesar(12783456))
console.log(pasanganTerbesar(910233))
console.log(pasanganTerbesar(71856421))
console.log(pasanganTerbesar(79918293))
