function graduates(students) {
  if(students.length === 0) {
    return {}
  }
  else {
    let lulus = {}
    for(let i = 0;i<=students.length-1;i++) {
      let nama = students[i].name
      let kelas = students[i].class
      let nilai = students[i].score

     if(nilai>75) {
       if(lulus[kelas]) {
         lulus[kelas].push({nama,nilai})
       }
       else {
         lulus[kelas] = [{nama,kelas}]
       }
     }
    }
    return lulus
  }
}
console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

console.log(graduates([]));
