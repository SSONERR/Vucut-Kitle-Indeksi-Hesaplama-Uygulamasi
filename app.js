// Vücut Kitle indeksi Uygulaması
alert("Vücut Kitle İndeksi Uygulamasına Hoşgeldiniz !")
let kilo = Number(prompt("Lütfen kilonuzu giriniz : "))
let boy = Number(prompt("Lütfen boyunuzu (Metre cinsinden ör: 1.73 ) giriniz : "))

let indeks = kilo/(boy**2)

if(indeks<18.5){
    alert("İdeal kilonun altında")
}else if(18.5<=indeks && indeks<25){
    alert("İdeal kiloda")
}else if(25<=indeks && indeks<29.9){
    alert("İdeal kilonun üstünde")
}else if(30<=indeks && indeks<39.9){
    alert("İdeal kilonun çok üstünde(obez)")
}else if(40<indeks){
    alert("İdeal kilonun çok üstünde(morbid obez")
}else{
    alert("Lütfen bilgilerinizi doğru giriniz !")
}