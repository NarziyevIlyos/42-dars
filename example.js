// const points = [40, 100, 1, 5, 25, 10];
// let randomNumber = 0;
// for (let i = points.length -1; i >0; i--) {
//   /**
//     1) Massivning => oxirgi indeksidan => takrorlashni boshlash uchun i'ning boshlang'ich qiymatiga massivning uzunligi bilan birning ayirmasi ifodasini ( array.length - 1)  beriladi,
//     chunki massiv elementlarini sanash 0 dan boshlanadi, shu bois massiv uzunligi uning elementlari sonidan 1 taga kam bo'ladi. (array.length - 1)
//     2) i => 1 gacha kamayib boradi (= i > 0), (= i--);
//     3) Math.random() => 0 va 1 orasidagi tasodifiy o’nli kasr sonni hosil qiladi.
//     4) Math.random() * (i + 1) ifodasi => o’nli kasr sonni => [0, i + 1) oraliqda qiymatini o’zgartiradi.
//     5) Ushbu o’nli kasr sonni (i + 1) ga ko'paytirish => [0, i + 1) oraliqdagi sonlarni beradi – ya’ni tasodifiy indeks => 0 dan ( 0 ham kiradi) i gacha bo'lgan barcha butun sonlarni o'z ichiga oladi
//     Math.floor(...) => qiymati o’zgargan o’nli kasrni =>  0 va i orasidagi butun songa aylantiradi

//    */
//     let j = Math.floor(randomMultipleIplus1 = (randomNumber = Math.random()) * (i));
//   console.log("randomNumber = " + randomNumber);
//   console.log("i = " + i);
//   console.log("randomMultipleIplus1 = " + randomMultipleIplus1);
//   console.log("j = " + j);

//   // ikkita elementni almashtirish usulidan foydalaniladi

//   // Buning uchun o'zgartirilayotgan i-indeksdagi elementning qiymatini => vaqtinchalik o'zgaruvchi k'ga qiymat sifatida beriladi (let k = array[i]).
//   // o'zgartirilayotgan i-indeksdagi elementga ( array[i]) massivning tasodifiy elementini tanlovchi j o'zgaruvchisining qiymati ( array[j]) beriladi ( array[i] = array[j]).
//   // massivning tasodifiy elementini tanlovchi j o'zgaruvchisining qiymatiga ( array[j]) => o'zgartirilayotgan i-indeksdagi elementning qiymatini o'zida saqlab turuvchi k o'zgaruvchisini beramiz ( points[j] = k)
//   // har bir takrorlashda massivning elementlari joylashuvi o'zgaradi. Elementlarining joylashuvi o'zgarayotgan massiv har bir takrorlashda bosqichma-bosqich elementlarini almashtirib boradi.

//   // k - o'zgartirilayotgan i-indeksdagi elementning qiymatini o'zida saqlab turuvchi o'zgaruvchi
//   let k = points[i];
//   console.log("k = " + k);

//   // o'zgartirilayotgan i-indeksdagi elementga ( array[i]) massivning tasodifiy elementini tanlovchi j o'zgaruvchisining qiymati ( array[j]) beriladi ( array[i] = array[j]).
//   points[i] = points[j];
//   console.log("points[i] = " + points[i]);

//   //points[j] -  massivning tasodifiy elementini tanlovchi j o'zgaruvchisining qiymatiga ( array[j]) => o'zgartirilayotgan i-indeksdagi elementning qiymatini o'zida saqlab turuvchi k o'zgaruvchisini beramiz ( points[j] = k)
//   points[j] = k;
//   console.log("points[j] = " + points[j]);

//   // elementlari orasidan 2 ta element almashgan massiv
//   console.log(points);
// }

// console.log(points);

// function showThis(){
//   // this - shu funksiya yaratilgan maydonga egalik qiluvchi obyekt hisoblanadi
//   console.log(this); // bu yerda showThis() funksiyasi global obyektda turibdi. Demak, showThis() funksiyasi ichidagi this => global obyekt ya'ni window obyektidir
// }

