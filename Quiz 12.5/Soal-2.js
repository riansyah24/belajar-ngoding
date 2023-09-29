function cariPelaku(str) {
  return str.match(/abc/g).length
}

// TEST CASES
console.log(cariPelaku('mabcvabc'))
console.log(cariPelaku('abcdabdc'))
console.log(cariPelaku('bcabcac'))
console.log(cariPelaku('abcabcabc'))
console.log(cariPelaku('babcbacabc'))
