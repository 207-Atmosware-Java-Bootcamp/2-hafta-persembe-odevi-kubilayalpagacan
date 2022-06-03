//ÖDEV
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?

//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayıların toplamı?
//5.adım: tek sayıların gösterimi?

//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayıların toplamı?
//8.adım: çift sayıların gösterimi?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise çalışmasın (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun

var number = Number(prompt("Sayı giriniz..."));
function TotalNumber() {
  var numberCount=0;
  var totalNumbers=0;
  for (var i = 1; i <=number; i++) {
    if(i==7){continue}
    if(i>=100){break}
    numberCount++;
    totalNumbers+=i;
  }
  document.write(numberCount+" tane sayı var <br>")
  document.write("Sayıların toplamı: "+totalNumbers+"<br>")
}
function Odd() {
  var numberOdd=0;
  var totalOdds=0;
  document.write("Tek Sayılar: ")
  for (var i = 1; i <=number; i++) {
    if(i==7){continue}
    if(i>=100){break}
    if(i%2==1){
    document.write(i+" ")
    numberOdd++;
    totalOdds+=i
    }
  }
  document.write("<br>"+numberOdd+" tane tek sayı var <br>")
  document.write("Tek Sayıların toplamı: "+totalOdds+"<br>")
}
function Even() {
  var numberEven=0;
  var totalEvens=0;
  document.write("Çift Sayılar: ")
  for (var i = 1; i <=number; i++) {
    if(i>=100){break}
    if(i%2==0){
    document.write(i+" ")
    numberEven++;
    totalEvens+=i
    }
  }
  document.write("<br>"+numberEven+" tane tek sayı var <br>")
  document.write("Çift Sayıların toplamı: "+totalEvens+"<br>")
}
function Homework(){
  if(number!=44 && number>1){
    TotalNumber();
    Odd();
    Even();
  }
  else if(number<=1){
    document.write("Başlangıçtan küçük sayı girilmez tekrar deneyiniz.");
  }
  else{
    document.write("Secret Key girdiniz.")
  }
}
Homework()
