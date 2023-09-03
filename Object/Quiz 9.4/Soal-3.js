function tukarBesarKecil(kalimat) {
  let besar = kalimat.toUpperCase()
  let panjang = kalimat.length - 1
  let result = ""
  for(let i = 0;i<=panjang;i++) {
    if(kalimat[i] === besar[i]) {
      result+=kalimat[i].toLowerCase()
    }
    else if(kalimat[i] !== besar[i]) {
      result+=kalimat[i].toUpperCase()
    }
    else {
      result+=kalimat[i]
    }
  }
  return result
}

console.log(tukarBesarKecil("Hello World"))
console.log(tukarBesarKecil("i aM aLAY"))
console.log(tukarBesarKecil("My Name is Bond"))
console.log(tukarBesarKecil("IT sHOULD bE me"))
console.log(tukarBesarKecil("001-A-3-5TrdYW"))
