function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  if(arrPenumpang.length === 0) {
    return []
  }
  else {
    let penumpang = arrPenumpang
    let result = []
    for(let i = 0;i<= penumpang.length - 1;i++) {
      let data = {
        nama:penumpang[i][0],
        naikDari:penumpang[i][1],
        tujuan:penumpang[i][2],
        bayar:0
      }
      for(let j = 0;j<=rute.length - 1;j++) {
        if(data.naikDari === rute[j]) {
          for(let z = j;z<=rute.length - 1;z++) {
            if(data.tujuan === rute[z]) {
              break
            }
            else {
              data.bayar += 2000
            }
          }
        }
      }
      result.push(data)
    }
    return result
  }
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([])); 
