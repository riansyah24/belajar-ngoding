function ubahHuruf(kata) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let panjang = kata.length - 1
  let result = ""
  for(let i = 0;i<=panjang;i++) {
    for(let j = 0;j<=alphabet.length-1;j++) {
      if(kata[i] === alphabet[j]) {
        result+=alphabet[j+1]
      }
    }
  }
  return result
}
console.log(ubahHuruf("wow"))
console.log(ubahHuruf("developer"))
console.log(ubahHuruf("javascript"))
console.log(ubahHuruf("keren"))
console.log(ubahHuruf("semangat"))
