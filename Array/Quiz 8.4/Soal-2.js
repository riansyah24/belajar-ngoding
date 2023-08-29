function angkaPalindrome(angka) {
  let strAngka = angka.toString() 
  let reverseAngka = strAngka.split("").reverse().join("")
  if(angka === parseInt(reverseAngka)) {
    for(let i = 0;;i++) {
      angka++
      strAngka = angka.toString() 
      reverseAngka = strAngka.split("").reverse().join("")
      if(angka === parseInt(reverseAngka)) {
        return parseInt(reverseAngka)
        break
      }
    }
  }
  else {
    for(let i = 0;;i++) {
      angka++
      strAngka = angka.toString() 
      reverseAngka = strAngka.split("").reverse().join("")
      if(angka === parseInt(reverseAngka)) {
        return parseInt(reverseAngka)
        break
      }
    }
  }
}
console.log(angkaPalindrome(8))
console.log(angkaPalindrome(10))
console.log(angkaPalindrome(117))
console.log(angkaPalindrome(175))
console.log(angkaPalindrome(1000))￼Enter
