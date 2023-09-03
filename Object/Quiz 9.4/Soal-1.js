function digitPerkalianMinimum(angka) {
  let faktor = []
  let result = []
  for(let i = 1;i<=angka;i++) {
    if(angka%i === 0){
      faktor.push(i)
    }
  }
  for(let j = 0;j<=faktor.length-1;j++) {
    for(let k = faktor.length-1;k>=0;k--) {
      let kali = faktor[j] * faktor[k]
      if(kali === angka) {
        result.push(`${faktor[j]}${faktor[k]}`)
      }
    }
  }
  result.sort(function(a, b){return a-b})
  return result[0].length
}
console.log(digitPerkalianMinimum(24))
console.log(digitPerkalianMinimum(90))
console.log(digitPerkalianMinimum(20))
console.log(digitPerkalianMinimum(179))
console.log(digitPerkalianMinimum(1))
