/*  DEĞİŞKENLER
//console.log("hi, console");
//console.clear();

//int-double
var age;
age=12;
//console.log("age değeri: " + age);
var size=37.5;
//console.log("shoe size: ", size);

//string
var fullname="Işıl Özkaynak";
//console.log(fullname);

//Array
var names=['Işıl', 'Havva', 'Mehmet'];

//console.log(typeof names);
let address={
    city:'Mersin',
    country:'Türkiye',
    postCode:'33100'
}

//function
var calculateAge=function(){
    return 0;
}

console.log(typeof calculateAge); */

//.............................................................................
/*TÜR DÖNÜŞÜMLERİ
let num1='5';
let num2='10';
console.log(num1+num2);//510
console.log(typeof num1, typeof num2);//string string
console.log(typeof (num1+num2));//string

//sayısal değer yapalım:(string to number)
let num3=Number('5');
let num4=Number('10');
console.log(num3+num4);//15
console.log(typeof num3, typeof num4);//number number
console.log(typeof (num3+num4));//number

//number to string
let val;
val=String(10);
console.log(val);//10
console.log(typeof val);//string

//bool to string
val=String(true);
console.log(val);//true
console.log(typeof val);//string
console.log(val.length);//4 (4 karakterli bir değer)

//bir Date tanımlama
val=new Date();
console.log(val);//Wed Mar 31...(bugünün tarihi)
console.log(typeof val);//object
console.log(val.length);//undefined

//Date to string
val=String (new Date());
console.log(val);//Wed Mar 31...(bugünün tarihi)
console.log(typeof val);//string
console.log(val.length);//45

//array to string
//bir array tanımla:
val=[1,2,3,4,5];
console.log(val);//(5) [1,2,3,4,5]
console.log(typeof val);//object
console.log(val.length);//5
//şimdi git ve stringe çevir:
val=String([1,2,3,4,5]);
console.log(val);//1,2,3,4,5
console.log(typeof val);//string
console.log(val.length);//9

//toString() kullanımı:
val=(10).toString();
val=(false).toString();
val=([1,2,3,4,5]).toString();


//bool to number
val=Number(true);
console.log(val);//1
console.log(typeof val);//number
val=Number(false);
console.log(val);//0
console.log(typeof val);//number

//null to number
val=Number(null);
console.log(val);//0
console.log(typeof val);//number

//character to number
val=Number('a');
console.log(val);//NaN(sayısal değere karşılık gelmez)

//array to number
val=Number([1,2,3]);
console.log(val);//NaN 

//parseInt (Number() metoduna karşılık gelir.)
//parseFloat
val=parseInt('10');
console.log(val);//10
console.log(typeof val);//number

val=parseInt('10.5');
console.log(val);//10
console.log(typeof val);//number

val=parseFloat('10.5'); 
console.log(val);//10.5
console.log(typeof val);//number

val=parseFloat('10.5'); 
console.log(val);//10.5
console.log(typeof val);//number
console.log(val.toFixed(2));//10.50 (toFixed(2)=> .'dan sonra 2 basamak göster.)
//.............................................................................
*/

/*ÖRNEKLER*/
/*
//Basit Boy-Kilo İndeksi Hesaplama
var weightAda=58;
var heightAda=1.70;

var weightCan=98;
var heightCan=1.80;

var indexAda=parseFloat(weightAda/(heightAda*heightAda));
var indexCan=parseFloat(weightCan/(heightCan*heightCan));


var value=(indexAda===indexCan);

console.log("Ada: ", indexAda.toFixed(2));
console.log("Can: ", indexCan.toFixed(2));
console.log(value);

let adaZayif=(indexAda>=0) && (indexAda<=18.4);
let adaNormal=(indexAda>=18.5) && (indexAda<=24.9);
let adaKilolu=(indexAda>=25) && (indexAda<=29.9);
let adaSisman=(indexAda>=30) && (indexAda<=34.9);
console.log(adaZayif);
console.log(adaNormal);
console.log(adaKilolu);
console.log(adaSisman);


// IF-ELSE İLE
var value;
if(indexAda>=0 && indexAda<=18.4){
    value="Zayıf";
    console.log(value);
}
else if(indexAda>=18.5 && indexAda<=24.9) {
    value="Normal";
    console.log(value);
}
else if(indexAda>=25.0 && indexAda<=29.9){
    value="Fazla Kilolu";
    console.log(value);
}
else if(indexAda>=30.0 && indexAda<=34.9){
    value="Şişman (Obez)";
    console.log(value);
}
else{
    value="Yanlış değer girdiniz.";
    console.log(value);
}
*/

