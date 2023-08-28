let input = [
  ["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"],
  ["0002","Dika Sembiring","Medan","10/10/1992","Bermain gitar"],
  ["0003","Winona","Ambon","25/12/1965","Memasak"],
  ["0004","Bintang Senjaya","Martapura","6/4/1970","Berkebun"],
  ]

function dataHandling() {
  let a,b,c,d,e;
  let f = []
  for(let i = 0;i<=input.length-1;i++) {
    a=input[i][0]
    b=input[i][1]
    c=input[i][2]
    d=input[i][3]
    e=input[i][4]
    f.push(`Nomor ID:${a}\n Nama Lengkap:${b}\n TTL:${c}, ${d}\n Hobby:${e}`)
  }
  return f.join(`\n`)
}

console.log(dataHandling())