// showThis(); // window obyektining tanasi (= global obyektning tanasi) chiqadi

// /**
//  * endi shu @this'ning tarkibini (= tanasini) Call() qaram funksiyasi yordamida o'zgartiramiz
//  *
//  */

// const object = {
//   greet : "Salom"
// }

// showThis.call(object); // kodning o'qilishi object obyekti ichida showThis funksiyasini chaqir

// /**
//  * hozirda object tanasi quyidagi ko'rinishga ega:

//     const object = {
//     greet : "Salom",

//     function showThis(){
//     // this - o'zini-o'zi chaqiruvchi obyekt hisoblanadi
//     console.log(this); // bu yerda showThis() funksiyasi object obyektda turibdi. Demak, showThis() funksiyasi ichidagi this => object obyektidir
//     }
//   }

//   Aniq fikr:

// " @this => hozirda ustida ish olib borayotgan funksiyaning obyektidir va unga ishora qiladi (ko'pincha ota obyekt). Ushbu call() usuli bizga thisning (= hozirda ustida ish olib borayotgan funksiya obyektining) qiymatini vaqtincha o'zgartirish, uni boshqa ob'ekt ichiga joylash imkonini beradi. Bu biz this konktekstini aniq o'zgartirish yordamida boshqa ob'ekt ichida biror bir ob'ektning kerakli funksiyasidan foydalanishni hohlagan paytimizda, foydalidir."

// @Asosiy_Xulosalar :
// @this ichida funksiya bajariladigan kontekstni ya'ni obyekt tanasini bildiradi (odatda qaram funksiyaga egalik qiluvchi ob'ekt).
// call() usuli => funktsiyaning asosiy ob'ektini doimiy ravishda o'zgartirmaydi ; u faqat thisushbu funktsiya chaqiruvi uchun yangi ob'ektni vaqtincha tayinlaydi.
// call()ob'ektlarning kontekstini aniq nazorat qilish orqali funktsiyalarni almashish uchun foydalidir .
//  */

// const person = { name: "Alice" };

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// // Create a new function with `this` bound to `person`
// const greetPerson = greet.bind(person);

// greetPerson("Hello", "!"); // Output: "Hello, Alice!"
// greetPerson("Good morning", "."); // Output: "Good morning, Alice."

// // ===============================

// const obj = {
//   name: "Button",
//   handleClick: function () {
//     console.log(`Clicked: ${this.name}`);
//   },
// };

// const boundClickHandler = obj.handleClick.bind(obj);
// // Use `boundClickHandler` as an event listener, ensuring `this` always refers to `obj`.

// // yakka holatda this => global obyektga ishora qiladi
// let aloneThis = this;

// function showThis(){
//   // this - function expressiondagi qaysi turdagi funksiya (= anonym funksiya yoki arrow funksiya) bilan funksiya yaratilganiga qarab, shu funksiyadan FOYDALANAYOTGAN OBJECTga (= anonym funksiya uchun) yoki CHAQIRILGAN joyiga (= arrow funksiya uchun) egalik qiluvchi obyekt hisoblanadi
//   console.log(this); // bu yerda showThis() funksiyasi global obyekt maydonida yaratilgan. Demak, showThis() funksiyasi ichidagi this => global obyekt ya'ni window obyektidir
// }

// let object = {
//   anonymFunction: function(){
//     // this - shu anonymFunction funksiya YARATILGAN maydonga egalik qiluvchi obyekt hisoblanadi
//     console.log("this => ustida Anonym funksiya ish olib borayotgan OBJECTga ishora qiladi => ", this); // bu yerda anonymFunction() funksiyasi object obyekt maydonida yaratilgan. Demak, anonymFunction() funksiyasi ichidagi this => object obyektidir
//   },
//   arrowFunction: () => {
//     // this - shu anonymFunction funksiya CHAQIRILGAN maydonga egalik qiluvchi obyekt hisoblanadi
//     console.log("this => arrowFunction CHAQIRILGAN (= aniqlangan) joyiga egalik qiluvchi OBJECTga ishora qiladi => ", this); // bu yerda anonymFunction() funksiyasi object obyekt maydonida yaratilgan. Demak, anonymFunction() funksiyasi ichidagi this => object obyektidir
//   },

