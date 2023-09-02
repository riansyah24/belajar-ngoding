function groupAnimals(animals) {
  animals.sort()
  let panjang = animals.length - 1
  let acak = []
  for(let i=0;i<=panjang-1;i++) {
    if(animals[i][0] === animals[i+1][0]) {
      acak.push([animals[i],animals[i+1]])
    }
    else if(animals[i][0] !== animals[i+1][0] && animals[i][0] !== animals[i-1][0]) {
      acak.push([animals[i]])
    }
    else if(animals[i+1] === animals[panjang]) {
      acak.push([animals[i+1]])
    }
  }
  return acak
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(["cacing","ayam","kuda","anoa","kancil","unta","cicak"]))
