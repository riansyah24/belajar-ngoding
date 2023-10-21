function travelingIndonesia(arr, emoney) {
  //code here
  let rute = ["Yogyakarta","Semarang","Surabaya","Denpasar"]
  let data = []
  for(let i = 0;i<arr.length;i++) {
    let data1 = []
    let str = ""
    for(let j = 0;j<arr[i].length;j++) {
      if(arr[i][j] !== "-") {
        str+=arr[i][j]
      }
      else {
        data1.push(str)
        str = ""
      }
    }
    data1.push(str)
    str = ""
    let data2 = {
      nama:data1[0],
      departureCity:data1[1],
      destinationCity:data1[2],
      transport:data1[3],
      totalCost:0
    }
    let kota = []
    for(let a = 0;a<rute.length;a++) {
      if(rute[a] === data2.departureCity || rute[a] === data2.destinationCity) {
        for(let b = a+1;b<rute.length;b++) {
          if(rute[b] === data2.destinationCity || rute[b] === data2.departureCity) {
            kota.push(rute[b])
            break
          }
          else {
            kota.push(rute[b])
          }
        }
        break
      }
    }
    for(let x = 0;x<kota.length;x++) {
      if(data2.transport === "Pesawat" && emoney === "OVO") {
        let jumlah = 275000 - (275000 * 0.15)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Pesawat" && emoney === "Dana") {
        let jumlah = 275000 - (275000 * 0.10)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Pesawat" && emoney === "Gopay") {
        let jumlah = 275000 - (275000 * 0.05)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Pesawat" && emoney === "Cash") {
        data2.totalCost+=275000
      }
      else if(data2.transport === "Kereta" && emoney === "OVO") {
        let jumlah = 250000 - (250000 * 0.15)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Kereta" && emoney === "Dana") {
        let jumlah = 250000 - (250000 * 0.10)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Kereta" && emoney === "Gopay") {
        let jumlah = 250000 - (250000 * 0.05)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Kereta" && emoney === "Cash") {
        data2.totalCost+=250000
      }
      else if(data2.transport === "Bis" && emoney === "OVO") {
        let jumlah = 225000 - (225000 * 0.15)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Bis" && emoney === "Dana") {
        let jumlah = 225000 - (225000 * 0.10)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Bis" && emoney === "Gopay") {
        let jumlah = 225000 - (225000 * 0.05)
        data2.totalCost+=jumlah
      }
      else if(data2.transport === "Bis" && emoney === "Cash") {
        data2.totalCost+=225000
      }
    }
    data.push(data2)
  }
  for (let y = 0; y < data.length; y++) {
    for (let z = 0; z < data.length - y - 1; z++) {
      if (data[z].totalCost < data[z + 1].totalCost) {
        let temp = data[z];
        data[z] = data[z + 1];
        data[z + 1] = temp;
      }
    }
  }
  return data
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'))

console.log("==================================================================================================")
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'))

console.log("==================================================================================================")
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'))

console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'))

console.log(travelingIndonesia([], 'Cash'))
