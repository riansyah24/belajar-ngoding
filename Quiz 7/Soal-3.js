function processSentence() {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby} ` 
}

let name = "Agus"
let age = 30
let address = "Jl. Malioboro, Yogyakarta"
let hobby = "Ngegame"
let fullSentence = processSentence(name,age,address,hobby)
console.log(fullSentence)
