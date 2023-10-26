function changeXRecursive(data, jenis) {
  if (data.length === 0) {
    return '';
  }
  const currentDigit = data[0];
  const isEven = currentDigit % 2 === 0;
  if ((jenis === 'ganjil' && !isEven) || (jenis === 'genap' && isEven)) {
    return 'x' + changeXRecursive(data.slice(1), jenis);
  } else {
    return currentDigit + changeXRecursive(data.slice(1), jenis);
  }
}
console.log(changeXRecursive("012345678922468", "ganjil"))
console.log(changeXRecursive("0123456789", "genap"))
