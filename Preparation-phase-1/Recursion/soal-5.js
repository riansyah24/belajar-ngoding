function hapusSimbolRec(str) {
  if (str === '') {
    return '';
  }
  const firstChar = str[0];
  if ((firstChar >= 'a' && firstChar <= 'z') || (firstChar >= '0' && firstChar <= '9')) {
    return firstChar + hapusSimbolRec(str.slice(1));
  } else {
    return hapusSimbolRec(str.slice(1));
  }
}
console.log(hapusSimbolRec('test4@aa'))
console.log(hapusSimbolRec('devel0p3r s3j@@ati'))
console.log(hapusSimbolRec('ma@#k!an~'))
console.log(hapusSimbolRec('coding'))
console.log(hapusSimbolRec('1+3-5*2=100'))
