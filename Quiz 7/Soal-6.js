/*
1. Function konversiMenit yg mennerima parameter angka dalam ukuran waktu menit
2. Return jam:menit
*/
function konversiMenit(menit) {
  let hour = 0
  let minute = 0
  if(menit % 60 === 0) {
    hour+= menit/60
    let hourModulus = menit % 60
    if(hourModulus < 10) {
      minute =`0${hourModulus}`
    }
    else {
      minute+=hourModulus
    }
  }
  
  else {
    hour+=parseInt(menit/60)
    let minuteModulus = menit % 60
    if(minuteModulus < 10) {
      minute =`0${minuteModulus}`
    }
    else {
      minute+=minuteModulus
    }
  }
  return `${hour}:${minute}`
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))
￼Enter
