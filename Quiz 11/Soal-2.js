function meleeRangedGrouping(str) {
  if (str === "") {
    return []
  }
  else {
    let strPecah = str.split(",")
    let strRole = []
    let ranged = []
    let melee = []
    let result = [ranged,melee]
    for(let i = 0;i<strPecah.length;i++) {
      strRole.push(strPecah[i].split("-"))
    }
    for(let j = 0;j<strPecah.length;j++) {
      if(strRole[j][1] === "Ranged") {
        ranged.push(strRole[j][0])
      }
      else if(strRole[j][1] === "Melee") {
        melee.push(strRole[j][0])
      }
    }
    return result
  }
}

//TEST CASES
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
console.log(meleeRangedGrouping(''));
