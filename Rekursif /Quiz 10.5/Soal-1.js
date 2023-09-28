function sorting(arrNumber) {
  return arrNumber.sort()
}

function getTotal(arrNumber) {
  if(arrNumber.length === 0) {
    return ""
  }
  else {
    let angka = []
    for(let i = 0;i<=arrNumber.length-1;i++) {
      if(arrNumber[i] === arrNumber[arrNumber.length-1]) {
        angka.push(arrNumber[i])
      }
    }
    //return arrNumber
    return `angka paling besar adalah ${angka[0]} dan jumlah kemunculan sebanyak ${angka.length} kali`
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
//TEST CASES
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));

console.log(mostFrequentLargestNumbers([]));
