/*
Soal 4
Memecah kalimat dan menghitung banyaknya huruf per kata
*/

let word = "Wow Javascript is so cool"
let firstWord = word.substring(0,3)
let secondWord = word.substring(4,14)
let thirdWord = word.substring(15,17)
let fourthWord = word.substring(18,20)
let fifthWord = word.substring(21,25)
let firstWordLength = firstWord.length
let secondWordLength = secondWord.length
let thirdWordLength = thirdWord.length
let fourthWordLength = fourthWord.length
let fifthWordLength = fifthWord.length

console.log(`First word: ${firstWord} with length: ${firstWordLength}`)
console.log(`Second word: ${secondWord} with length: ${secondWordLength}`)
console.log(`Third word: ${thirdWord} with length: ${thirdWordLength}`)
console.log(`Fourth word: ${fourthWord} with length: ${fourthWordLength}`)
console.log(`Fifth word: ${fifthWord} with length: ${fifthWordLength}`)
