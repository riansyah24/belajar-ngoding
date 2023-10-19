function minDistanceBetweenGreatest(arr) {
  let sorted = arr.slice().sort()
  let angka = sorted[sorted.length-1]
  let jarak = []
  for(let x = 0;x<arr.length;x++) {
    if(angka === arr[x]) {
      jarak.push(x)
    }
  }
  if(jarak.length === 1) {
    return 0
  }
  else {
    let dekat = 99
    for(let y = jarak.length-1;y>=0;y--) {
      let minus = jarak[y] - jarak[y-1]
      if(minus < dekat) {
        dekat = minus
      }
    }
    return dekat
  }
}

console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5]))
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1]))
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1]))
