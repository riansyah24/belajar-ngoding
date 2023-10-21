function initialObjectGrouping(studentsArr) {
  let result = {}
  for (let i = 0; i < studentsArr.length; i++) {
    let initial = studentsArr[i].charAt(0)
    if (result[initial] === undefined) {
      result[initial] = []
    }
    result[initial].push(studentsArr[i])
  }
  return result
}
console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']))
