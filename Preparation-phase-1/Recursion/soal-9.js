function virusCheckRecursive(str, viruses) {
  str = str.toLowerCase()
  if(!viruses){
    return "There is no virus"
  }
  let virus=[]
  if(viruses.length<2){
      virus = viruses
    } else {
        virus = viruses.split("|")
    }
  if(str.length<1){
        return 0
    } else {
        for(let c=0;c<virus.length;c++){
            if(virus[c].toLowerCase()==str[0]){
                return 1+virusCheckRecursive(str.slice(1,str.length),viruses)
            }
        }
        return virusCheckRecursive(str.slice(1,str.length),viruses)
    }
}

console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q'))
console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r'))
console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p'))
console.log(virusCheckRecursive('mjBgPlzks', 'm'))
console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x'))
console.log(virusCheckRecursive('RsMFjBUjvIaP'))
console.log(virusCheckRecursive(''))
