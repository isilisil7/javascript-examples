// //'mesaj' id'li elemente hiçbir şey yazmadık
// //'intro1' id'li elementin değerini 'mesaj' a atayalım:
// var intro1=document.getElementById("intro1");
// var mesaj=document.getElementById("mesaj");
// mesaj.innerHTML=intro1.innerHTML;


//getElementsByTagName()
// //ul içerisindeki li'leri listeleyim:
// //1 tane ul olduğu için tagname ile alabilirim.
// var tumListeler=document.getElementsByTagName("ul");
// var sehirler=tumListeler[0];


// var tumElemanlar=sehirler.getElementsByTagName("li");

// for(i=0; i<tumElemanlar.length; i++){
//     //alert(tumElemanlar[i].innerHTML);
// }

// //getElementsByClassName()
// var classElemanlari=document.getElementsByClassName("intro1");
// alert(classElemanlari[0].innerHTML);

// //querySelectorAll()
// //p elementi içerisinde intro1 kullananları bana ver.
// var queryElemanları=document.querySelectorAll("p.intro1");
// alert(queryElemanları.length);


// //getElementsByName()
// var isimElemanlari=document.getElementsByName("musteriAdi");
// alert(isimElemanlari[0].value);

// //'Salih Demiroğ' yazısına tıklanma özelliği atama:
// //addEventListener()
// var salih=document.getElementById("salih").addEventListener("click", rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("div1").style.color="aquamarine";
//     var isimElemanlari=document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value="Derin";
// }

// //nodelarla çalışmak
// var baslik=document.createElement("h2");
// var node=document.createTextNode("Merhaba Javascript");
// baslik.appendChild(node);

// //div1'in içine, p2'nin üstüne ekleme:
// var div1=document.getElementById("div1");
// var p2=document.getElementById("p2");
// div1.insertBefore(baslik, p2);

// //baslik'ı ekledikten sonra, p2'yi silme:
// alert("p2 siliniyor...");
// div1.removeChild(p2);

// //p1'in yerine Merhaba Javascript(baslik) koyma:
// alert("p1 değiştiriliyor...");
// var p1=document.getElementById("p1");
// div1.replaceChild(baslik, p1);

//ileri seviye fonksiyonlar:
function selam(){
    console.log("Selam");
}
selam();

const selamfonksiyonu=() =>{
    console.log("Selam 2");
}
selamfonksiyonu();


const selamfonksiyonumesajli=(mesaj, sayi=0) =>{
    console.log(mesaj + " " + sayi);
}
selamfonksiyonumesajli("Selam 3: mesajlı selam", 15);