//   outerFunction: function(){
//     console.log("Tashqi anonym funksiyada this => shu funksiyadan foydalanayotgan obyektga teng => ", this);

//     function innerFunction(){
//         console.log("Tashqi funksiya o'zining this'ini hech qachon Ichki Funksiyaga meros qilib bermaydi, shu bois Ichki Funksiya ichidagi this => GLOBAL OBJECTga ishora qiladi", this);
//     }

//     innerFunction() // this doim shu funksiyadan foydalanayotgan obyektga ishora qiladi, biroq ichki funksiya => tashqi funksiya ichida yaratilgani bois tashqi funksiyani o'zining obyekti sifatida ololmaydi, shu bois u Global Obyektni o'zining obyekti sifatida oladi
//   },
// }

// "use strict";
// let aloneThis_InStrictMode = this;
// let ThisInFunction_InObject_InStrictMode = {
//   StrictFunction : function (){
//     console.log("global obyektning Qat'iy rejimida this", this);
//   }
// }

// "use strict";
// function myStrictFunction(){
//   console.log("Qat'iy funksiya ichida this => undefinedga teng", this);
// }

// console.log("Global maydonda yaratilgan yolg'iz this => Global obyektga ishora qiladi, ya'ni window obyektga", aloneThis);
// console.log("Global maydonda yaratilgan odatiy funksiya ichidagi this => Global obyektga ishora qiladi, ya'ni window obyektga ", showThis);; // window obyektining tanasi (= global obyektning tanasi) chiqadi
// object.anonymFunction(); // object tanasi
// object.arrowFunction(); // Global object (= Window obyekti) tanasi
// object.outerFunction(); // shu funksiyadan foydalanayotgan obyektga ishora qiladi
// console.log("qat'iy rejimda turgan yolg'iz this => Global objectga ishora qiladi", aloneThis_InStrictMode); //  window obyektining tanasi (= global obyektning tanasi) chiqadi
// console.log("qat'iy rejimda, Object ichidagi Funksiya ichida turgan this => ", ThisInFunction_InObject_InStrictMode); //  yaratilgan joyiga egalik qiluvchi obyektining tanasi chiqadi
// myStrictFunction(); // undefined

// let obj = {
//   anonymousFunction: function () {
//     console.log(this);
//   }
// };

// let standaloneFunction = obj.anonymousFunction;
// standaloneFunction(); // `this` => global obyektga (yoki qat'iy rejimda `undefined`ga ishora qiladi)

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3)); // 5

/**
 Window obyektida Natija: 
  ƒ (greeting) {
      return `${greeting}, my name is ${this.name}`;
  }
  
  terminalning NODE.jsdagi natija:

  [Function: bound greet] // bog'langan greet funksiyasi
 */

// const boundGreet = person.greet.bind(person);

// console.log(boundGreet("Hello")); // "Hello, my name is Alice"

// // Chaqqan har safar 'this' doim 'person' bo'ladi
// const anotherPerson = { name: "Bob" };
// console.log(boundGreet.call(anotherPerson, "Hi")); // "Hello, my name is Alice" (still uses 'person')

// let object1 = {
//   name: "Azizbek",
//   greet: function(name){
//     console.log("Hello ", name);
//   }
// }

// let result_1 = object1.greet();
// // console.log(result_1);

// let object1 = {
//   a: 12,
//   b: 24,

//   // Mustaqil funksiya
//   add: function add(a, b) {
//     return a + b;
//   }
// }

// let result1 = object1.add()
// console.log("object1.add() = ", result1); // NaN

// // ======================

// let object2 = {
//   a: 12,
//   b: 24,

//   // Mustaqil funksiya
//   add: function(a, b) {
//     return this.a + this.b;
//   }
// }