//----------------------------------------------------------------------------------
//DATE-TIME
/*
let d=new Date();
console.log(d);//tarihi saati yazar.(31 mart 2021 18:15:24)
console.log(typeof d);//object

//SET methods
d.setDate(1);
d.setFullYear(2020);
d.setHours(19);
d.setMonth(3); 

//GET methods
console.log(d.getDate());//ayın gününü yazar. (31)
console.log(d.getDay());//haftanın kaçıncı günü olduğunu yazar. 0-6 arasındadır. 0.gün pazar günüdür. (3->çarşamba)
console.log(d.getFullYear());//yılı yazar(2021)
console.log(d.getHours());//saati yazar(18)
console.log(d.getMonth());//yılın kaçıncı ayı olduğunu yazar. 0-11 arasındadır. 0 ocağa denk gelir.(2->mart ayı)
console.log(d.getSeconds());//saniyeyi yazar.her sayfa yenilendiğinde değişir.


let birthday=new Date(1997, 8, 9);
console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
*/

/*
//ÖRNEK DATE UYGULAMASI
//Şimdiki gün, ay, yıl bilgilerini yazdırın:
var d = new Date();
console.log("Bugünün tarihi: ");
console.log(
  "Gün: ",
  d.getDate(),
  "/ Ay: ",
  d.getMonth() + 1,
  "/ Yil: ",
  d.getFullYear()
);

//Tarih ve saat bilgisi içeren bir date object oluşturun:
var t = new Date();
console.log("Zaman: ");
console.log(
  "Saat: ",
  t.getHours(),
  "/ Dakika: ",
  t.getMinutes(),
  "/ Saniye: ",
  t.getSeconds()
);
//hocanın cevabı:
var t2 = new Date("3/11/2020 23:55:50");
var t3 = new Date(2020, 2, 11, 23, 55, 50);
console.log(t2);
console.log(t3);

// 1/1/1999 tarihinden 1 gün öncesini gösteriniz:
var day = new Date(1999, 0, 1);
console.log("1/1/1999 tarihinden 1 gün öncesi: ");

console.log(day.getFullYear(), day.getMonth() + 1, day.getDate());

day.setDate(31);
day.setMonth(11);
day.setFullYear(1998);

console.log(day.getFullYear(), day.getMonth() + 1, day.getDate());
//hocanın cevabı
var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC);

console.log("---------------");
//ikisi arasındaki geçen zaman:
var today = new Date();
console.log(today);

console.log("Geçen yil süresi: ", today.getFullYear() - day.getFullYear());
console.log("Toplam geçen zaman: ", today.getTime() - day.getTime());

console.log("-------hocanın cevabı--------");
var start = new Date("1/1/1990");
var end = new Date("1/1/1991");

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log("milisecond: " + milisecond);
console.log("saniye: " + saniye);
console.log("dakika: " + dakika);
console.log("saat: " + saat);
console.log("gun: " + gun);

//2019 yılı mayıs ayının 2.haftasının pazarı hangi tarihe denk geliyor?
var d = new Date(2019, 4, 1);

console.log(
  "yil: ",
  d.getFullYear(),
  "/ ay: ",
  d.getMonth() + 1,
  "/ gun",
  d.getDate(),
  "/ gunlerden: ",
  d.getDay()
);

console.log("-------hocanın cevabı anne------------");
var annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

console.log(annelerGunu.getDay());

while (annelerGunu.getDay() != 0) {
  annelerGunu.setDate(annelerGunu.getDay() + 1);
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

console.log("-------hocanın cevabı------------");
//Yaş hesaplama:
var today = new Date();
console.log(today.getFullYear(), today.getMonth() + 1, today.getDate());
let birthday = new Date(1997, 8, 9);
var yas = today.getFullYear() - birthday.getFullYear();
console.log(yas);

console.log("-------hocanın cevabı------------");
let birthday2 = new Date("8/1/1985");

var ageDifMs = Date.now() - birthday2.getTime();
var ageDate = new Date(ageDifMs);
console.log(ageDate.getFullYear() - 1970);

//console.log(birthday2.getTime());
//console.log(Date.now());
*/

/*
//ÖRNEKLER
//NUMBER FUNCTIONS
var num = 15.123456789;
//toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(3)); //15.1

//ondalık kısmı 3 basamaklı olan sayı
console.log(num.toFixed(3)); //15.123

//en yakın sayıya yuvarla
console.log(Math.round(num)); //15

//aşağı yuvarla
console.log(Math.floor(num)); //15

//yukarı yuvarla
console.log(Math.ceil(num));
16;

//1,2,10,56,20 sayılarının en küçüğü ve en büyüğünü bul
console.log("küçük sayı: " + Math.min(1, 2, 10, 56, 20)); //1
console.log("büyük sayı: " + Math.max(1, 2, 10, 56, 20)); //56

//sayı aralığını kullanıcının belirleyeceği rastgele sayı üretin.
var min = 50;
var max = 100;
console.log(parseInt(min + Math.random() * (max - min)));

//bir personelin yaptığı mesaiye görre aldığı maaaşı hesaplama
//brüt maaş:3700tl
//brüt mesai:10.3tl
//ağustos ayı mesai toplamı:42 saat ise toplam brüt maaaş nedir?
const b_maas = 3700;
const b_mesai = 10.3;

var p_mesai = 10.3;
var brutMaas = b_maas + 42 * b_mesai;
console.log("Ağustos ayı brüt maaşı: " + brutMaas + " TL");

//brüt maaş üzerinden yapılacak kesinti oranı %25 ise toplam maaş nedir?
netMaas = brutMaas - brutMaas * 0.25;
console.log("Kesintili maaş: " + netMaas.toFixed(2));
*/

