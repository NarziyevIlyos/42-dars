/**
 Massivni takrorlovchi usullar

Eslatma!!!
•	Yon ta’sirsiz funksiya (= ta’sir o’tkazmaydigan funksiya ) deb => agar funksiya o’zining argumentini (= parametri qiymatini) o’zgartirmasdan yangi natija qaytaruvchi funksiyaga aytiladi.
Misol:

function yigish(son, qushimcha) {
  return son + qushimcha; // Argumentlarni o’zgartirmaydi, faqat natija qaytaradi
}

const a = 5;
const natija = yigish(a, 3);

console.log(a);       // 5 (o’zgaruvchining asl qiymati saqlanadi)
console.log(natija);  // 8 (yangi natija)
•	

•	Yon ta’sirli funksiya (= ta’sir o’tkazuvchi funksiya) => deb o’zining argumentini (= parametri qiymatini) o’zgartiruvchi funksiyaga aytiladi.
Misol:


function massivgaQush(massiv, qiymat) {
  massiv.push(qiymat); // Argumentni o’zgartiryapti
}

const sonlar = [1, 2, 3];
massivgaQush(sonlar, 4);

console.log(sonlar); // [1, 2, 3, 4] (asl massiv o’zgardi)



Shunday qilib, funksiya argument sifatida berilgan qiymatni o’zgartirmasdan, faqat natija qaytarib bersa, bu yon ta’sir emas. Yon ta’sir bo’lishi uchun tashqi muhitga yoki argumentning asl qiymatiga ta’sir qilishi kerak.

Massivni takrorlovchi usullarning har biri => for takrorlovchisiga o’xshab massivning har bir elementi bo’ylab aylanib chiqib, ular ustida amal bajaradi.
Massivni takrorlovchi usullar nima?
Massivni takrorlovchi usullar — bu JavaScript’da massivning har bir elementi ustida ishlash uchun ishlatiladigan metodlar. Ular massivdagi elementlarni tartib bo’yicha qayta ishlash, ulardan ma’lum shartlarga javob beradiganlarini saralash yoki o’zgartirish, va umumiy natijalar yaratish imkonini beradi.
________________________________________
Nimaga kerak?
Massivni takrorlovchi usullar:
1.	Soddalik va ixchamlik: Massivlarni takrorlash uchun qo’lda yoziladigan for yoki while sikllarini qisqartiradi.
2.	Chidamlilik va aniqlik: Dastur kodini oson o’qiladigan va xatosiz bo’lishiga yordam beradi.
3.	Ma’lumotni qayta ishlash: Massiv elementlarini tahlil qilish, saralash, filtrlash, yoki o’zgartirish kabi vazifalarni bajaradi.
4.	Funktsional dasturlash: JavaScript’ning funksional dasturlash tamoyillarini qo’llab-quvvatlaydi.
1. Array.forEach()
Vazifasi: 
Massivning => har bir elementini ko’rib chiqadi, va shu elementning o’zini, indeksini va massivini masalani yechish uchun yaratilgan ichki funksiyaga => argument sifatida uzatadi. Ichki funksiya esa =>  har bir element ustida biror bir amal bajaradi. 
Lekin, forEach() funksiyasi =>  yangi massiv => qaytarmaydi. 

Qachon ishlatiladi: 
Har bir element ustida yon ta’sirli amallarni bajarish uchun (masalan, konsolga chop etish).
Javascriptda:


const sonlar = [1, 2, 3];
sonlar.forEach(son => console.log(son));
// Natija: 1, 2, 3



Parametrlar:
1.	Element (majburiy): Joriy element.
2.	Indeks (ixtiyoriy): Joriy elementning indeksi.
3.	Massiv (ixtiyoriy): Asosiy massivning o’zi.

Misol:
javascript


const sonlar = [10, 20, 30];
sonlar.forEach((element, indeks, massiv) => {
    console.log(`Element: ${element}, Indeks: ${indeks}, Massiv: ${massiv}`);
});
// Natija:
// Element: 10, Indeks: 0, Massiv: 10,20,30
// Element: 20, Indeks: 1, Massiv: 10,20,30
// Element: 30, Indeks: 2, Massiv: 10,20,30



Misol:



let sonlar = [1, 2, 3, 4, 5];

sonlar.forEach((element, index, massiv) => {
    massiv[index] = element + 2; // Massivning har bir elementini ikki birlikka oshiramiz
});

console.log(sonlar); // Natija: [3, 4, 5, 6, 7]


Misol:


// Tashqi o’zgaruvchi
let yigindi = 0;

// Massiv
const sonlar = [1, 2, 3, 4, 5];

// forEach yordamida har bir elementni yig’ib tashqi o’zgaruvchini o’zgartiramiz
sonlar.forEach(son => {
    yigindi += son; // Tashqi o’zgaruvchi o’zgaryapti (yon ta’sir)
    console.log(`Hozirgi yig’indi: ${yigindi}`);
});

// Natijani ko’rish
console.log(`Jami yig’indi: ${yigindi}`); // Natija: 15




2. Array.map()
Vazifasi: 
Massivning => har bir elementini ko’rib chiqadi, va shu elementning o’zini, indeksini va massivini masalani yechish uchun yaratilgan ichki funksiyaga => argument sifatida uzatadi.
Ichki funksiya => bu elementni => qayta ishlaydi va natijani => map() funksiyasiga qaytaradi. map() funksiya esa => qaytgan natijalarni => yig’ib, => yangi massiv yaratadi va ushbu => yangi massivni => qaytaradi. Qaytarilgan yangi massivni saqlash uchun yangi o’zgaruvchi kerak bo’ladi.

Qachon ishlatiladi: Asl massivni o’zgartirmagan holda, elementlarni o’zgartirib, yangi massiv yaratish kerak bo’lganda.
javascript


const sonlar = [1, 2, 3];
const kvadratlar = sonlar.map(son => son ** 2);
console.log(kvadratlar); // Natija: [1, 4, 9]


Parametrlar:
4.	Element (majburiy): Joriy element.
5.	Indeks (ixtiyoriy): Joriy elementning indeksi.
6.	Massiv (ixtiyoriy): Asosiy massivning o’zi.
Misol:
javascript


const sonlar = [1, 2, 3];
const kvadratlar = sonlar.map((element, indeks) => {
    console.log(`Element: ${element}, Indeks: ${indeks}`);
    return element ** 2;
});

console.log(kvadratlar); // [1, 4, 9]


3. Array.flatMap()
Vazifasi: 
Har bir elementni qayta ishlaydi va natijani (= massiv ichidagi ichki massivlarni) bir daraja chuqurlikda ochib beradi.
Ishlash jarayoni:
Massivning => har bir elementini ko’rib chiqadi, va shu elementning o’zini, indeksini va massivini masalani yechish uchun yaratilgan ichki funksiyaga => argument sifatida uzatadi.
(= massiv qaytaruvchi ) Ichki funksiya => bu elementni => qayta ishlaydi va natijani => massiv sifatida => map() funksiyasiga qaytaradi. map() funksiya esa => qaytgan natijalarni => yig’ib, => yangi massiv yaratadi va ushbu => yangi massivni => flat() funksiyasiga parameter sifatida uzatadi. flat() funksiyasi esa => massivning har bir elementini (= ichki massivlarni) bir darajaga ochib, asosiy massivga chiqarib beradi va bir darajaga tekislangan massivni qaytaradi. Qaytarilgan yangi massivni saqlash uchun yangi o’zgaruvchi kerak bo’ladi.
flatMap() usuli => asosan massiv qaytaruvchi ichki funksiyalar bilan ishlash uchun mo’ljallangan. Chunki uning asosiy vazifasi ichki funksiyaning natijasi sifatida qaytarilgan massivlarni bir darajaga tekislashdir. Agar ichki funksiya massiv qaytarmasa, flatMap() asosan map() kabi ishlaydi.
________________________________________
flatMap() ning vazifasi
1.	Mapping: Massivning har bir elementi ichki funksiyaga uzatiladi.
2.	Flattening (Tekislash): Ichki funksiya qaytaradigan natijalar birlashtirilib, bitta massivga yig’iladi. Agar ichki funksiya massiv qaytarsa, uning elementlari bitta darajaga ochiladi.
________________________________________
Ichki funksiya massiv qaytarsa
Bu holatda flatMap() eng to’g’ri ishlaydi, chunki uning tekislash vazifasi shu holat uchun mo’ljallangan.
Misol: Harflarga ajratish
javascript

const so’zlar = ["salom", "dunyo"];

const harflar = so’zlar.flatMap(so’z => so’z.split(‘‘));

console.log(harflar);
// Natija: [‘s’, ‘a’, ‘l’, ‘o’, ‘m’, ‘d’, ‘u’, ‘n’, ‘y’, ‘o’]
Tushuntirish:
•	so’z.split(‘‘) har bir so’zni massivga ajratadi (masalan, "salom" -> [‘s’, ‘a’, ‘l’, ‘o’, ‘m’]).
•	flatMap() ushbu massivlarni bitta darajaga ochib, bitta massivga birlashtiradi.
________________________________________
Ichki funksiya massiv qaytarmasa
Agar ichki funksiya massiv qaytarmasa, flatMap() natijani tekislashni amalga oshirmaydi va faqat map() kabi ishlaydi.
Misol: Sonlarni ikki barobar oshirish
javascript

const sonlar = [1, 2, 3, 4];

const natija = sonlar.flatMap(son => son * 2);

console.log(natija);
// Natija: [2, 4, 6, 8]
Tushuntirish:
•	son * 2 har bir elementni ikki barobar oshiradi va bitta qiymat qaytaradi.
•	Tekislash bo’lmagani uchun bu jarayon map() usuli bilan bir xil natija beradi.
________________________________________
Ichki funksiya ko’p hollarda massiv qaytaradi
Ko’pincha, flatMap() massiv qaytaruvchi ichki funksiyalar bilan ishlatiladi, masalan:
1.	Ma’lumotlarni to’g’ri formatlash yoki qayta ishlashda:
javascript

const ma’lumot = ["Ism: Ali", "Ism: Vali"];
const ism = ma’lumot.flatMap(satr => satr.split(‘: ‘)[1]);
console.log(ism); 
// Natija: [‘Ali’, ‘Vali’]
2.	Ichki massivlarni birlashtirishda:
javascript

const guruhlar = [[1, 2], [3, 4], [5]];
const barcha = guruhlar.flatMap(guruh => guruh);
console.log(barcha);
// Natija: [1, 2, 3, 4, 5]
________________________________________
flatMap() va map() farqi
•	Agar ichki funksiya massiv qaytarsa, flatMap() uni tekislaydi.
•	Agar ichki funksiya oddiy qiymat qaytarsa, flatMap() va map() bir xil ishlaydi.
________________________________________
Xulosa
•	flatMap() asosan massiv qaytaruvchi ichki funksiyalar uchun mo’ljallangan.
•	Agar ichki funksiya massiv qaytaradigan bo’lsa, flatMap() natijalarni birlashtiradi va bitta darajaga tekislaydi.
•	Agar ichki funksiya massiv qaytarmasa, u map() kabi ishlaydi, lekin bu holatda flatMap() dan foydalanish maqsadga muvofiq emas. 


Qachon ishlatiladi: Mapping (= asl massivni saqlagan holda, uning har bir elementi ustida biror amal bajarish ) va ichki massivlarni bir daraja ochish kerak bo’lsa:. 
Javascript


const suzlar = ["salom", "dunyo"];
const harflar = suzlar.flatMap(suz => suz.split(‘‘));
console.log(harflar); // Natija: [‘s’, ‘a’, ‘l’, ‘o’, ‘m’, ‘d’, ‘u’, ‘n’, ‘y’, ‘o’]

Parametrlar:
7.	Element (majburiy): Joriy element.
8.	Indeks (ixtiyoriy): Joriy elementning indeksi.
9.	Massiv (ixtiyoriy): Asosiy massivning o’zi.
Misol:
javascript


const suzlar = ["salom", "dunyo"];
const harflar = suzlar.flatMap((element, indeks) => {
    console.log(`Element: ${element}, Indeks: ${indeks}`);
    return element.split(‘‘);
});
console.log(harflar); // [‘s’, ‘a’, ‘l’, ‘o’, ‘m’, ‘d’, ‘u’, ‘n’, ‘y’, ‘o’]


4. Array.filter()
Vazifasi: Shartga javob beradigan elementlarni => tanlab, yangi massiv => yaratadi.
Ishlash jarayoni: 
Massivning => har bir elementini ko’rib chiqadi, va shu elementning o’zini, indeksini va massivini masalani yechish uchun yaratilgan, shartga ega ichki funksiyaga => argument sifatida birma-bir uzatadi.
Ichki funksiya => esa o’zining parametriga birinma-ketin uzatilgan ushbu argumentlarni SHARTga ko’ra tekshiradi => shartga to’g’ri kelgan elementlarni filter() funksiyasiga qaytaradi, filter() funksiyasi esa ushbu qaytgan elementlarni => yangi bir massivga joylashtirib boradi va uni QAYTARADI. 
Ya’ni: 
Agar SHART => rost bo’lsa, element filter() funksiyasiga qaytariladi. Agar SHART => noto’g’ri bo’lsa , element => qaytarilmaydi va keyingi iteratsiya (= takrorlash ) amalga oshiriladi.


Qachon ishlatiladi: Elementlarni => saralash kerak bo’lganda.
javascript


const sonlar = [1, 2, 3, 4, 5];
const juftlar = sonlar.filter(son => son % 2 === 0);
console.log(juftlar); // Natija: [2, 4]


Parametrlar:
1.	Element (majburiy): Joriy element.
2.	Indeks (ixtiyoriy): Joriy elementning indeksi.
3.	Massiv (ixtiyoriy): Asosiy massivning o’zi.
Misol:
javascript


const sonlar = [1, 2, 3, 4];
const juftlar = sonlar.filter((element, indeks) => {
    console.log(`Element: ${element}, Indeks: ${indeks}`);
    return element % 2 === 0;
});
console.log(juftlar); // [2, 4]



5. Array.reduce()
Vazifasi: Barcha elementlarni birlashtirib, bitta natijaga olib keladi.

Ishlash jarayoni: 

massivdagi reduce() usulining 2 ta parametri bor: 
•	1-parametr: massivning har bir elementini => qayta ishlovchi => ichki funksiya (= CALLBACK FUNTION), 
•	2-parametr esa CALLBACK funksiyaning accumulator parametri uchun boshlang’ich qiymatdir. 
Default : Boshlang’ich qiymat => ixtiyoriy
•	Siz to’plovchiga (= akkumulyatorga) => boshlang’ich qiymatni berishingiz mumkin . Agar to’plovchiga (= akkumulyatorga) =>  boshlang’ich qiymat => berilmasa, massivning 1-elementi => akkumulyatorning boshlang’ich qiymati sifatida ishlatiladi va iteratsiya (= takrorlash) => 2-elementdan boshlanadi.

Reduce() funksiyasi  => xuddi for operatoriga o’xshab, massivning => har bir elementi bo’ylab yurib chiqadi va har bir elementni, uning indeksini, va tegishli  massivni =>  argument sifatida o’zining 1-parametri bo’lgan ichki funksiyasiga (= CALLBACK funksiyasiga )  => uzatadi. 
Ichki funksiyasining 4 ta parametri bor: 
•	1-parametr – accumulator (= to’plovchi);
accumulator  => o’zida element qiymatlarini yig’ib boruvchi PARAMETR;
•	2-parametr - massivdan reduce() usuli uzatgan => ELEMENT;
•	3-parametr - massivdan reduce() usuli uzatgan => element INDEKSI;
•	 4-parametr - reduce() usuli uzatgan => butun bir massiv).  
Ichki funksiya (= Callback funksiya  ) => esa har bir element ustida ishlaydi va To’plovchining (= accumulator) qiymatini => har bir takrorlashda YANGILAB boradi. 
Oxirgi ishdan keyin, uni => yakuniy natija sifatida => reduce() funksiyasiga beradi.  reduce() funksiyasi esa uni yakuniy natija sifatida => qaytaradi.
Reduce: massivni bitta qiymatga => QISQARTIRADI (= Reduce).
Argumentlarni amalda ko’rish uchun misol:
Javascriptda:
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((accumulator, currentElement, indexOfCurrentElement, array) => {
  console.log("Accumulator:", accumulator, "Current:", currentElement, "Index:", indexOfCurrentElement, "Array:", array);
  return accumulator + current;
}, 0);

console.log(sum); // Output: 10
Konsol chiqishi :
Accumulator: 0 Current: 1 Index: 0 Array: [1, 2, 3, 4]
Accumulator: 1 Current: 2 Index: 1 Array: [1, 2, 3, 4]
Accumulator: 3 Current: 3 Index: 2 Array: [1, 2, 3, 4]
Accumulator: 6 Current: 4 Index: 3 Array: [1, 2, 3, 4]

Useful : Birlashtirish uchun FOYDALI
•	Umumiy foydalanish holatlariga quyidagilar kiradi:
1.	Biror bir massivdagi => raqamlarni yig’ish .
2.	Massivlarni tekislash (= ichki massivlarni ochish ) .
3.	Ob’ektlarni qurish yoki ma’lumotlarni guruhlash .
4.	O’rtacha qiymat, ko’paytma yoki boshqa jamlangan natijalarni hisoblashda.

Qachon ishlatiladi: Elementlarni yig’indi, ko’paytma yoki boshqa yakuniy natijaga keltirish uchun. 
javascript


const sonlar = [1, 2, 3, 4];
const yig’indi = sonlar.reduce((sum, son) => sum + son, 0);
console.log(yig’indi); // Natija: 10


Misol:
javascript


const sonlar = [1, 2, 3];
const yig’indi = sonlar.reduce((accumulator, element, indeks) => {
    console.log(`Accumulator: ${accumulator}, Element: ${element}, Indeks: ${indeks}`);
    return accumulator + element;
}, 0);
console.log(yig’indi); // 6


6. Array.reduceRight()
Vazifasi: reduce() bilan bir xil, lekin o’ngdan chapga ishlaydi.
Qachon ishlatiladi: Teskari tartibda birlashtirish kerak bo’lganda.
javascript


const sonlar = [1, 2, 3, 4];
const natija = sonlar.reduceRight((str, son) => `${str}-${son}`, ‘‘);
console.log(natija); // Natija: "-4-3-2-1"


Parametrlar:
reduce() bilan bir xil, lekin o’ngdan chapga ishlaydi.
Misol:
Javascriptda:


const suzlar = ["a", "b", "c"];
const natija = suzlar.reduceRight((acc, element) => {
    console.log(`Accumulator: ${acc}, Element: ${element}`);
    return acc + element;
}, "");
console.log(natija); // "cba"



7. Array.every()
Vazifasi: 
Massivdagi barcha elementlar (= every elements) => shartga javob berishini tekshiradi.
Ishlash jarayoni: 
Massivning => har bir elementini ko’rib chiqadi, va shu elementning o’zini, indeksini va massivini masalani yechish uchun yaratilgan, shartga ega ichki funksiyaga => argument sifatida birma-bir uzatadi.
Ichki funksiya => esa o’zining parametriga birinma-ketin uzatilgan ushbu argumentlarni SHARTga ko’ra tekshiradi. Agarda bitta element => shartga to’g’ri kelmasa, false qiymatini every() funksiyasiga qaytaradi, every () funksiyasi esa takrorlashni to’xtatadi va ushbu qaytgan qiymatni => QAYTARADI. Agarda barcha elementlar shartga mos kelsa, every () funksiyasi => TRUE qaytaradi.

Qachon ishlatiladi: 
Hammasi shartga mos keladimi, deb tekshirish kerak bo’lsa.
javascript


const sonlar = [2, 4, 6];
const hammasiJuftmi = sonlar.every(son => son % 2 === 0);
console.log(hammasiJuftmi); // Natija: true


Parametrlar:
1.	Element (majburiy): Joriy element.
2.	Indeks (ixtiyoriy): Joriy elementning indeksi.
3.	Massiv (ixtiyoriy): Asosiy massivning o’zi.

Misol:
javascript


const sonlar = [2, 4, 6];
const hammasiJuft = sonlar.every((element, indeks) => {
    console.log(`Element: ${element}, Indeks: ${indeks}`);
    return element % 2 === 0;
});
console.log(hammasiJuft); // true



8. Array.some()
Vazifasi: Massivda hech bo’lmasa bitta element => shartga javob beradimi yoki yo’q shuni tekshiradi. 
Ishlash jarayoni: 
Massivning => har bir elementini ko’rib chiqadi, va shu elementning o’zini, indeksini va massivini masalani yechish uchun yaratilgan, shartga ega ichki funksiyaga => argument sifatida birma-bir uzatadi. 
Ichki funksiya => esa o’zining parametriga birinma-ketin uzatilgan ushbu argumentlarni SHARTga ko’ra tekshiradi. Agarda bitta element => shartga to’g’ri kelsa, true qiymatini every() funksiyasiga qaytaradi, every () funksiyasi esa takrorlashni to’xtatadi va ushbu qaytgan qiymatni => QAYTARADI. Agarda barcha elementlar shartga mos kelmasa, every () funksiyasi => FALSE qaytaradi.

Qachon ishlatiladi: Kamida bitta shartga mos keladigan element => borligini bilish kerak bo’lsa.
javascript


const sonlar = [1, 3, 5];
const juftBorMi = sonlar.some(son => son % 2 === 0);
console.log(juftBorMi); // Natija: false


Parametrlar:
1.	Element (majburiy): Joriy element.
2.	Indeks (ixtiyoriy): Joriy elementning indeksi.
3.	Massiv (ixtiyoriy): Asosiy massivning o’zi.

Misol:
javascript


const sonlar = [1, 3, 4];
const juftBor = sonlar.some((element, indeks) => {
    console.log(`Element: ${element}, Indeks: ${indeks}`);
    return element % 2 === 0;
});
console.log(juftBor); // true


9. Array.from()
Vazifasi: 
To’plamni yoki iterable obyektni => massivga aylantiradi. 
Ishlash jarayoni:
Ichki elementlarini aylantirsa bo’ladigan obyektlarni for operatoriga o’xshab aylanib chiqadi, har bir ichki elementini => massiv elementiga aylantirib, uni yangi massivga joylab boradi va takrorlash tugaganidan keyin, shu yangi massivni qaytaradi.
Bundan tashqari, Array.from() => mapping funksiyasini qabul qiladi, ushbu new map() funksiya har bir elementni => o’zgartirish uchun ishlatiladi.

Qachon ishlatiladi: To’plamni => massivga o’tkazish kerak bo’lganda. 
Array.from() usuli haqida:
Array.from() usuli => iterable (= aylantiriladigan) obyektlarni (masalan, Set, Map, yoki hatto String) yoki massivga o’xshash obyektlarni (masalan, arguments) haqiqiy massivga aylantirish uchun ishlatiladi.
"To’plam" deganda nima nazarda tutiladi?
"To’plam" so’zi JavaScriptdagi => iterable (= aylantiriladigan) obyektlarni bildiradi:
1.	Set obyektlari: Takrorlanmaydigan qiymatlar => to’plami.
2.	Map obyektlari: Kalit-qiymat juftliklari saqlanadigan obyekt.
3.	String: Har bir belgisi iterable bo’lgani uchun massivga o’tkazilishi mumkin.
4.	arguments obyekti: Funksiya ichida massivga o’xshash obyekt.
5.	For-of bilan ishlaydigan iterable obyektlar.
________________________________________
Array.from() funksiyasining => string bilan ishlashi
String => iterable (= aylantiriladigan) hisoblanadi, chunki undagi har bir belgi => ketma-ket iteratsiya qilinishi (= aylantirilishi) mumkin. Array.from() => stringning har bir belgisini => massivga aylantiradi.
Misol:
Javascriptda:


const matn = "Hello";

// Stringni massivga aylantirish
const massiv = Array.from(matn);
console.log(massiv); // [‘H’, ‘e’, ‘l’, ‘l’, ‘o’]

Bu yerda har bir belgi massivning => alohida elementi sifatida o’zlashtiriladi.
________________________________________
Array.from() => iterable (= aylantiriladigan) obyektlar bilan ishlashi
1. Set obyektlari bilan
Set — takrorlanmas qiymatlar to’plami. 
Array.from() orqali Set obyektini => massivga o’tkazish mumkin.
javascript


const tuplam = new Set([1, 2, 3, 3, 4]);
const massiv = Array.from(tuplam);
console.log(massiv); // [1, 2, 3, 4]


2. Map obyektlari bilan
Map — kalit-qiymat juftliklaridan tashkil topgan obyekt hisoblanadi. Array.from() yordamida uni massivga aylantirish mumkin.
Javascriptda:


const xarita = new Map([
    [‘a’, 1],
    [‘b’, 2],
  ]);
  const massiv = Array.from(xarita);
  console.log(massiv); // [[‘a’, 1], [‘b’, 2]] 
  

3. arguments obyektini massivga aylantirish
arguments => massivga o’xshash, lekin haqiqiy massiv emas. Uni Array.from() bilan massivga aylantirish mumkin.
javascript


function misol() {
    const massiv = Array.from(arguments);
    console.log(massiv);
  }
  misol(1, 2, 3); // [1, 2, 3]
  

Qachon Array.from() ishlatiladi?
•	String bilan: Belgilarni massivga o’tkazish uchun.
•	Set yoki Map bilan: Iterable obyektlarni massivga aylantirish uchun.
•	arguments obyektida: Funksiya parametrlarini haqiqiy massivga aylantirish uchun.
•	Umumiy aylantiriladigan obyektlar bilan: Massivga o’xshagan, lekin massiv bo’lmagan obyektlarni konvertatsiya qilish (= aylantirish) uchun.
________________________________________

javascript


const str = "hello";
const massiv = Array.from(str);
console.log(massiv); // Natija: [‘h’, ‘e’, ‘l’, ‘l’, ‘o’]


Parametrlar:
1.	Iterable (majburiy): Aylantiriladigan iterable obyekt.
2.	Map-funktsiya (ixtiyoriy): Har bir elementni qayta ishlovchi funksion.
Misol:
javascript


const massiv = Array.from("123", element => Number(element));
console.log(massiv); // [1, 2, 3]



10. Array.keys()
Vazifasi: 
Array.keys() usuli => massivning boshidan oxirigacha ya’ni 1-elementidan oxirgi elementigacha yurib chiqadi va iterator sifatida indekslarni qaytaradi.
Iterator - bu to’plamning boshidan oxirigacha qadam-baqadam harakatlanuvchi hisoblanadi, va har bir yurgan qadamida to’plamda qanday element turganini ko’rsatib boradi. 

Ishlash jarayoni:
Massivning ichiga kirib, uning indekslarini ol va qaytar.
Array.keys() qanday ishlaydi?
1.	Massivning indekslari bo’yicha iteratsiya qilish:
o	keys() usuli massivning barcha indekslari bo’yicha iteratsiya qiluvchi iterator obyektini qaytaradi.
2.	Har bir qadamda:
o	Iterator massivning keyingi indeksini qaytaradi.
3.	Oxiriga yetganda:
o	Iterator done: true signalini qaytaradi.
Misol:

const sonlar = [10, 20, 30]; // Elementlar

const iterator = sonlar.keys(); // Indekslar iteratorini olamiz

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true } // Tugadi

Bu yerda:
•	value – bu indeks (0, 1, 2).
•	done – iterator oxiriga yetganligini bildiruvchi belgi.

Qachon ishlatiladi: 
Indekslarni (= kalitlarni) olish kerak bo’lganda.
javascript


const sonlar = [10, 20, 30];
const kalitlar = Array.from(sonlar.keys());
console.log(kalitlar); // Natija: [0, 1, 2]


Parametrlar: Hech qanday parametr qabul qilmaydi. Indekslarni iteratsiya qilish uchun iterator sifatida indekslarni qaytaradi.
Misol:
javascript


const sonlar = [10, 20, 30];
for (const key of sonlar.keys()) {
    console.log(key); // 0, 1, 2
}


11. Array.entries()
Vazifasi: 
Har bir element va uning indeksini [index, value] ko’rinishida qaytaradi.

Qachon ishlatiladi: Indeks va qiymatni birgalikda ishlatish kerak bo’lganda. 
javascript


const sonlar = [10, 20, 30];
for (const [index, value] of sonlar.entries()) {
    console.log(index, value);
}
// Natija:
// 0 10
// 1 20
// 2 30


Parametrlar: Hech qanday parametr qabul qilmaydi. [indeks, qiymat] juftligini iteratsiya qiladi.
Misol:
javascript


const sonlar = [10, 20, 30];
for (const [index, value] of sonlar.entries()) {
    console.log(index, value);
}
// Natija:
// 0 10
// 1 20
// 2 30



12. Array.with()
Ishlash jarayoni:

Array.with() usuli => biror bir massivdan nusxa oladi va olingan nusxaning ichiga kirib, o’zining 1-parametrida ko’rsatilgan indeksni topadi va uni 2-parametrida ko’rsatilgan qiymat BILAN (WITH) almashtiradi va yangi massivni qaytaradi. 

Vazifasi: 
Asl massivni o’zgartirmasdan, undan nusxa olgan holda Belgilangan indeksdagi qiymatni o’zgartirib, yangi massiv qaytarish.

Qachon ishlatiladi: Dastlabki massivni o’zgartirmasdan indeksdagi qiymatni yangilash kerak bo’lganda.
javascript


const sonlar = [10, 20, 30];
const yangisi = sonlar.with(1, 25);
console.log(yangisi); // Natija: [10, 25, 30]

Parametrlar:
1.	Element (majburiy): Joriy element.
2.	Indeks (majburiy): Joriy elementning indeksi.
Misol:
javascript


const sonlar = [10, 20, 30];
const yangisi = sonlar.with(1, 25);
console.log(yangisi); // [10, 25, 30]


13. Array Spread (...)
Vazifasi: 
spread operatori ( ... ) - massiv nomi oldidan yozilsa, shu massivdan nusxa oladi va ochilgan yangi massivga joylashtiradi. Bundan tashqari yangi elementlarni qo’shish imkonini beradi: 
•	Boshiga qo’shish uchun: [yangiElementlar, ...massiv]. 
•	Oxiriga qo’shish uchun: [...massiv, yangiElementlar]. 
•	Ikki massivni birlashtirish uchun: [...birinchiMassiv, ...ikkinchiMassiv].

 */