


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

function showThis(){
  // this - o'zini-o'zi chaqiruvchi obyekt hisoblanadi
  console.log(this); // bu yerda showThis() funksiyasi global obyektda turibdi. Demak, showThis() funksiyasi ichidagi this => global obyekt ya'ni window obyektidir
}

showThis(); // window obyektining tanasi (= global obyektning tanasi) chiqadi

/**
 * endi shu @this'ning tarkibini (= tanasini) Call() qaram funksiyasi yordamida o'zgartiramiz
 * 
 */

const object = {
  greet : "Salom"
}

showThis.call(object); // kodning o'qilishi object obyekti ichida showThis funksiyasini chaqir

/**
 * hozirda object tanasi quyidagi ko'rinishga ega:

    const object = {
    greet : "Salom",

    function showThis(){
    // this - o'zini-o'zi chaqiruvchi obyekt hisoblanadi
    console.log(this); // bu yerda showThis() funksiyasi object obyektda turibdi. Demak, showThis() funksiyasi ichidagi this => object obyektidir
    }
  }

  Aniq fikr:

" @this => hozirda ustida ish olib borayotgan funksiyaning obyektidir va unga ishora qiladi (ko'pincha ota obyekt). Ushbu call() usuli bizga thisning (= hozirda ustida ish olib borayotgan funksiya obyektining) qiymatini vaqtincha o'zgartirish, uni boshqa ob'ekt ichiga joylash imkonini beradi. Bu biz this konktekstini aniq o'zgartirish yordamida boshqa ob'ekt ichida biror bir ob'ektning kerakli funksiyasidan foydalanishni hohlagan paytimizda, foydalidir."

@Asosiy_Xulosalar :
@this ichida funksiya bajariladigan kontekstni ya'ni obyekt tanasini bildiradi (odatda qaram funksiyaga egalik qiluvchi ob'ekt).
Usul call()funktsiyaning asosiy ob'ektini doimiy ravishda o'zgartirmaydi ; u faqat thisushbu funktsiya chaqiruvi uchun yangi ob'ektni vaqtincha tayinlaydi.
call()ob'ektlarning kontekstini aniq nazorat qilish orqali funktsiyalarni almashish uchun foydalidir .
 */
