function perkalianUnik(arr) {
  let panjang = arr.length - 1
  let perkalian = 1
  let result = []
  for(let i = 0;i<=panjang;i++) {
    perkalian = perkalian * arr[i]
  }
  for(let i = 0;i<=panjang;i++) {
    result.push(perkalian/arr[i])
  }
  return result
}

console.log(perkalianUnik([2,4,6]))
console.log(perkalianUnik([1,2,3,4,5]))
console.log(perkalianUnik([1,4,3,2,5]))
console.log(perkalianUnik([1,3,3,1]))
console.log(perkalianUnik([2,1,8,10,2]))
