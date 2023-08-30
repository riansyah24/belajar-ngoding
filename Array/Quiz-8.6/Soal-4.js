function tentukanDeretGeometri(arr) {
  let panjang = arr.length - 1
  let angkaPertama;
  let angkaKedua;
  let salah = []
  for(let i = 0;i<=panjang-2;i++) {
    angkaPertama = arr[i+1] / arr[i]
    angkaKedua = arr[i+2] / arr[i+1]
    if(angkaPertama !== angkaKedua) {
      salah.push(false)
    }
  }
  if(salah.length>=1) {
    return false
  }
  else {
    return true
  }
}

console.log(tentukanDeretGeometri([1,3,9,27,81]))
console.log(tentukanDeretGeometri([2,4,8,16,32]))
console.log(tentukanDeretGeometri([2,4,6,8]))
console.log(tentukanDeretGeometri([2,6,18,54]))
console.log(tentukanDeretGeometri([1,2,3,4,7,9]))
