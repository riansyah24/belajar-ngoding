function averageLengthWord(words) {
  let word = words.split(" ")
  let jumlah = 0
  let result = []
  for(let i = 0;i<word.length;i++) {
    jumlah+=word[i].length
  }
  let rata = Math.round(jumlah/word.length)
  for(let j = 0;j<word.length;j++) {
    if(rata === word[j].length) {
      result.push(word[j])
    }
  }
  return result
}

console.log(averageLengthWord('Do you want to become a great coder ?'));
console.log(averageLengthWord('You dont know what you have until you lose it!'))
console.log(averageLengthWord('I am diligent'))
