function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000
  let duitLarry = 95000
  let duitJack = 90000
  
  let data = []
  for(let i = 0;i<tradeActivity.length;i++) {
    for(let j = 0;j<tradeActivity[i].length;j++) {
      let str = ""
      let data1 = {
      name:"",
      tambmin:"",
      angka:""
      }
      for(let k = 0;k<tradeActivity[i][j].length;k++) {
        if(tradeActivity[i][j][k] !== "+" && tradeActivity[i][j][k] !== "-" && tradeActivity[i][j][k] !== "%") {
          str+=tradeActivity[i][j][k]
        }
        else if(tradeActivity[i][j][k] === "+") {
          data1.tambmin = "tambah"
          data1.name = str
          str = ""
        }
        else if(tradeActivity[i][j][k] === "-") {
          data1.tambmin = "kurang"
          data1.name = str
          str = ""
        }
      }
      data1.angka = parseInt(str)
      let dataResult = {
        name:data1.name,
        deposit:0,
        owner:""
      }
      if(dataResult.name === "Jeff Bezos") {
        dataResult.owner = "Amazon"
      }
      else if(dataResult.name === "Larry Page") {
        dataResult.owner = "Google"
      }
      else if(dataResult.name === "Jack Ma") {
        dataResult.owner = "Alibaba"
      }
      if(dataResult.name === "Jeff Bezos" && data1.tambmin === "tambah") {
        dataResult.deposit = duitJeff + (duitJeff*(data1.angka/100))
        duitJeff = duitJeff + (duitJeff*(data1.angka/100))
      }
      else if(dataResult.name === "Jeff Bezos" && data1.tambmin === "kurang") {
        dataResult.deposit = duitJeff - (duitJeff*(data1.angka/100))
        duitJeff = duitJeff - (duitJeff*(data1.angka/100))
      }
      else if(dataResult.name === "Larry Page" && data1.tambmin === "kurang") {
        dataResult.deposit = duitLarry - (duitLarry*(data1.angka/100))
        duitLarry = duitLarry - (duitLarry*(data1.angka/100))
      }
      else if(dataResult.name === "Larry Page" && data1.tambmin === "tambah") {
        dataResult.deposit = duitLarry + (duitLarry*(data1.angka/100))
        duitLarry = duitLarry + (duitLarry*(data1.angka/100))
      }
      else if(dataResult.name === "Jack Ma" && data1.tambmin === "kurang") {
        dataResult.deposit = duitJack - (duitJack*(data1.angka/100))
        duitJack = duitJack - (duitJack*(data1.angka/100))
      }
      else if(dataResult.name === "Jack Ma" && data1.tambmin === "tambah") {
        dataResult.deposit = duitJack + (duitJack*(data1.angka/100))
        duitJack = duitJack + (duitJack*(data1.angka/100))
      }
      data.push(dataResult)
    }
  }
  return data
}
console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]));

console.log("==============================================================================");

console.log(economyChangeSummary([
  ['Jeff Bezos-10%']
]))
