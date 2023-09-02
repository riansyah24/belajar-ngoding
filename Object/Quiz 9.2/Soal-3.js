function cariMedian(arr) {
  arr.sort(function(a, b){return a-b})
  if(arr.length%2 !== 0) {
    return arr[Math.floor(arr.length/2)]
  }
  else {
    let varA = arr[arr.length/2]
    let varB = arr[(arr.length/2)-1]
    return (varA+varB)/2
  }
}
console.log(cariMedian([1,2,3,4,5]))
console.log(cariMedian([1,3,4,10,12,13]))
console.log(cariMedian([3,4,7,6,10]))
console.log(cariMedian([1,3,3]))
console.log(cariMedian([7,7,8,8]))