// let result2 = object2.add()
// console.log("object2.add() = ", result2); // NaN

// // =================

// let object3 = {
//   a: 12,
//   b: 24,

//   // this ta'siri bilan Qaram funksiyaga aylangan mustaqil funksiya
//   add: function() {
//     // a va b aniqlanadi
//     // chunki this => mustaqil funksiyani object3 obyektiga bog'lab qo'ydi (= qaram qilib qo'ydi). Natijada qaram funksiyaga aylangan mustaqil funksiya => object3 obyekti o’zining tanasidan ko’rsatgan o’zgaruvchilarning qiymatini hisoblab beradi.
//     return this.a + this.b; // ReferenceError: a is not defined
//   }
// }

// let result3 = object3.add()
// console.log("object3.add() = ", result3); // ReferenceError: a is not defined

// // ======================

// // =========================

// let object4 = {
//   a: 12,
//   b: 24,

//   // Mustaqil funksiya
//   add: () => {
//     return a + b;
//   }
// }

// let result4 = object4.add()
// console.log(result4);

// function greet() {
//   return `Hello, my name is ${this.name}`;
// }

// const person = { name: "Alice" };
// const boundGreet = greet.bind(person);

// console.log(boundGreet()); // Hello, my name is Alice

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(4, 5)); // 20

// const rectangle = {
//   width: 10,
//   height: 20,
//   calculateArea: function() {
//       return this.width * this.height;
//   }
// };

// console.log(rectangle.calculateArea()); // 200

// ===============================

// function add(a,b){
//   return a + b;
// }

// let elseAdd = add;

// let res = add(2,3);
// console.log("add = ", add);
// console.log( "res = ", res);

// var name_var_global = "Ali"; // global maydonda ham, block ichida ham ko'rinadi. uning chegarasi funksiya doirasi
// let nameLocal_let_block = "Diyor"; // global maydonda ko'rinmaydi, ular faqat blok {} ichida ko'rinadi
// let nameLocal_const_block = "Jasur"; // global maydonda ko'rinmaydi, ular faqat blok {} ichida ko'rinadi

// console.log(name_var_global); // global maydonda ham, block ichida ham ko'rinadi. uning chegarasi funksiya doirasi
// console.log(nameLocal_let_block); // global maydonda ko'rinmaydi, ular faqat blok {} ichida ko'rinadi
// // console.log(nameLocal_const_block); // global maydonda ko'rinmaydi, ular faqat blok {} ichida ko'rinadi

// let name = "Ali";

// const calculator = {
//   name: "Calculator",
//   a: 7,
//   b: 3,
//   subtract: function (a, b) {
//     console.log(a + " - " + b + " = ", a - b);
//   },
//   counter: function () {
//     // bu yerda oddiy funksiya (= anonym funksiya) => obyekt metodi sifatida chaqirilyapti => ( calculator.counter())
//     // funksiya => anonym funksiya bo'lgani tufayli, ichki kontekstga ya'ni this qiymatiga ega. Bu yerda this = calculator obyektiga teng.
//     // anonym funksiya egasining ya'ni calculator obyektining xossalari va metodlaridan (= funksiyalaridan) foydalanadi.

//     console.log(this); // this = calculator

//     // anonym funksiya egasining ya'ni calculator obyektining xossalari va metodlaridan (= funksiyalaridan) foydalanadi.
//     // bu yerda this.a va this.b => calculator obyektining xossalari
//     // bu yerda this.subtract() => calculator obyektining metodi ( = funksiyasi )
//     this.subtract(this.a, this.b);

//     let a = 2,
//       b = 3;

//     // add() funksiyasi => oddiy funksiya va u anonym funksiya ichida. add() funksiyasiga counter() funksiyasi ichidagi a va b o'zgaruvchilar qiymat sifatida berilgan
//     function add(m, n) {
//       console.log(m + " + " + n + " = ", m + n);
//     }

//     add(a, b); // 5

