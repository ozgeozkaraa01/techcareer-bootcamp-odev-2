// 1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır. (REPLACE)

let metin1 = " Çağatay Yıldız ";
let duzeltilmisMetin = metin1.replace(/\s/g, "");

console.log(duzeltilmisMetin);

// 2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)

var metin2 = "cagatay yildiz";
var yeniMetin = metin2.replace(/\s+/g, "").toUpperCase();

console.log(yeniMetin);

// 3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE)

var metin3 = "******Çağatay Yıldız";
console.log(metin3.replaceAll("*", "")); // metindeki tüm yıldız karakterlerini boş bir dize ile değiştirir.

// 4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)

var metin4 = "Çağatay  Yıldız";
var yeniMetin = metin4.replace(/\s{2,}/g, " "); // Ardışık iki veya daha fazla boşluğu bir boşlukla değiştir
console.log(yeniMetin);

// 5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE)

var metin5 = "**Tech Career**";
var yeniMetin = metin5.replace(/\*/g, "");
console.log(yeniMetin);

// 6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü)

var metin6 = "Tech Career";
var yeniMetin = "***" + metin6 + "***";

console.log(yeniMetin);

// 7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING)

var metin7 = "Tech Career Bilişim teknolojileri";
var kelimeler = metin7.split(" "); // Metni boşluklara göre böldüm
var sonKelime = kelimeler[kelimeler.length - 1]; // Son kelimeyi alır
var yeniMetin = metin7.replace(sonKelime, sonKelime.toUpperCase()); // Son kelimeyi büyült

console.log(yeniMetin);

// 8) "Tech bilişim" kelimelerin ilk harflerini büyült (Substring ve upper)

var metin8 = "Tech bilişim";
var kelimeler = metin8.split(" "); // artık kelimeler dizisi "Tech" ve "bilişim" olmak üzere iki kelime içericek
var yeniKelimeler = [];

for (var i = 0; i < kelimeler.length; i++) {
  var kelime = kelimeler[i];
  var ilkHarfBuyuk = kelime.substring(0, 1).toUpperCase(); // İlk harfi büyült
  var digerHarfler = kelime.substring(1); // kelimenin ilk harfi dışındaki harfi almak için substring(1) kullandım
  var yeniKelime = ilkHarfBuyuk + digerHarfler;
  yeniKelimeler.push(yeniKelime);
}

var yeniMetin = yeniKelimeler.join(" "); // Kelimeleri tekrar birleştirmiş oldum

console.log(yeniMetin);
