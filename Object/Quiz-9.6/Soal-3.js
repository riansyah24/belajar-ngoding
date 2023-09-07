function countProfit(shoppers) {
  var listBarang = [['Sepatu Stacattu', 1500000, 10],['Baju Zoro', 500000, 2],['Sweater Uniklooh', 175000, 1]];
  let pembeli = shoppers
  if (pembeli.length === 0) {
    return shoppers
  }
  else {
    let result = [
    {
      product:listBarang[0][0],
      shoppers:[],
      leftOver:listBarang[0][2],
      totalProfit:0
    },
    {
      product:listBarang[1][0],
      shoppers:[],
      leftOver:listBarang[1][2],
      totalProfit:0
    },
    {
      product:listBarang[2][0],
      shoppers:[],
      leftOver:listBarang[2][2],
      totalProfit:0
    },
    ]
    let panjang = pembeli.length - 1
    for(let i = 0;i<=panjang;i++) {
      for(let j = 0;j<=result.length - 1;j++) {
        if(pembeli[i].product === result[j].product && pembeli[i].amount <= result[j].leftOver) {
          result[j].shoppers.push(pembeli[i].name)
          result[j].leftOver -= pembeli[i].amount
          result[j].totalProfit +=  (listBarang[j][1] * pembeli[i].amount)
        }
      }
    }
    return result
  }
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu',amount: 2},{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},{name: 'Rani',product: 'Sweater Uniklooh', amount: 2}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu',amount: 8}, {name: 'Vanessa',product: 'Sepatu Stacattu', amount: 10},{name: 'Rani', product: 'Sweater Uniklooh',amount: 1}, {name: 'Devi',product: 'Baju Zoro', amount: 1},{name: 'Lisa',product: 'Baju Zoro',amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki',amount: 5}]));
console.log(countProfit([]));