//     let name = "Ahmad"; // name o'zgaruvchisi yaratilgan ammo, hech qachon o'qilmaydi, chunki name o'zgaruvchisidan keyin undan foydalanuvchi kod yo'q. Arrow funksiya esa o'zining tug'ishganlaridan foydalanmaydi.

//     const arrowFunction = () => {
//       console.log("arrowFunction => " + this); //
//       console.log(`Arrow kontekst: ${this.name}`);
//     };
//     arrowFunction(); //
//   },
// };

// // bu yerda anonym funksiya => obyekt metodi sifatida chaqirilyapti.
// calculator.counter();

/**
 Natija:

    {
        name: 'Calculator',
        a: 7,
        b: 3,
        subtract: [Function: subtract],
        counter: [Function: counter]
    }
    7 - 3 =  4
    2 + 3 =  5
    arrowFunction[object Object]
    Arrow kontekst: Calculator
 */

// let a = 10, b = 3, c = 15;

// const calculator2 = {
//     a : 10,
//     b : 7,
//     c : 14,

//     divide: () => {
//         console.log(this.c + " / " + this.b + " = " + this.c / this.b);
//     },
// }

// calculator2.divide();

// var a = 12, b = 24, c = 36;

// window.a = 9;
// window.b = 18;
// window.c = 36;

// ===========================

// this.a = 2;
// this.b = 4;
// this.c = 6;

// const context = {
//   a: 10,
//   b: 3,
//   c: 15,

//   calculator2: {
//     a: 10,
//     b: 7,
//     c: 14,

//     divide: () => {
//       console.log(this.c + " / " + this.b + " = " + this.c / this.b);
//     },
//   },
// };

// console.log(this);

// context.calculator2.divide();


// =============================
// =============================
// // =============================

// this.name = "Global scope";
// this.a = 12;
// this.b = 4;

// const person = {
//   name: "Person",
//   arrowFunction: () => {
//       console.log("Arrow functiondan foydalanayotgan maydon =>", this.name);
//   },
//   anonymFunction: function(){
//     console.log("Oddiy funksiyadan foydalanayotgan obyekt => ", this.name);
//   },
//   add: (a, b) => {

//     console.log("add() funksiyasining egasi =>", this.name);
    
//     innerAdd = (m, n) => {
//       console.log("innerAdd() funksiyasining egasi => ", this.name);
//       console.log(this.m + " + " + this.n + " = ", this.m + this.n);;
//     };

//     innerAdd(a, b);
//   },


//   subtract: function(a,b){
//     console.log("subtract() funksiyaning egasi => ", this);

//     innerSubtract = function(m, n){
//       console.log("innerSubtract() funksiyaning egasi => ", this);
//       console.log(this.m + " - " + this.n + " = ", this.m - this.n);
//     }

//     innerSubtract(this.a, this.b);
//   }



// };

// person.arrowFunction(); //  arrowFunction funksiyasining turi arrow function, shuning uchun u qayerda chaqirilsa uning egasi o'sha mayodon bo'ladi. Bu yerda uning egasi Global maydon 
// person.anonymFunction(); //  anonymFunction funksiyasining turi anonym function, shuning uchun u qanday chaqirilgan bo'lsa, uning egasi funksiyani chaqirilish usuliga qarab belgilanadi. Bu yerda uning egasi person obyekti 

// person.add();
// person.subtract();





// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(this); // window
//     console.log(`Hello, my name is ${this.name}`); // Ali
//   },
// };

// person.greet();
// console.log(this);

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Alice" };

// greet.apply(person, ["Hello", "!"]); // Output: "Hello, Alice!"

// let object2 = {
//   name: "Ulug'bek",
// }

// let result_2 = object1.greet.call(object2);


console.log(this); // global obyekt

this.name = "Global obyekt";
this.a = 9;
this.b = 3;

let local_let = 2; // global maydonda mavjud, ammo global maydonga avtomatik tarzda qo'shilmaydi.
const local_const = 3; // global maydonda mavjud, ammo global maydonga avtomatik tarzda qo'shilmaydi.

