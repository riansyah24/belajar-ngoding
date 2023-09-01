//Pengambilan huruf depan
function huruf(animals) {
  let panjang = animals.length - 1
  let hurufDepan = []
  let hurufDepanResult = []
  //Pengambilan huruf pertama 
  for(let i =0;i<=panjang;i++) {
    hurufDepan.push(animals[i][0])
    hurufDepan.sort()
  }
  
  //Penyisihan huruf pertama 
  for(let i=0;i<=panjang-1;i++) {
    if(hurufDepan[i][0] === hurufDepan[i+1][0]) {
      hurufDepanResult.push(hurufDepan[i])
    }
    else if(hurufDepan[i][0] !== hurufDepan[i+1][0] && hurufDepan[i][0] !== hurufDepan[i-1][0]) {
      hurufDepanResult.push(hurufDepan[i])
    }
    else if(hurufDepan[i+1] === hurufDepan[panjang]) {
      hurufDepanResult.push(hurufDepan[i+1])
    }
  }
  return hurufDepanResult
}


//Nama hewan
function groupAnimals(animals) {
  let panjang = animals.length - 1 
  let hurufDepan = huruf(animals)
  let acak = []
  let result = []
  for(let i = 0;i<=panjang;i++) {
    for(let j = 0;j<=panjang;j++) {
      if(hurufDepan[i] === animals[j][0]) {
        acak.push(animals[j])
      }
    }
  }
  
  for(let x = 0;x<=panjang-1;x++) {
    if(acak[x][0] === acak[x+1][0]) {
      result.push([acak[x],acak[x+1]])
    }
    else if(acak[x][0] !== acak[x+1][0] && acak[x][0] !== acak[x-1][0]) {
      result.push([acak[x]])
    }
    else if(acak[x+1] === acak[panjang]) {
      result.push([acak[x+1]])
    }
  }
  return result
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(["cacing","ayam","kuda","anoa","kancil","unta","cicak"]))
