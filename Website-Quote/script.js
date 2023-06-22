let button = document.getElementById("button");
let quote = document.getElementById("quote");

// array quote
let array = [
  '"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja."',
  '"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati."',
  '"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri."',
  '"Hidup tak selamanya tentang pacar."',
  '"Aku memang diam. Tapi aku tidak buta."',
  '"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apa pun yang bisa disebut berani."',
  '"Jalan yang sulit sering kali mengarah ke tujuan yang indah."',
  '"Gagal itu makanan sehari-hari, Itu biasa, yang penting bagaimana kamu menyikapinya. Evaluasi dan terus bangkit. Jika gagal lagi? Bangkit lagi."',
  '"Jalan yang sulit sering kali mengarah ke tujuan yang indah."',
  'Matahari akan tenggelam sore ini, namun esok pagi ia akan terbit lagi. Hari ini mungkin doa dan harapanmu belum terkabul. Namun esok hari, boleh jadi akan terkabul."',
  ' "Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan."',
];

button.addEventListener("click", () => {
  if (array.length > 0) {
    let randomArray = Math.floor(Math.random() * array.length);
    let hasilArray = array[randomArray];
    quote.innerText = hasilArray;
  }
});
