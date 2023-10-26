function palindromeRecursive(sentenc) {
  if(sentenc.length === 1) return true;
    if(sentenc.length === 2) return sentenc[0] === sentenc[1];
    if(sentenc[0] === sentenc.slice(-1)) return palindromeRecursive(sentenc.slice(1,-1))
    return false;
}
console.log(palindromeRecursive("katak"))
console.log(palindromeRecursive("blanket"))
console.log(palindromeRecursive("civic"))
console.log(palindromeRecursive("kasur rusak"))
console.log(palindromeRecursive("mister"))
