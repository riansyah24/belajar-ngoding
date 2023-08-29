function palindrome(str) {
  let strNew = ""
  let panjang = str.length - 1
  
  for(let i = panjang;i>=0;i--) {
    strNew+=str[i]
  }
  if(str === strNew) {
    return true
  }
  else {
    return false
  }
}

console.log(palindrome("katak"))
console.log(palindrome("blanket"))
console.log(palindrome("civic"))
console.log(palindrome("kasur rusak"))
console.log(palindrome("mister"))
