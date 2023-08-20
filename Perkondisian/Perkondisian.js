/*
Soal 1
Dik: 
1. Game Proxytia
2. Butuh 2 variabel, nama dan peran. Kedua variabel harus diisi, bila kosong ada peringatan "nama wajib diisi"
3. Terdapat 3 peran, yaitu ksatria, tabib, dan penyihir

Dit: buat program yang mengecek isi variabel peran serta mengeluarkan pesan sesuai dengan perannya
*/

let nama = "Rin";
let peran = "Disertasi";

if (nama === "" || peran === "") {
  console.log("Nama wajib diisi");
} else if (peran === "ksatria") {
  console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu`);
} else if (peran === "tabib") {
  console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran === "penyihir") {
  console.log(
    `Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu`
  );
} else if (peran !== "penyihir" || peran !== "tabib" || peran !== "ksatria") {
  console.log("Yahh jadi NPC");
}

/*
Soal 2
Dik :
1. 3 variabel, yaitu hari, bulan, dan tahun

Dit:
Membuat format tanggal. Contoh 1 Januari 1945
*/

let tanggal = 5;
let bulan = 9;
let tahun = 1970;

switch (bulan) {
  case 1:
    console.log(`${tanggal} Januari ${tahun}`);
    break;
  case 2:
    console.log(`${tanggal} Februari ${tahun}`);
    break;
  case 3:
    console.log(`${tanggal} Maret ${tahun}`);
    break;
  case 4:
    console.log(`${tanggal} April ${tahun}`);
    break;
  case 5:
    console.log(`${tanggal} Mei ${tahun}`);
    break;
  case 6:
    console.log(`${tanggal} Juni ${tahun}`);
    break;
  case 7:
    console.log(`${tanggal} Juli ${tahun}`);
    break;
  case 8:
    console.log(`${tanggal} Agustus ${tahun}`);
    break;
  case 9:
    console.log(`${tanggal} September ${tahun}`);
    break;
  case 10:
    console.log(`${tanggal} Oktober ${tahun}`);
    break;
  case 11:
    console.log(`${tanggal} November ${tahun}`);
    break;
  case 12:
    console.log(`${tanggal} Desember ${tahun}`);
    break;
}
