function angkaTerbesar(sentence) {
  if(sentence.length === 0) {
    return -1
  }
  else {
    return Math.max.apply(Math, sentence);
  }
}
console.log(angkaTerbesar([2,3,7,6,5]))
console.log(angkaTerbesar([9,3,7,4,1]))
console.log(angkaTerbesar([2,1,7,2,8]))
console.log(angkaTerbesar([]))
