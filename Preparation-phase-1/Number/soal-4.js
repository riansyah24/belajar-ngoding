function miniSudokuBoard(text) {
  //code here
  if(text === "") {
    return "Empty board"
  }
  else if(text.length%3 !== 0) {
    return "Invalid input"
  }
  else {
    let data = []
    let result = []
    for(let i = 0;i<text.length;i++) {
      data.push(text[i])
      if(data.length === 3) {
        result.push(data)
        data = []
      }
    }
    return result
  }
}

console.log(miniSudokuBoard('005030081'));
console.log(miniSudokuBoard('105802000'));
console.log(miniSudokuBoard('608730000'));
console.log(miniSudokuBoard('096040001'));
console.log(miniSudokuBoard('87109'));
console.log(miniSudokuBoard(''));
