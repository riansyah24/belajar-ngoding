function missingNum(arr) {
  //code here
  let urut = []
  for(let i = 0;i<arr.length;i++) {
    for(let j = 0;j<arr[i].length;j++) {
      if(typeof(arr[i][j]) === "number") {
        urut.push(arr[i][j])
      }
    }
  }
  urut.sort(function(a, b){return a-b})
  let data = []
  for(let a = urut[0];a<=urut[urut.length-1];a++) {
    data.push(a)
  }
  let diff = data.filter(x => !urut.includes(x))
  return diff
}

console.log(missingNum([
  [3, ' ', 5],
  [1, ' ', 7],
  [9, ' ', ' ']
]))
console.log(missingNum([
  [2, ' '],
  [' ', 5]
]))
console.log(missingNum([
  [11, ' ', 13],
  [17, ' ', 19],
  [' ', 16, ' ']
]))
console.log(missingNum([
  [3, ' ', 5, 15],
  [1, ' ', 7, 13],
  [9, ' ', ' ', 12],
  [' ', 16, ' ', ' ']
]))
console.log(missingNum([]))
