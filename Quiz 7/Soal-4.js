/*
1. Function bandingkanAngka yg menerima 2 parameter
2. True apabila angka2 > angka1, false apabila angka2 < angka1, dan -1 jika keduanya sama 
*/
function bandingkanAngka(angka1,angka2) {
  if(angka2>angka1) {
    return true
  }
  else if(angka1>angka2) {
    return false
  }
  else if(angka1 === angka2) {
    return -1
  }
}

console.log(bandingkanAngka(5,8))
console.log(bandingkanAngka(5,3))
console.log(bandingkanAngka(4,4))
console.log(bandingkanAngka(3,3))
console.log(bandingkanAngka(17,2))
