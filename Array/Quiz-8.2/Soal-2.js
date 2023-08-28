let input = ["0001","Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989","Membaca"]

function dataHandling(input) {
  input.splice(4,1,"Pria","SMA Internasional Metro")
  let tglString = input[3]
  let bulan = ""
  let tglArray = tglString.split("/")
  let tglStringNew = ""
  let nama = input[1]
  let namaNew = ""
  
  if(tglArray[1] === "05") {
    bulan += "Mei"
  }
  
  for(let i = tglArray.length - 1;i>=0;i--) {
    if(i === 0) {
      tglStringNew+=tglArray[i]
    }
    else {
      tglStringNew+=tglArray[i] + "-"
    }
  }
  
  for (let i = 0;i<=input[1].length -1;i++) {
    if(i === 15) {
      break;
    }
    else {
      namaNew+=nama[i]
    }
  }
  
  console.log(input)
  console.log(bulan)
  console.log(tglArray)
  console.log(tglStringNew)
  console.log(namaNew)
}

dataHandling(input)
