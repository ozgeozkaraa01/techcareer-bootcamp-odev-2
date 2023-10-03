// "Tech Career" metnini ters çevirme işlemi
var metin = "Tech Career";
var tersMetin = metin.split("").reverse().join("");
console.log(tersMetin);

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki SADECE pozitif sayıların toplamını ekrana yaz

var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
var pozitifToplam = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    pozitifToplam += numbers[i];
  }
}

console.log("Pozitif Sayıların Toplamı: " + pozitifToplam);

// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki en büyük sayı hangisidir?

var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
var enBuyukSayi = numbers[0]; // Dizinin ilk elemanını başlangıçta en büyük olarak kabul ediyoruz

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > enBuyukSayi) {
    enBuyukSayi = numbers[i];
  }
}

console.log("En Büyük Sayı: " + enBuyukSayi);

// 1-50 arası sayılar içinde 3’e veya 5’e tam bölünebilen sayıları console a yaz ve kaç adet olduğunu console yaz.

var numbers = []; // 3'e veya 5'e tam bölünebilen sayıları saklamak için öncelikle bir dizi oluşturdum
var sayac = 0; // Kaç adet sayı bulunduğunu saymak için kullanılan bir sayaç

for (var i = 0; i <= 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    numbers.push(i); // 3'e veya 5'e tam bölünebilen sayıları diziye ekler
    sayac++; // Sayacı artırır
  }
}

console.log("3'e veya 5'e tam bölünebilen sayılar:", numbers);
console.log("Toplam sayı adedi:", sayac);
