function numberIterator(num) {
  if (num === 0) {
    return '0';
  } else {
    return numberIterator(num - 1) + num;
  }
}
console.log(numberIterator(5))
console.log(numberIterator(7))
console.log(numberIterator(3))
console.log(numberIterator(1))
console.log(numberIterator(0))