/**
 * var a = 9;
 * var b = 3; sifatida ham global o'zgaruvchi ochsa bo'ladi.
 * 
 * lekin, const va let bilan ochilgan o'zgaruvchi Global kontekstda bo'lgani bilan, window obyektida mavjud bo'lmaydi.
 */
const calculator = {
  name: "Calculator",
  type: "simple",
  a: 12,
  b: 4,
  subtract: function(){
    console.log("funksiyaning egasi (= this) => ", this.name, " = ", this);

    console.log("oddiy anonym funksiya obyektning funksiyasi sifatida chaqirilganda, anonym funksiyaning egasi bo'lgan obyekt yoki funksiya o'zining maydonidagi xossalar va funksiyalarga ishlov berish uchun shu anonym funksiyaga o'zining elementlarini this yordamida beradi");
    console.log(`(this.a = ${this.a}) - (this.b = ${this.b}) = ` + (this.a - this.b)); // (this.a = 12) - (this.b = 4) = 8

    function degree(){
      console.log("Agar oddiy funksiya => mustaqil funksiya sifatida chaqirilsa, oddiy funksiyaning egasi => GLOBAL OBJECT bo'ladi. Global obyekt o'zining maydonidagi xossalar va funksiyalarga ishlov berish uchun shu anonym funksiyaga o'zining elementlarini this yordamida beradi");
      console.log("funksiyaning egasi (= this) => ", this.name, " = ", this);
      console.log(`(this.a = ${this.a}) **2 = ` + (this.a **2));
    }
    // mustaqil funksiya sifatida chaqirilyapti
    degree(); 
    /**
     javob:
     (this.a = 9) **2 = 81 (= window obyektida)
     this.a = undefined **2) = NaN (= terminaldagi node.jsda)
     */

    let arrowFunction = (a,b) => {
      console.log("arrow function QAYERDA CHAQIRILGAN bo'lsa, o'sha maydonga egalik qiluvchi obyekt yoki funksiya arrow funktionning egasi bo'ladi. Va shu obyekt yoki funksiya o'zining maydonidagi xossalar va funksiyalarga ishlov berish uchun shu arrow funksiyaga o'zining elementlarini this yordamida beradi");
      console.log("arrowFunction funksiyasining egasi (= this) => ", this.name, " = ", this);
      console.log(`(this.a = ${this.a}) + (this.b = ${this.b}) = `, this.a + this.b);
    };

    arrowFunction(); // (this.a = 12) + (this.b = 4) =  16
  },

  arrowMultiple: (a,b) => {
    console.log("arrowMultiple nomli arrow funksiya QAYERDA CHAQIRILGAN bo'lsa, o'sha joyning egasi => arrowMultiple nomli arrow funksiyasining egasi ham bo'ladi", this.name, " => ", this);
    console.log(`(this.a = ${this.a}) * (this.b = ${this.b}) = ` + this.a * this.b); // (this.a = 9) * (this.b = 3) = 27

    let divider = (a,b) => {
      console.log(`(this.a = ${this.a}) / (this.b = ${this.b}) = ` + this.a / this.b);
    }

    divider(); // (this.a = 9) / (this.b = 3) = 3

    let ildiziniTopuvchi = function(a){
      console.log("Agar oddiy funksiya => mustaqil funksiya sifatida chaqirilsa, oddiy funksiyaning egasi => GLOBAL OBJECT bo'ladi");
      console.log("funksiyaning egasi (= this) => ", this.name, " = ", this);
      console.log(this.a + " => " + Math.sqrt(this.a) );
    }

    ildiziniTopuvchi(); 
    /**
    javob: 

    9 => 3 (window obyektida)
    undefined => NaN (=  terminaldagi node.js)
    */ 
  }
}

calculator.subtract();
calculator.arrowMultiple();

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars(); 

console.log("\n");

cars.sort(function(a, b){return a.year - b.year});
displayCars();

function displayCars() {

  for(let i=0; i<cars.length; i++){
    console.log(
      cars[i].type + " " + cars[i].year + "\n"
    );
  }
}