/*
//ÖRNEKLER
//STRINGS
var sentence =
  " Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

//cümle kaç karakterlidir?
console.log(sentence.length);

//kaç kelimeden oluşuyor?
console.log(sentence.trim().split(" ").length);

//tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase());

//cümlenin başındaki ve sonundaki boşlukları silin.
console.log(sentence.trim());

//'-' karakterini silin.
console.log(sentence.replace("-", ""));

//url içerisinden str kısmını çıkartın.
var str = "http://";
console.log(url.substr(str.length)); //0.indeksten str'nin bittiği yere kadar olan kısmı siler.
console.log(url.slice(str.length)); //0.indeksten str'nin bittiği yere kadar olan kısmı siler.

//url hangi protocolu kullanıyor?(http or https)
console.log(url.startsWith("http")); //true
console.log(url.startsWith("https")); //false

//url içinde '.com' geçiyor mu?
console.log(url.indexOf(".com")); //17 (17. index demek)
//indexOf() alternatifi: include()
console.log(url.includes(".com")); //true

//url'yi geçerli bir url haline getiriniz.
console.log(url.toLocaleLowerCase()
            .replace(/ /g, '-') //  /(sth)/g ifadesi (sth) yerine ne yazılırsa onu sağdaki ifade ile değiştirir.
            .replace(/ı/g, 'i')
);

*/

//TEKİL ELEMENT
// var val;
// val = document.getElementById("header");
// val = document.getElementById("header").id; // OR val = val.id; (Çünkü yukarıda val'ı atadık.)
// val = document.getElementById("header").className; // OR val = val.className;

// val.style.fontSize='55px'; //(h1'in büyüklüğü 55px olur.)

// val = document.getElementById("header").innerText = "<b>Yeni Başlık</b>"; //<b>Yeni Başlık</b> şeklinde yazar. b etiketini yorumlamaz.
// val = document.getElementById("header").innerHTML = "<b>Yeni Başlık</b>";
// console.log(val);

//ÇOKLU ELEMENT
// let val;
// // val=document.getElementsByClassName('list-group-item');
// // val[0].style.color='blue';

// val = document.getElementsByClassName("list-group-item");
// // val[0].style.margin = "10px";

// for(var i=0; i<val.length; i++){
//   console.log(val[i].style.margin='10px');
// }

// let val;
// let list = document.querySelector(".list-group");
// val = list;
// val=list.childNodes;
// console.log(val);


// var taskList=document.querySelector('#list-group');
// console.log(taskList);
//element silme:
//taskList.remove(); //ul ve içerisindeki her şeyi siler.

//taskList.childNodes[1].remove(); //ilk elemanı siler.
//childNode textnode ve elemenları birlikte içerir.
//childNodes[0]=textnode
//childNodes[1]=ilk eleman
//childNodes[2]=textnode
//childNodes[3]=ikinci eleman, ...

//children ise direkt elemanlara erişir.
//taskList.children[0].remove(); //ilk elemanı siler.


//attribute silme
//taskList.children[0].removeAttribute('class'); //ilk elemanın class attribute'u silinir.


// const btn=document.querySelector('#myButton');
// btn.addEventListener('click', function(e){
//   console.log('btn clicked');

//   e.preventDefault();
// });

// btn.addEventListener('click', btnClick);

// function btnClick(){
//   console.log('button clicked');
// }

// //mouse up&down
// //mouse down
// const btn=document.querySelector('#myButton');
// btn.addEventListener('mousedown', eventHandler);
// //mouse up
// btn.addEventListener('mouseup', eventHandler);

// function eventHandler(event){
//   console.log(`event type: ${event.type}`);
// }

// //mouse enter & mouse leave
// //mouse enter
// const ul=document.querySelector('#list-group');
// ul.addEventListener('mouseenter', eventHandler);

// //mouse leave
// ul.addEventListener('mouseleave', eventHandler);

// //mouse over&out
// //mouse over
// btn.addEventListener('mouseover', eventHandler);

// //mouse out
// btn.addEventListener('mouseout', eventHandler);


//keyboard events
const input=document.querySelector('#myInput');
input.addEventListener('keydown', eventHandler);
input.addEventListener('keyup', eventHandler);
input.addEventListener('focus', eventHandler);

function eventHandler(e){
  console.log('event type: ' + e.type);
  console.log('key code: ' + e.keyCode);
  console.log('value: ' + e.target.value);
  
  //focus
  e.target.style.backgroundColor='red';
  e.target.style.borderColor='blue';
}