function changeMe(arr) {
  if(arr.length === 0) {
    console.log("")
  }
  else {
    let panjang = arr.length - 1
    for(let i = 0;i<=panjang;i++) {
      if(i === 0) {
        console.log(`1. ${arr[i][0]} ${arr[i][1]}`)
      }
      let nama = `${arr[i][0]} ${arr[i][1]}`
      console.log(nama)
      let bio = {
        firstName : arr[i][0],
        lastName : arr[i][1],
        gender : arr[i][2],
        age:arr[i][3]
      }
      if (bio.age !== undefined) {
        let time = new Date().getFullYear()
        bio.age = time - arr[i][3]
      }
      else {
        bio.age = "Invalid Birth Year"
      }
      console.log(bio)
    }
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
changeMe([])
