
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
calculator.arrowMultiple()