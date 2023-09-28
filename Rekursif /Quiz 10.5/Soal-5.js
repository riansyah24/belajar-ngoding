function kaliTerusRekursif(angka) {
  let numStr = angka.toString()
  if(numStr.length === 1) {
    return parseInt(numStr)
  }
  else {
    return kaliTerusRekursif(numStr[0] * kaliTerusRekursif(numStr.slice(1)))
  }
}
console.log(kaliTerusRekursif(66))
console.log(kaliTerusRekursif(3))
console.log(kaliTerusRekursif(24))
console.log(kaliTerusRekursif(254))
console.log(kaliTerusRekursif(1231))
