function angkaPrima(angka) {
  if (angka%2 === 0 && angka !== 2) {
    return false
  }
  else if (angka%3 === 0 && angka !== 3) {
    return false
  }
  else if (angka%5 === 0 && angka !== 5) {
    return false
  }
  else if (angka%7 === 0 && angka !== 7) {
    return false
  }
  else {
    return true
  }
}
console.log(angkaPrima(3))
console.log(angkaPrima(7))
console.log(angkaPrima(6))
console.log(angkaPrima(23))
console.log(angkaPrima(33))
