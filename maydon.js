/**
 * 1. Scope (Maydon yoki Ko‘rinish doirasi)
Ta'rif:
Scope - kod ichidagi o‘zgaruvchilarga qaysi joyda kirish mumkinligini belgilaydi. Bu o‘zgaruvchining "ko‘rinish joyi"ni aniqlaydi.
•	Inglizcha sinonimlar: visibility, context.
•	O‘zbekcha sinonimlar: ko‘rinish doirasi, ishlash maydoni.
Turlari:
1.	Global Scope (Umumiy ko‘rinish):
o	Barcha kodga kirish mumkin bo‘lgan ko‘rinish doirasi.
o	Fayl yoki dastur darajasida e'lon qilinadi.
2.	Function Scope (Funksiya doirasi):
o	Funksiya ichida e’lon qilingan o‘zgaruvchilarga faqat o‘sha funksiya ichida kirish mumkin.
3.	Block Scope (Blok doirasi):
o	{} qavslar ichida (let va const) e’lon qilingan o‘zgaruvchilarga faqat o‘sha qavs ichida kirish mumkin.

Misol:
Javascriptda:

let globalVar = "Global"; // Global Scope

function example() {
    let localVar = "Local"; // Function Scope
    console.log(globalVar); // OK, global o‘zgaruvchi ko‘rinadi
    console.log(localVar); // OK, funksiya ichidagi o‘zgaruvchi ko‘rinadi
}

example();

console.log(globalVar); // OK
console.log(localVar); // ERROR, localVar faqat funksiya ichida ko‘rinadi


2. Global Scope (Umumiy ko‘rinish doirasi)
Ta'rif:
Global Scope - bu ko‘rinish doirasida e'lon qilingan o‘zgaruvchilar dasturdagi barcha funksiyalardan va bloklardan kirish imkoniyatiga ega.
•	Inglizcha sinonimlar: global context, top-level scope.
•	O‘zbekcha sinonimlar: umumiy qamrov, yuqori daraja.
Misol:
javascript

let globalVar = "Global variable"; // Global scope

function display() {
    console.log(globalVar); // OK, globalVar ko‘rinadi
}

display();


3. Function Scope (Funksiya doirasi)
Ta'rif:
Funksiya ichida e’lon qilingan o‘zgaruvchilar faqat o‘sha funksiya ichida ko‘rinadi. Bunga misol sifatida var yoki let orqali e'lon qilingan o‘zgaruvchilarni olish mumkin.
•	Inglizcha sinonimlar: local scope, inner scope.
•	O‘zbekcha sinonimlar: funksiya maydoni, ichki maydon.
Misol:
javascriptda

function test() {
  let localVar = "I am local"; // Function scope
  console.log(localVar);
}

test();
console.log(localVar); // ERROR, localVar faqat test() ichida ko‘rinadi



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
Lexical environment (= static structure) => deb kod bajarilayotganda (yoki funksiyalar e’lon qilinayotganda) foydalanish mumkin bo‘lgan o‘zgaruvchilar, konstantalar, va funksiyalarni o‘z ichiga olgan maydon yoki maydonlar to’plamidan iborat tuzilma (= static structure). 
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

Lexical Environment – bu kod bajarilayotganda yoki funksiyalar e’lon qilinayotganda mavjud bo‘lgan o‘zgaruvchilar, konstantalar va funksiyalarni qamrab oladigan ma'lumotlar tuzilmasi. 
Bu tushunchani static structure sifatida izohlash to‘g‘ri:
•	Statik tuzilma deganda funksiyalar e’lon qilingan joy va ular foydalanishi mumkin bo‘lgan o‘zgaruvchilarning aniqligi nazarda tutiladi.
•	Bu dinamik bajarilish vaqtida emas, balki kod yozilgan paytda belgilanadi.
Tahlil:
1.	"kod bajarilayotganda yoki funksiyalar e’lon qilinayotganda":
lexical environment funksiyalar e'lon qilinadigan joyda statik ravishda aniqlanadi va keyinchalik bajarilish jarayonida undan foydalaniladi.
2.	"foydalanish mumkin bo‘lgan o‘zgaruvchilar, konstantalar va funksiyalar":
Lexical Environment o‘zining scope'ida mavjud bo‘lgan barcha o‘zgaruvchilarni, konstantalarni va funksiyalarni o‘z ichiga oladi.
3.	"maydon yoki maydonlar to’plamidan iborat tuzilma":
lexical environment bir nechta ichki va tashqi scope'larni (maydonlarni) qamrab oladi. Bu scope'lar zanjir (= SCOPE CHAIN) sifatida ishlaydi.
4.	"(= static structure)":
lexical scope (leksikal ma'nolar doirasi) statik bo‘lib, kod qayerda yozilganiga qarab belgilanadi va bajarilish vaqtida o‘zgarmaydi.
To‘ldiruvchi fakt:
•	Lexical Environment har bir funksiyaning yoki blokning o‘zining lokal o‘zgaruvchilarini saqlaydi va u tashqi scope orqali yuqoriga qarab o‘zgaruvchilarni izlaydi.
Misol:
function outer() {
  let a = 10; // Environment Record'ga yoziladi
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
•	Bu kod yozilgan joyga asoslanib qaysi o‘zgaruvchilar va funksiyalardan foydalanish mumkinligini aniqlovchi nazariy tushuncha.
•	Leksikal scope => bu kod strukturasi asosida qaysi o‘zgaruvchilar mavjudligini aniqlab beradi.
________________________________________
Lexical Environment:
•	Bu kod bajarilish paytida yaratiladigan amaliy mexanizm.
•	Lexical Environment - bu ma'lumotlar saqlanadigan xotira tuzilmasi bo‘lib, u kod bajarilayotgan vaqtda o‘zgaruvchilarni saqlaydi va boshqaradi.
________________________________________
Farqning sodda tilda izohi:
•	Lexical Scope – bu nazariy tushuncha: "Qaysi o‘zgaruvchilardan foydalanish imkoniyati borligi ko’rsatadi."
•	Lexical Environment – bu amaliy mexanizm: "O‘zgaruvchilarni xotirada qayerda va qanday saqlashni boshqaradi."
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
o	U globalVar, outerVar va innerVar o‘zgaruvchilarini ko‘ra oladi, chunki ular funksiya yozilgan joygacha mavjud.
Lexical Environment (amaliy):
•	Kod ishlayotgan paytda:
o	Har bir funksiya chaqirilganda yangi Lexical Environment yaratiladi.
o	Masalan:
1.	Global Lexical Environment:
	globalVar o‘zgaruvchisini => saqlaydi.
2.	outerFunction Lexical Environment:
	outerVar o‘zgaruvchisini saqlaydi va Global Lexical Environmentga bog‘lanadi.
3.	innerFunction Lexical Environment:
	innerVar o‘zgaruvchisini saqlaydi va outerFunction => Lexical Environmentga bog‘lanadi.
________________________________________
Yakuniy xulosa:
1.	Lexical Scope - kod yozilgan joyga qarab aniqlanadi va doimiy (statik) bo‘ladi.
2.	Lexical Environment - kod bajarilish jarayonida har bir scope {} uchun => xotira ajratib, o‘zgaruvchilarni saqlaydi va boshqaradi.
________________________________________

Muhim!!!
Bu misolda:
•	Lexical Scope => innerFunction => qaysi o‘zgaruvchilarni ko‘ra olishini belgilaydi.
•	Lexical Environment esa kod bajarilganda bu o‘zgaruvchilarni saqlash va ularga kirishni ta'minlashni amalga oshiradi.
•	O’zgaruvchilar va funksiyalarni o’zida saqlaydi. 

1)	Dynamic Scope: 
•	O’zgaruvchilar chaqirilgan joyda aniqlanadi, bu esa uni dinamik qiladi. 
•	JavaScriptda ishlatilmaydi, boshqa tillarda uchraydi.

 */