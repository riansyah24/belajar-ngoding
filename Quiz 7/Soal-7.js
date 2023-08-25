/*
1. Function xo(str)
2. Jika karakter x dan o sama maka true, jika beda maka false
*/
function xo(str) {
  let panjang = str.length
  let x = ""
  let o = ""
  for(let i =0;i<=panjang-1;i++) {
    if(str[i] === "x") {
      x+=str[i]
    }
    else if(str[i] === "o") {
      o+=str[i]
    }
  }
  if (x.length === o.length) {
    return true
  }
  else {
    return false
  }
}

console.log(xo("xoxoxo"))
console.log(xo("oxooxo"))
console.log(xo("oxo"))
console.log(xo("xxxooo"))
console.log(xo("xoxooxxo"))￼Enter
