function shoppingTime(memberId, money) {
  // you can only write your code here!
  let daftarBarang = [
    {
      namaBarang:"Sepatu brand Stacattu",
      hargaBarang:1500000
    },
    {
      namaBarang:"Baju brand Zoro",
      hargaBarang:500000
    },
    {
      namaBarang:"Baju brand H&N",
      hargaBarang:250000
    },
    {
      namaBarang:"Sweater brand Unikloh",
      hargaBarang:175000
    },    
    {
      namaBarang:"Casing Handphone",
      hargaBarang:50000
    }]
    let panjang = daftarBarang.length - 1
  if(memberId === "" || memberId === undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }
  else if(money < 50000 || money === undefined) {
    return "Mohon maaf uang tidak mencukupi"
  }
  else {
    let data = {
      memberId: memberId, 
      money: money, 
      listPurchased: [],
      changeMoney: money
    }
    for(let i = 0;i<=panjang;i++) {
      if(data.changeMoney >= daftarBarang[i].hargaBarang) {
        data.changeMoney -= daftarBarang[i].hargaBarang
        data.listPurchased.push(daftarBarang[i].namaBarang)
        for(let j = i+1;j<=panjang-1;j++) {
          data.changeMoney -= daftarBarang[j].hargaBarang
          data.listPurchased.push(daftarBarang[j].namaBarang)
        }
      }
    }
    return data
  }
console}console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
