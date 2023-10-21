function ganjilGenapAsianGames(date,data) {
  if(date>=1 && date<=31) {
    let ganjilGenap = date%2
    let plat = []
    let result = []
    for(let i = 0;i<data.length;i++) {
      let platPecah = data[i].plat.split(" ")
      plat.push(platPecah[1])
    }
    for(let j = 0;j<plat.length;j++) {
      if(plat[j]%2 !== ganjilGenap && data[j].type === "Mobil") {
        result.push(plat[j])
      }
    }
    return result.length
  }
  else {
    return "Invalid dates"
  }
}
console.log(ganjilGenapAsianGames(30, [{
  plat: 'B 1234 ABC',
  type: 'Mobil'
}, {
  plat: 'A 2457 HE',
  type: 'Motor'
}, {
  plat: 'AB 87 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Mobil'
}]))

console.log(ganjilGenapAsianGames(26, [{
  plat: 'A 24 HE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 ERT',
  type: 'Mobil'
}]))

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 24 WE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 XOXO',
  type: 'Mobil'
}]))

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 2431 HE',
  type: 'Motor'
}, {
  plat: 'AB 8711 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Motor'
}]))

console.log(ganjilGenapAsianGames(32, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}]))

console.log(ganjilGenapAsianGames(0, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}]))
