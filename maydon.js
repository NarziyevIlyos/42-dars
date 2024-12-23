/**
 1.	Scope (Maydon yoki Ko’rinish doirasi)

Ta’rif:
Scope - kod ichidagi o’zgaruvchilarga qaysi joyda kirish mumkinligini belgilaydi. Bu o’zgaruvchining "ko’rinish joyi"ni aniqlaydi.
•	Inglizcha sinonimlar: visibility, context.
•	O’zbekcha sinonimlar: ko’rinish maydoni, ishlash maydoni.
Turlari:
1.	Global Scope (Umumiy ko’rinish):
o	Barcha kodga kirish mumkin bo’lgan ko’rinish doirasi.
o	Fayl yoki dastur darajasida e’lon qilinadi.
2.	Function Scope (Funksiya maydoni):
o	Funksiya ichida e’lon qilingan o’zgaruvchilarga faqat o’sha funksiya ichida kirish mumkin.
3.	Block Scope (Blok maydoni):
o	{} qavslar ichida let va const yordamida e’lon qilingan o’zgaruvchilarga faqat o’sha qavs ichida kirish mumkin.

Misol:
Javascriptda:

let globalVar = "Global"; // Global Scope

function example() {
    let localVar = "Local"; // Function Scope
    console.log(globalVar); // OK, global o’zgaruvchi ko’rinadi
    console.log(localVar); // OK, funksiya ichidagi o’zgaruvchi ko’rinadi
}

example();

console.log(globalVar); // OK
console.log(localVar); // ERROR, localVar faqat funksiya ichida ko’rinadi


har bir scope ( {} blok yoki funksiya) uchun JavaScript xotiradan alohida joy ajratadi, lekin bu joylashuvning o’z mexanizmi bor. Bu jarayon JavaScript’da Lexical Environment orqali boshqariladi.
________________________________________
Jarayon qanday ishlaydi?
1.	Scope (= maydon) yaratish:
o	Har safar yangi scope (funksiya yoki blok) yaratilganda, JavaScript uchun yangi Lexical Environment (xotira tuzilmasi) hosil bo’ladi.
o	Bu yangi Lexical Environment => o’zining lokal o’zgaruvchilarini saqlaydi va tashqi (ota) Lexical Environment bilan bog’lanadi (scope chain).
2.	Xotira ajratish:
o	Scope ichida e’lon qilingan (= yaratilgan va qiymat berilgan) barcha o’zgaruvchilar va funksiyalar xotirada saqlanadi.
o	JavaScript faqat kerakli va mavjud scope’larni xotirada saqlaydi. Foydalanilmayotgan scope’lar uchun Garbage Collector ishlaydi va kerak bo’lmagan ma’lumotlarni xotiradan tozalaydi.
________________________________________
Misol:
Javascriptda:

function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log(outerVar);  // Kirish mumkin (outerVar tashqi scope’dan)
    }

    innerFunction();
}

outerFunction();



Xotira uchun jarayon:
1.	Global Scope (Lexical Environment):
o	Global o’zgaruvchilar (outerFunction) va funksiyalar bu yerda saqlanadi.
2.	outerFunction Scope:
o	outerVar uchun => xotiradan joy ajratiladi.
o	innerFunction e’lon qilinganligi uchun o’zining xotirasi (Lexical Environment) bilan bog’lanadi.
3.	innerFunction Scope:
o	innerVar uchun => xotiradan joy ajratiladi.
o	Bu scope tashqi scope (outerFunction) bilan bog’langan.
________________________________________
Blok scope ({}) uchun:
JavaScript’da let, const va var bilan o’zgaruvchilarni e’lon qilganimizda => blok scope o’ziga xos xotiraga ega bo’ladi:
Javascriptda:

{
    let blockScopedVar = "Block Scope";
    const blockScopedConst = "Block Scope Const";
    console.log(blockScopedVar);  // OK
}
console.log(blockScopedVar);  // Xato: blockScopedVar ko’rinmaydi



1.	Blok scope uchun yangi xotira:
o	{} ichida e’lon qilingan blockScopedVar va blockScopedConst o’z xotirasida saqlanadi.
o	Bu xotira faqat => blok tugagancha mavjud bo’ladi.

Xulosa:
•	Har bir scope (funksiya, blok yoki global) uchun JavaScript => xotiradan alohida joy ajratadi.
•	Bu joylashuv:
o	Scope’ning o’zgaruvchilarini saqlash uchun
o	Tashqi scope’lar bilan bog’lanish uchun ishlatiladi.
•	Foydalanilmayotgan scope’lar uchun Garbage Collector orqali xotira bo’shatiladi.


2. Global Scope (Umumiy ko’rinish doirasi)
Ta’rif:
Global Scope - bu ko’rinish doirasida e’lon qilingan o’zgaruvchilar dasturdagi barcha funksiyalardan va bloklardan kirish imkoniyatiga ega.
•	Inglizcha sinonimlar: global context, top-level scope.
•	O’zbekcha sinonimlar: umumiy qamrov, yuqori daraja.
Misol:
javascript

let globalVar = "Global variable"; // Global scope

function display() {
    console.log(globalVar); // OK, globalVar ko’rinadi
}

display();


3. Function Scope (Funksiya doirasi)
Ta’rif:
Funksiya ichida e’lon qilingan o’zgaruvchilar faqat o’sha funksiya ichida ko’rinadi. Bunga misol sifatida var yoki let orqali e’lon qilingan o’zgaruvchilarni olish mumkin.
•	Inglizcha sinonimlar: local scope, inner scope.
•	O’zbekcha sinonimlar: funksiya maydoni, ichki maydon.
Misol:
javascriptda

function test() {
  let localVar = "I am local"; // Function scope
  console.log(localVar);
}

test();
console.log(localVar); // ERROR, localVar faqat test() ichida ko’rinadi



Closure

Closure => bu ESLAB QOLUVCHI ichki funksiya bo’lib, tashqi funksiyadagi o’zgaruvchilarga murojat qilib, ularni o’zida saqlaydigan va ulardan foydalana oladigan, o’zining lexical environmentini (= mahalliy muhitini) ESLAB QOLUVCHI funksiyaga aytiladi.
Masalan: 
function funct(){
  let sum = 0;
  return function(){
    sum++;
    return sum;
  }
}

let res = funct();

console.log(res()); // 1
console.log(res()); // 2
console.log(res()); // 3



Closure deb => ichki funksiyaning tashqi funksiyadagi o’zgaruvchilarga murojat qilib, ularni saqlab qolishi va ulardan foydalana olishi.
 Closure => ichma-ich joylashgan funksiyalar muhitini o’zida saqlovchi mexanizimdir.
Closure => ichma-ich joylashgan funksiyalar muhitini o’zida saqlab, ichki funksiyaning tashqi funksiyadagi o’zgaruvchilarga murojat qilib, ularni saqlab qolishi yoki kerak bo’lsa ulardan foydalana olish imkoniyatini beruvchi tuzilmaga  (= tizimga) aytiladi. 
Lexical environment (= static structure) => deb kod bajarilayotganda (yoki funksiyalar e’lon qilinayotganda) foydalanish mumkin bo’lgan o’zgaruvchilar, konstantalar, va funksiyalarni o’z ichiga olgan maydon yoki maydonlar to’plamidan iborat tuzilma (= static structure). 
Lexical environmentni (= Mahalliy muhitni) yaratish bosqichlari: 
1)	Creation Phase (= Tashkil qilish):
•	Javascipt => Dastur kodini yuklash va ishga tushirishdan oldin, barcha o’zgaruvchilar va funksiyalarni HOISTING qiladi (= ENG YUQORIGA ularning faqat => NOMINI => KO’TARIB oladi). 
•	Lekin qiymat berish => hali bajarilmaydi.

•	Lexical Environment (= o’zgarmas tuzilma) tashkil qilinadi.

2)	Execution Phase (= bajarilish bosqichi);

•	Javascript => o’zgaruvchilarga qiymat berib, kodlarni ishga tushira boshlaydi.
•	Agar biror o’zgaruvchi topilmasa, tashqi lexical environmentdan (= o’zgarmas tuzilmadan) qidiradi.
Lexical environment  => ikkita qismdan tashkil topgan:
1)	Environment Record ( o’ziga qarashli elementlar = local environment) – o’zining shaxsiy o’zgaruvchilari, constantalari va funksiyalarni saqlovchi maydonga aytiladi.
2)	Outer Lexical Environment (= tashqi mahalliy muhit ) – deb o’zining o’zgaruvchisidan foydalanish imkoniyatini beradigan tashqi maydonga aytiladi.

Lexical Environment – bu kod bajarilayotganda yoki funksiyalar e’lon qilinayotganda mavjud bo’lgan o’zgaruvchilar, konstantalar va funksiyalarni qamrab oladigan ma’lumotlar tuzilmasi. 
Bu tushunchani static structure sifatida izohlash to’g’ri:
•	Statik tuzilma deganda funksiyalar e’lon qilingan joy va ular foydalanishi mumkin bo’lgan o’zgaruvchilarning aniqligi nazarda tutiladi.
•	Bu dinamik bajarilish vaqtida emas, balki kod yozilgan paytda belgilanadi.
Tahlil:
1.	"kod bajarilayotganda yoki funksiyalar e’lon qilinayotganda":
lexical environment funksiyalar e’lon qilinadigan joyda statik ravishda aniqlanadi va keyinchalik bajarilish jarayonida undan foydalaniladi.
2.	"foydalanish mumkin bo’lgan o’zgaruvchilar, konstantalar va funksiyalar":
Lexical Environment o’zining scope’ida mavjud bo’lgan barcha o’zgaruvchilarni, konstantalarni va funksiyalarni o’z ichiga oladi.
3.	"maydon yoki maydonlar to’plamidan iborat tuzilma":
lexical environment bir nechta ichki va tashqi scope’larni (maydonlarni) qamrab oladi. Bu scope’lar zanjir (= SCOPE CHAIN) sifatida ishlaydi.
4.	"(= static structure)":
lexical scope (leksikal ma’nolar doirasi) statik bo’lib, kod qayerda yozilganiga qarab belgilanadi va bajarilish vaqtida o’zgarmaydi.
To’ldiruvchi fakt:
•	Lexical Environment har bir funksiyaning yoki blokning o’zining lokal o’zgaruvchilarini saqlaydi va u tashqi scope orqali yuqoriga qarab o’zgaruvchilarni izlaydi.
Misol:
function outer() {
  let a = 10; // Environment Record’ga yoziladi
  const b = 20;

  function inner() {
      let c = 30;
      console.log(a, b, c); // Tashqi va lokal lexical environmentdan qiymatlar olinadi
  }

  inner();
}

outer(); // 10, 20, 30
•	

Lexical scope => bu ichki funksiyadagi qayta-qiymat berilmagan o’zgaruvchiga qiymatga ega xuddi shu nomdagi o’zgaruvchini topmaguncha,  bosichma-bosqich tashqi funksiya ichiga kirishiga ruxsat beradigan, qidiruv natijasida topilgan  xuddi shu nomdagi o’zgaruvchining qiymatini o’zida saqlash imkoniyatini beradigan tuzilma (= maydondir). 
Sodda qilib aytganda farzand funksiya qiymatsiz o’zgaruvchisiga qiymat berish uchun ajdodlari bo’lgan funksiyalardan qidirishni boshlaydi: 
Birinchi bo’lib Ota funksiyadan shu o’zgaruvchini qidiradi. Agar uni otasidan topsa qidirishni to’xtatadi va shu o’zgaruvchisiga uni qiymat sifatida beradi. Tashqaridagi global o’zgaruvchilarning kirib kelishiga yo’l qo’ymadi. 
Agar Ota funksiyadan bu o’zgaruvchini topa olmasa, bobo funksiyadan qidiradi. Agar uni bobosidan topsa qidirishni to’xtatadi va shu o’zgaruvchisiga uni qiymat sifatida beradi. Tashqaridagi global o’zgaruvchilarning kirib kelishiga yo’l qo’ymadi. 

Agar Bobo funksiyadan bu o’zgaruvchini topa olmasa, bobokalon funksiyasidan qidiradi. Agar uni bobokalonidan uni topsa qidirishni to’xtatadi va shu o’zgaruvchisiga uni qiymat sifatida beradi. Tashqaridagi global o’zgaruvchilarning kirib kelishiga yo’l qo’ymadi. 

Agar Bobokalon funksiyadan bu o’zgaruvchini topa olmasa, ajdod funksiyasidan qidiradi. Agar uni ajdodidan topsa qidirishni to’xtatadi va shu o’zgaruvchisiga uni qiymat sifatida beradi. Tashqaridagi global o’zgaruvchilarning kirib kelishiga yo’l qo’ymadi. 
Shu tarzda ichki funksiya =>  qiymatsiz o’zgaruvchisiga qiymat berish uchun shu funksiyaga egalik qiluvchi funksiyalarga kirib boradi va shu o’zgaruvchini qidiradi. Qidiruv shu o’zgaruvchining qiymati topilmaguncha tepaga qarab davom etadi. Agar topilsa, qidiruv to’xtaydi. Agar hattoki global maydonda ham topilmasa undefined qaytadi.

Agar ikkinchi funksiya o’zgaruvchisiga qiymatni qidirishni boshlasa va xuddi shu nomdagi o’zgaruvchi ham ota funksiyasida, ham o’zining farzand funksiyasida bo’lsa, u holda u ota funksiyasi ichida turgan shu o’zgaruvchining qiymatini o’zining o’zgaruvchisiga qiymat sifatida beradi. Xuddiki bir odam otasining aytganini qiladi, bolasining aytganini emas. 

SCOPE CHAINING (= Maydonlarning yuqoriga qarab ulanib ketishi )
Javascriptda SCOPE CHAINING (= Maydonlarning yuqoriga qarab zanjir bo’lib ulanib ketishi ) – bu bir funksiyaning ichidagi o’zgaruvchilarning qiymatini aniqlash jarayonidir.  Agar biror o’zgaruvchi bir funksiya ichida mavjud bo’lmasa, JavaScript uni Otasidan (= tashqi funksiyadan ) qiidiradi. Bu jarayon chaqirilgan funksiyaning qaysi KONTEKST (= SCOPE = MAYDON) kelayotganini aniqlaydi. 

Lexical Scope (= nazariy o’zgarmas tuzilma):
•	Bu kod yozilgan joyga asoslanib qaysi o’zgaruvchilar va funksiyalardan foydalanish mumkinligini aniqlovchi nazariy tushuncha.
•	Leksikal scope => bu kod strukturasi asosida qaysi o’zgaruvchilar mavjudligini aniqlab beradi.
________________________________________
Lexical Environment:
•	Bu kod bajarilish paytida yaratiladigan amaliy mexanizm.
•	Lexical Environment - bu ma’lumotlar saqlanadigan xotira tuzilmasi bo’lib, u kod bajarilayotgan vaqtda o’zgaruvchilarni saqlaydi va boshqaradi.
________________________________________
Farqning sodda tilda izohi:
•	Lexical Scope – bu nazariy tushuncha: "Qaysi o’zgaruvchilardan foydalanish imkoniyati borligi ko’rsatadi."
•	Lexical Environment – bu amaliy mexanizm: "O’zgaruvchilarni xotirada qayerda va qanday saqlashni boshqaradi."
________________________________________
Misol orqali tushuntirish:
javascriptda

let globalVar = "Global";

function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log(globalVar);  // Lexical Scope tufayli foydalanish mumkin
        console.log(outerVar);   // Lexical Scope tufayli foydalanish mumkin
        console.log(innerVar);   // Lexical Scope tufayli foydalanish mumkin
    }

    innerFunction();
}

outerFunction();


Lexical Scope (nazariy):
•	Kod yozilgan joyga qarab:
o	innerFunction (= ichki funksiya) qayerdan boshlab xususiy va tashqi o’zgaruvchilardan foydalanish huquqiga ega ekanligini belgilaydi.
o	U globalVar, outerVar va innerVar o’zgaruvchilarini ko’ra oladi, chunki ular funksiya yozilgan joygacha mavjud.
Lexical Environment (amaliy):
•	Kod ishlayotgan paytda:
o	Har bir funksiya chaqirilganda yangi Lexical Environment yaratiladi.
o	Masalan:
1.	Global Lexical Environment:
	globalVar o’zgaruvchisini => saqlaydi.
2.	outerFunction Lexical Environment:
	outerVar o’zgaruvchisini saqlaydi va Global Lexical Environmentga bog’lanadi.
3.	innerFunction Lexical Environment:
	innerVar o’zgaruvchisini saqlaydi va outerFunction => Lexical Environmentga bog’lanadi.
________________________________________
Yakuniy xulosa:
1.	Lexical Scope - kod yozilgan joyga qarab aniqlanadi va doimiy (statik) bo’ladi.
2.	Lexical Environment - kod bajarilish jarayonida har bir scope {} uchun => xotira ajratib, o’zgaruvchilarni saqlaydi va boshqaradi.
________________________________________

Muhim!!!
Bu misolda:
•	Lexical Scope => innerFunction => qaysi o’zgaruvchilarni ko’ra olishini belgilaydi.
•	Lexical Environment esa kod bajarilganda bu o’zgaruvchilarni saqlash va ularga kirishni ta’minlashni amalga oshiradi.
•	O’zgaruvchilar va funksiyalarni o’zida saqlaydi. 

1)	Dynamic Scope: 
•	O’zgaruvchilar chaqirilgan joyda aniqlanadi, bu esa uni dinamik qiladi. 
•	JavaScriptda ishlatilmaydi, boshqa tillarda uchraydi.

Garbage Collector (GC) JavaScript’da foydalanilmayotgan scope yoki ma’lumotlarni avtomatik ravishda aniqlaydi va xotirani tozalaydi. Bu jarayon asosan o‘zgartirilmaydigan, foydalanilmayotgan yoki mavjud bo‘lmagan koddan ajratilgan obyektlar ustida amalga oshiriladi.
________________________________________
Garbage Collector qachon aniqlaydi?
Garbage Collector foydalanilmayotgan scope yoki ma’lumotlarni Reachability (Yetishuvchanlik) printsipiga asoslanib aniqlaydi. Asosiy qoidalar quyidagicha:
1.	Global Scope doirasidagi obyektlar har doim kirish mumkin:
o	Masalan, window yoki global let, var va const o‘zgaruvchilar.
2.	Reachability (Yetishuvchanlik):
o	Agar obyektga yoki scope’dagi o‘zgaruvchiga hech qanday kod orqali kirish imkoniyati bo‘lmasa, bu obyekt "yetishuvchan emas" deb hisoblanadi va Garbage Collector uni xotiradan olib tashlaydi.
3.	Scope’dan tashqariga chiqish:
o	Funktsiya chaqirilishi tugagandan keyin, uning ichidagi barcha lokal o‘zgaruvchilar scope’dan tashqariga chiqadi va ularga hech qanday kirish imkoniyati qolmasa, ular "foydalanilmayotgan" deb hisoblanadi.
________________________________________
Misol bilan tushuntirish:
javascript

function createScope() {
    let localVar = "I'm local";
    return function innerFunction() {
        console.log(localVar);
    };
}

const myFunc = createScope(); // Bu yerda localVar hali "yetishuvchan"
myFunc(); // localVar dan foydalanish mumkin

// myFunc endi null yoki o'chirilsa, localVar xotiradan tozalanadi


Qachon tozalanadi?
1.	createScope() chaqirilganda, localVar xotirada yaratiladi va innerFunction tomonidan foydalaniladi.
2.	myFunc ga null qiymat berilganda yoki u hech qanday kod orqali kirish imkoniyatiga ega bo‘lmasa, localVar foydalanuvchi tomonidan "yetishuvchan" emas deb belgilanadi.
3.	Garbage Collector bu obyektni aniqlab, xotiradan olib tashlaydi.
________________________________________
Garbage Collector aniqlash jarayonlari:
1.	Reachability algorithmi (Yetishuvchanlik algoritmi):
o	Global obyektlardan boshlanadi va barcha bog‘langan obyektlarni o‘rganadi.
o	Agar obyekt hech qanday zanjir orqali "Reachable" (yetishuvchan) bo‘lmasa, u "Garbage" (foydalanilmayotgan) deb hisoblanadi.
2.	Scope’dan chiqish:
o	Funksiya bajarilishi tugaganda yoki {} blokdan tashqariga chiqilganda scope ichidagi o‘zgaruvchilar foydalanuvchi tomonidan yetishuvchan emas bo‘lsa, tozalanadi.
3.	Cheksiz zanjirni aniqlash:
o	Hattoki bir-biriga bog‘langan obyektlar o‘zaro zanjir hosil qilsa ham (masalan, siklik obyektlar), lekin tashqi scope bilan bog‘lanmagan bo‘lsa, bu obyektlar tozalanadi.
________________________________________
Cheksiz zanjir misoli:
javascript

function createCycle() {
    let objA = {};
    let objB = {};

    objA.ref = objB; // objA objB ga ishora qiladi
    objB.ref = objA; // objB objA ga ishora qiladi
}

createCycle(); // GC bu obyektlarni aniqlaydi va tozalaydi

•	objA va objB o‘zaro ishora qiladi, lekin tashqi scope bilan bog‘lanmagan.
•	Garbage Collector bu zanjirni aniqlaydi va xotiradan olib tashlaydi.
________________________________________
Xulosa:
Garbage Collector quyidagi holatlarda foydalanilmayotgan scope yoki obyektlarni tozalaydi:
1.	Scope’dan chiqilganda: Funksiya yoki blok tugashi bilan, va ulardagi ma'lumotlarga kirish imkoniyati yo‘q bo‘lganda.
2.	Reachability yo‘qolganda: Agar obyekt hech qanday global yoki ichki scope orqali yetishuvchan bo‘lmasa.
3.	Siklik obyektlar aniqlanganda: Agar obyektlar bir-biriga bog‘langan bo‘lsa ham, ular tashqi scope bilan bog‘lanmasa.
JavaScript’ning Garbage Collectori ushbu jarayonlarni avtomatik ravishda bajaradi, dasturchi esa bu jarayonni bevosita boshqara olmaydi.


 */