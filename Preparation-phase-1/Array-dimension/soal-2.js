function findNotRelative(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59]))
console.log(findNotRelative([1, 2, 3], [2, 1, 3]))
