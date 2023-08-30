function cariMean(arr) {
  let jumlah = 0
  let panjangData = arr.length
  for(let i = 0;i<=panjangData - 1;i++) {
    jumlah+=arr[i]
  }
  return Math.round(jumlah/panjangData)
}

console.log(cariMean([1, 2, 3, 4, 5]))
console.log(cariMean([3, 5, 7, 5, 3]))
console.log(cariMean([6, 5, 4, 7, 3]))
console.log(cariMean([1, 3, 3]))
console.log(cariMean([7, 7, 7, 7, 7]))
