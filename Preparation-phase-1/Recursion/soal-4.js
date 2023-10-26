function dividableRecursive(array, num) {
  if (array.length === 0) {
    return '';
  }
  const first = array[0];
  if (first % num === 0) {
    return first + ' ' + dividableRecursive(array.slice(1), num);
  } else {
    return dividableRecursive(array.slice(1), num);
  }
}
console.log(dividableRecursive([66, 33, 55, 44, 11], 3))
console.log(dividableRecursive([123, 222, 100, 50, 32], 2))
console.log(dividableRecursive([125, 500, 201, 202, 66], 5))
console.log(dividableRecursive([66, 33, 55, 44, 132], 6))
