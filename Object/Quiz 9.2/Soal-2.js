function fpb(angka1,angka2) {
  let result = []
  let kecil
  if(angka1 < angka2) {
    kecil = angka1
  }
  else {
    kecil = angka2
  }
  for(let i = 0;i<=kecil;i++) {
    if(angka1%i === 0 && angka2%i === 0) {
      result.push(i)
    }
  }
  return result[result.length-1]
}

console.log(fpb(12,16))
console.log(fpb(50,40))
console.log(fpb(22,99))
console.log(fpb(24,36))
console.log(fpb(17,23))
