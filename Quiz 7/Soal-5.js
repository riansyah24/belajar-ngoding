/*
1. function balikKata yg menerima parameter 1 string
2. Return kata yang dibalik
*/

function balikKata(kata) {
  let panjang = kata.length
  let result = ""
  for (let i = 0;panjang-1>=i;panjang--) {
    result+=kata[panjang-1]
  }
  return result
}

console.log(balikKata("Hello World and Coders"))
console.log(balikKata("John Doe"))
console.log(balikKata("I am a bookworm"))
console.log(balikKata("Coding is my hobby"))
