function highestScore (students) {
  if(students.length === 0) {
    return {}
  }
  else {
    let result = []
    let hasil = {}
    let murid = students
    for(let i = 0;i<=murid.length-1;i++) {
        for(let j = 0;j<=murid.length-1;j++) {
          if(murid[i].kelas === murid[j].kelas) {
            if(murid[i].score > murid[j].score) {
              result.push(murid[i])
            }
          }
        }
    }
    for(let y=0;y<=murid.length-1;y++) {
      for(let z=0;z<=result.length-2;z++) {
        if(murid[y].kelas !== result[z].kelas && murid[y].kelas !== result[z+1].kelas) {
          result.push(murid[y])
        }
      }
    }
    for(let x = 0;x<=result.length-1;x++) {
      Object.assign(hasil, {
        [result[x].kelas] : {
          name:result[x].name,
          score:result[x].score
        }
      })
    }
    return hasil
  }
}

console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    kelas: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    kelas: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    kelas: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    kelas: 'wolves'
  }
]));


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    kelas: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    kelas: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    kelas: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    kelas: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    kelas: 'tigers'
  }
]));

console.log(highestScore([]))
