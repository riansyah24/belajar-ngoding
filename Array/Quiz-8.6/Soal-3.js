function deretAritmatika(arr) {
  let panjang = arr.length - 1
  let angkaPertama;
  let angkaKedua;
  let salah = []
  for(let i = 0;i<=panjang-2;i++) {
    angkaPertama = arr[i+1] - arr[i]
    angkaKedua = arr[i+2] - arr[i+1]
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
