function deleteUndefinedKeys(data) {
  let result = []
  if (data.length === 0) {
    return 'No data'
  }
  for (let i = 0; i < data.length; i++) {
    let cleaned = {}
    for (let key in data[i]) {
      if (data[i][key] !== undefined) {
        cleaned[key] = data[i][key]
      }
    }
    result.push(cleaned)
  }
  return result
}
console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));

console.log(deleteUndefinedKeys([{
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));

console.log(deleteUndefinedKeys([]));
