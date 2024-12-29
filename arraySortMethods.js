function startArrayTrainer() {
    const outputDiv = document.getElementById("output").querySelector("pre");
    let output = "";
  
    // Initial scrambled list of names
    let students = [
      " Alice  ",
      "BOB",
      "  charlie",
      "dave ",
      "Eve",
      "  ",
      "Frank",
    ];
    output += `Dastlabki tartibsiz massiv: ${JSON.stringify(students)}\n\n`;


    output += `Massivni SARALASH \n\n
  
    Eslatma!!!
    
    STRING turdagi ma'lumotlarni taqqoslashda JavaScript ularning Unicode qiymatlari asosida CHAPdan O'NGga => BELGILAR bo'yicha amalga oshiradi. 
    * Bunda har ikki STRING turdagi qiymat solishtirganda => qaysi bir qiymatning 1-BELGISI => UNICODE'dagi qiymati katta bo'lsa o'sha qiymatni KATTA deb oladi. 
      Qolgan belgilar ketma-ketligi e'tiborga olinmaydi.
    
    STRING turdagi ma'lumotlarni to'g'ridan-to'ri taqqoslash => TO'G'RI natijani bermaydi.
    Shuning uchun, STRING turdagi ma'lumotlarni => SON turiga o'tkazish kerak. 
    \n\n`;
  
    output += `Odatda, sort() funktsiyasi => qiymatlarni => STRINGga aylantiradi => STRING (= belgilar ketma-ketligi) sifatida ALFABET ko'rinishida tartiblaydi.
  
  * sort() usuli => STRING uchun yaxshi ishlaydi ("Apple" => "Banana" dan oldin keladi).
  
  Agar sonlar => STRING sifatida tartiblangan bo'lsa, "25" => "100" dan katta bo'ladi, chunki STRING turdagi ikki qiymatni taqqoslaganda, dastur har ikki qiymatning FAQAT 1-BELGIsining UNICODE'dagi qiymatlari bo'yicha taqqoslaydi, UNICODE'da esa "2" => "1" dan katta hisoblanadi. Qolgan belgilar hisobga olinmaydi.
  
  Shu sababli, sort() usuli => raqamlarni tartiblashda => noto'g'ri natija beradi. \n\n`;
  
    output += `const points = [40, 100, 1, 5, 25, 10];
  points.sort(); \n\n`;
  
    const points = ["40", "100", "1", "5", "25", "10"];
    points.sort();
    output += `Natija: ${JSON.stringify(points)} \n\n`;
  
    output += `Buni solishtirish funksiyasiga berish orqali tuzatishingiz mumkin : 
  
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a - b}); 
  \n`;
  
    points.sort(function (a, b) {
      return a - b;
    });
    output += `Natija: ${JSON.stringify(points)} \n\n`;
  
    output += `Massivni KAMAYISH bo'yicha SARALASH uchun xuddi shu usuldan foydalaning: 
  
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return b - a}); 
  \n`;
  
    points.sort(function (a, b) {
      return b - a;
    });
    output += `Natija: ${JSON.stringify(points)} \n\n`;
  
    output += `ESLATMA!!!
  
  * SORT() usuli => PARAMETRSIZ => ALFABET bo'yicha TARTIBLAYDI.
  * SORT() usuli => PARAMETRI bo'lsa => SON bo'yicha TARTIBLAYDI.
  * SORT() usuli => 1 ta ixiyoriy parametrga ega, u ham bo'lsa => TAQQOSLASH funksiyasidir. 
  * SORT() usuli => o'zining CALLBACK Funksiyasiga bir vaqtning o'zida 2 ta ARGUMENT uzatishga mo'ljallangan usuldir.
  * TAQQOSLASH funksiyasiga chaqiriqlar soni => ichki ishlatiladigan tartiblash algoritmiga bog'liq.
  \n`;
  
    //=================
  
    // fisher-yates-shuffled usuli
  
    output += `Fisher-Yates Shuffle algoritmi => bu massivni tasodifiylashtirishning => samarali usuli hisoblanadi. 
    Fisher-Yates Shuffle algoritmi ishlashi:
  
    1)	Tekshirilayotgan massiv uzunligi noma'lumligi sababli, for loopi kamayish tartibida i - -, i'ning dastlabki qiymati => massivning elementlar sonini aniqlab beruvchi ifodaga (= array.length -1) teng, shart esa i>0 dan katta bo'ladi.
  
    Qisqa qilib aytganda, for takrorlashidagi i o'zgaruvchisi => massivning oxirgi indeksdan boshlanadi (= array.length - 1 )va orqaga qarab ishlaydi ( i--).
  
    2)	i o'zgaruvchisi => joriy indeks (= ya'ni ishlov berilayotgan element indeksini) ifodalaydi..
    3)	J o'zgaruvchisi =>  massivdagi i-indeksda turgan element ( array[i] ) bilan ALAMASHTIRISH uchun TASODIFIY indeksdir.
    4)	TASODIFIY indekslar ORALIG'I  => [0, i] (shu jumladan 0 va i ham kiradi) bo'lishi kerak.
    5)	i o'zgaruvchisi => j o'zgaruvchisiga indekslardan foydalanish imkoniyatlar sonini => cheklab beradi.
    6)	Biroq i bilan random() funksiyasi hosil qilgan o'nli kasr ko'paytmasining Math.floor funksiyasidan chiqqan qiymat nol (0) bilan (i - 1) oralig'ida bo'ladi ya'ni [0, i). Bu esa j o'zgaruvchisining joriy indeksdagi (i) elementini tanlay olmaslikka olib keladi. Sababi, Math.floor() => o'nli kasrning faqat butun qismini oladi. Buni to'g'irlash uchun i'ning qiymatini bittaga oshirib, Math.random'ga ko'paytirish kerak. Ya'ni: Math.floor(random() * ( i + 1 ).
    7)	i o'zgaruvchisi qiymatining kamayib borishi j o'zgaruvchisining foydalanishi mumkin bo'lgan indekslari oralig'ini ham kamaytirib boradi.
    Siz shu massivning => qolgan aralashtirilmagan qismidan  ( i-indeksdagi joriy element ham kiradi) tasodifiy birorta elementini tanlamoqchisiz .
    Masalan: [1,2,3,4,5]
    Masalan: 
    •	Random() = 0.2340012;
    •	i = 5;
    •	j ning tasodifiy tanlash indeksi => [0,5] gacha bo'lishi kerak.
    •	// randomning eng katta qiymati => 0.999.. bo'lgan taqdirda ham
    •	Math.floor(random() * i = 0.9990012 * 5 = 4.9…) = 4 chiqadi.
    •	// Buni to'g'irlash uchun i'ning qiymatini bittaga oshirib, Math.random'ga ko'paytirish kerak 
    •	Math.floor(random() * ( i + 1 ) = 0.9990012 * ( 5 + 1 ) = 5.9…) = 5
    Nima uchun tasodifiy indeksni hisoblashda (i + 1) ifodasidan foydalanish kerak ?
    javascriptda:
  
    let j = Math.floor(Math.random() * (i + 1));
    1.	 (i + 1) ning vazifasi :
    o	Math.random() => [0, 1) oralig'idagi o'nli kasr sonni hosil qiladi.
    o	Ushbu o'nli kasr sonni (i + 1) ga ko'paytirish => [0, i + 1) oraliqdagi sonlarni beradi - ya'ni tasodifiy indeks => 0 dan (shu jumladan) i gacha bo'lgan barcha butun sonlarni [0, i ] o'z ichiga oladi.
    2.	Nima uchun 1 qo'shiladi? :
    o	Agar 1 qo'shilmasa, tasodifiy indeks => faqat 0 dan ( i - 1 )gacha bo'ladi.
    U holda j o'zgaruvchisi => joriy i-indeksdan => foydalana olmaydo, bu ushbu algoritm uchun to'g'ri emas;
  
    algoritm sintaksisi: 
  
    const points = [40, 100, 1, 5, 25, 10];
  
    for (let i = points.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = points[i];
      points[i] = points[j];
      points[j] = k; 
    }
  
      console.log(points);
  
      ushbu tugmani qayta-qayta bosish orqali massivdagi elementlar FISHER-YATES-SHUFFLED usulida almashayotganini ko'rish mumkin.
   \n\n`;
  
    // Ensure the DOM is fully loaded before accessing elements
    //  document.addEventListener("DOMContentLoaded", () => {
    //    document.getElementById("demo").innerHTML = array;
    //  });
  
    //=================
  
    // massivni eng katta va eng kichik qiymatlarini topish
  
    output += `===========================================\n=========================================== \n\n`;
    output += `Massivning eng past (yoki eng yuqori) qiymatini topish
  
  * Massivda maksimal yoki min qiymatni topish uchun o'rnatilgan funksiyalar mavjud emas.
  
  * Eng past yoki eng yuqori qiymatni topish uchun sizda 3 ta variant mavjud:
  
      1) Massivni tartiblang va birinchi yoki oxirgi elementni o'qish
      2) Math.min() yoki Math.max() dan foydalanish
      3) Uyda ishlab chiqarilgan funktsiyani yozish
  
  Sort() yordamida Minimal qiymatni yoki Maksimal qiymatni topish
  
  * Massivni Sort() usuli yordamida tartiblaganingizdan so'ng, siz eng katta va eng kichik qiymatlarni olish uchun indeksdan foydalanishingiz mumkin.
  
  ==========================================
  
  * Massivni O'sish bo'yicha tartiblash: 
  
  const arr1 = [40, 100, 1, 5, 25, 10];
  
  points.sort(function(a, b){return a - b});
  // hozir massivning 1-elementi bo'lgan arr1[0] => eng kichik qiymatga ega
  // massivning oxirgi elementi bo'lgan arr1[arr1.length-1] => eng katta qiymatga ega
  \n\n`;
  
    const arr1 = [40, 100, 1, 5, 25, 10];
    output += `Hozirgi massiv: ${JSON.stringify(arr1)} \n\n`;
    arr1.sort(function (a, b) {
      return a - b;
    });
  
    output += `O'sish tartibida Saralangan massiv: 
  ${JSON.stringify(arr1)} \n\n`;
    output += `Eng kichik qiymat: ${JSON.stringify(arr1[0])} \n\n`;
    output += `Eng katta qiymat: ${JSON.stringify(arr1[arr1.length - 1])} \n\n`;
  
    //=================
  
    output += ` ==========================================
  
  Massivni => Kamayish bo'yicha tartiblash: 
  
  const arr1 = [40, 100, 1, 5, 25, 10];
  
  points.sort(function(a, b){return b - a});
  // hozir massivning 1-elementi bo'lgan arr1[0] => eng katta qiymatga ega
  // massivning oxirgi elementi bo'lgan arr1[arr1.length-1] => eng kichik qiymatga ega
  \n\n`;
  
    const arr2 = [1, 13, 200, 35, -25, 0];
    output += `Hozirgi massiv: ${JSON.stringify(arr2)} \n\n`;
    arr2.sort(function (a, b) {
      return a - b;
    });
  
    output += `Kamayish tartibida Saralangan massiv: 
  ${JSON.stringify(arr2)} \n\n`;
    output += `Eng kichik qiymat: ${JSON.stringify(arr2[0])} \n\n`;
    output += `Eng katta qiymat: ${JSON.stringify(arr2[arr2.length - 1])} \n\n`;
  
    //=================
  
    output += `Eslatma!!!
  Agar siz faqat eng kata (yoki eng kichik) qiymatni topmoqchi bo'lsangiz, butun massivni saralash juda samarasiz usuldir. 
  
  Agar siz eng katta (yoki eng kichik) qiymatni topmoqchi bo'lsangiz, Math.min() funksiyasidan foydalaning:
  
  const points = [40, 100, 1, 5, 25, 10];
  
  function myArrayMin(arr) {
    return Math.min.apply(null, arr); 
  
    /**
     O'qilishi:
  
     Math.min.apply(null, arr);  // apply() funksiyasi => Math.min() funksiyasini chaqir va unga o'zingning 2-parametringga uzatilgan arr nomli massivdan barcha elementlarni massivdan chiqarib ber, Math.min() funksiyasi sen shu massivdan chiqarilgan elementlarning eng kichik qiymatni top.
  
     1) Math.min() =>  o'zining parametr qabul qiluvchi operatori () ichida => uzatilgan argumentlarni alohida-alohida ko'rib chiqadi va eng kichik bo'lgan sonni qaytaradi.
     2) apply() => Math.min() funksiyasini chaqiradi ya'ni ishga tushiradi va  o'zining 2-parametriga uzatilgan massivni ochib, barcha elementlarni massivdan chiqarib oladi va massivdan chiqarilgan elementlarni argument sifatida Math obyektidagi min() funksiyasiga beradi
     3) null => apply() funksiyasiga this qiymati kerak emasligi uchun, berilmoqda.
  
     Math.min.apply(null, [1, 2, 3]) => Math.min(1, 2, 3) ifodaga tengdir.
  
     */
  }
  
  \n`;
  
    const arr3 = [40, 100, 1, 5, 25, 10];
  
    function myArrayMin(arr) {
      return Math.min.apply(null, arr3);
    }
  
    let minValue = myArrayMin();
  
    output += `[40, 100, 1, 5, 25, 10] massividan => Eng kichik qiymat: ${JSON.stringify(
      minValue
    )} \n\n`;
  
    //=================
  
    output += `Agar siz eng katta qiymatni topmoqchi bo'lsangiz, Math.min() funksiyasidan foydalaning:
  
    const points = [40, 100, 1, 5, 25, 10];
  
    function myArrayMin(arr) {
      return Math.min.apply(null, arr);
  
      /**
       O'qilishi:
  
       Math.max.apply(null, arr);  // apply() funksiyasi => Math.max() funksiyasini chaqir va unga o'zingning 2-parametringga uzatilgan arr nomli massivdan barcha elementlarni massivdan chiqarib ber, Math.max() funksiyasi shu massivdan chiqarilgan elementlarning eng katta qiymatni top.
  
       1) Math.max() =>  o'zining parametr qabul qiluvchi operatori () ichida => uzatilgan argumentlarni alohida-alohida ko'rib chiqadi va eng kichik bo'lgan sonni qaytaradi.
       2) apply() => Math.max() funksiyasini chaqiradi ya'ni ishga tushiradi va  o'zining 2-parametriga uzatilgan massivni ochib, barcha elementlarni massivdan chiqarib oladi va massivdan chiqarilgan elementlarni argument sifatida Math obyektidagi min() funksiyasiga beradi
       3) null => apply() funksiyasiga this qiymati kerak emasligi uchun, berilmoqda.
  
       Math.max.apply(null, [1, 2, 3]) => Math.max(1, 2, 3) ifodaga tengdir.
  
       */
    }
  
    \n\n`;
  
    const arr4 = [40, 100, 1, 5, 25, 10];
  
    function myArrayMax(arr) {
      return Math.max.apply(null, arr4);
    }
  
    let maxValue = myArrayMax();
  
    output += `[40, 100, 1, 5, 25, 10] massividan => Eng katta qiymat: ${JSON.stringify(
      maxValue
    )} \n\n`;
  
    //=================
  
    output += `JavaScript massivida eng kichik qiymatni topish uchun o'rnatilgan funksiya mavjud emas.
  
  Eng kichik raqamni topish uchun eng tezkor kod qo'lbola eng kichik qiymatni topish usulidan foydalanishdir. \n\n`;
  
    output += `JavaScriptda eng kichik sonni topuvchi qo'lbola funksiya algoritmi:
    
    
    function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
   \n\n`;
  
    output += `1. function myArrayMin(arr)
  Nima qiladi?:
  Bu funksiya massivning (myArrayMin() funksiyasi parametriga berilgan argument sifatida berilgan massiv) eng kichik elementini topadi.
  arr:
  Funksiyaga argument sifatida uzatilgan massiv.
  
  2. let len = arr.length;
  
  Nima qiladi?:
  len o'zgaruvchisiga massivning uzunligini (arr.length) saqlaydi.
  
  Nimaga kerak?:
  Massivda nechta elementlar soni borligi bizga noma'lum. Ammo massivning length xossasi bizga shu massivning elementlar sonini aniqlab beradi.
  Bu orqali massivni oxiridan boshlab elementlarini teskari tartibda tekshirish uchun foydalaniladi. 
  
  Misol:
  
  const arr = [40, 100, 1, 5, 25, 10];
  console.log(arr.length); // 6 
  
  3. let min = Infinity;
  
  Nima qiladi?:
  min o'zgaruvchisi boshlang'ich qiymat sifatida Infinity (+Cheksizlik = eng katta musbat son) berilgan.
  
  Nimaga kerak?:
  Infinity qiymati har qanday son bilan solishtirganda eng katta musbat son, shuning uchun bu dastlabki eng kichik qiymat sifatida ishlatiladi.
  
  Misol:
  console.log(10 < Infinity); // true
  
  4. while (len--) {...}
  
  Nima qiladi?:
  while takrorlab beruvchisi orqali massivning barcha elementlari teskari tartibda (oxiridan boshigacha) tekshiriladi.
  
  len--:
  len o'zgaruvchisi har bir iteratsiyada 1 ga kamayadi.
  
  Bu sikl len > 0 bo'lganda davom etadi, va massivning har bir elementi qayta ishlanadi.
  Misol:
  
  let len = 3;
  while (len--) {
    console.log(len); // 2, 1, 0
  }
  
  5. if (arr[len] < min) {...}
  
  Nima qiladi?:
  Joriy element (arr[len]) bilan hozirgacha topilgan eng kichik qiymat (min) solishtiriladi.
  Agar joriy element (arr[len]) eng kichik bo'lsa:
  min o'zgaruvchisiga joriy element qiymati qiymat sifatida beriladi.
  
  Misol:
  
  const arr = [40, 100, 1, 5, 25, 10];
  let min = Infinity;
  console.log(arr[2] < min); // true (1 < Infinity)
  
  6. min = arr[len];
  
  Nima qiladi?:
  
  min o'zgaruvchisiga yangi eng kichik qiymat sifatida joriy element (arr[len]) qiymati qiymat sifatida beriladi. 
  
  Natija:
  min => doimo massivning hozirgacha ko'rilgan => eng kichik qiymatini saqlab boradi. 
  
  7. return min;
  
  Nima qiladi?:
  Sikl tugagandan keyin topilgan eng kichik qiymatni (min) funksiyadan qaytarib beradi.
  
  Natija:
  Massivning eng kichik elementi => funksiya natijasi sifatida qaytadi. 
  
  Misol:
  
  const arr = [40, 100, 1, 5, 25, 10];
  console.log(myArrayMin(arr)); // 1
  
  
  qisqacha tushuntirish: 
  Kodni ishlash jarayoni quyidagicha:
  
  Massiv uzunligi va boshlang'ich qiymat sifatida javascriptdagi Eng katta son bo'lgan musbat cheksizlik (Infinity) belgilanadi.
  Massivning oxirgi elementidan boshlab har bir element tekshiriladi.
  Agar element hozirgacha topilgan eng kichik qiymatdan kichik bo'lsa, u yangi eng kichik qiymat sifatida belgilanadi.
  Sikl tugagach, eng kichik qiymat qaytariladi. \n\n`;
  
    let arr5 = [40, 100, 1, 5, 25, 10];
  
    function myArrayMinValue(arr) {
      let len = arr.length;
      let min = Infinity;
      while (len--) {
        if (arr[len] < min) {
          min = arr[len];
        }
      }
      return min;
    }
  
    let minValueFunction = myArrayMinValue(arr5);
  
    output += `[40, 100, 1, 5, 25, 10] massividan => Eng kichik qiymat: ${JSON.stringify(
      minValueFunction
    )} 
  \n\n`;
  
    //=================
  
    output += `JavaScript massivida eng katta qiymatni topish uchun o'rnatilgan funksiya mavjud emas.
  
    Eng katta raqamni topish uchun eng tezkor kod qo'lbola eng katta qiymatni topish usulidan foydalanishdir. \n\n`;
  
    output += `JavaScriptda eng katta sonni topuvchi qo'lbola funksiya algoritmi:
  
      function myArrayMax(arr) {
        let len = arr.length;
        let max = -Infinity;
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
      }
  
      \n`;
  
    output += `1. function myArrayMax(arr)
    Nima qiladi?:
    Bu funksiya massivning (myArrayMax() funksiyasi parametriga berilgan argument sifatida berilgan massiv) eng katta elementini topadi.
    arr:
    Funksiyaga argument sifatida uzatilgan massiv.
  
    2. let len = arr.length;
  
    Nima qiladi?:
    len o'zgaruvchisiga massivning uzunligini (arr.length) saqlaydi.
  
    Nimaga kerak?:
    Massivda nechta elementlar soni borligi bizga noma'lum. Ammo massivning length xossasi bizga shu massivning elementlar sonini aniqlab beradi.
    Bu orqali massivni oxiridan boshlab elementlarini teskari tartibda tekshirish uchun foydalaniladi.
  
    Misol:
  
    const arr = [40, 100, 1, 5, 25, 10];
    console.log(arr.length); // 6
  
    3. let max = -Infinity;
  
    Nima qiladi?:
    max o'zgaruvchisi boshlang'ich qiymat sifatida -Infinity (-Cheksizlik = eng kichik manfiy son) berilgan.
  
    Nimaga kerak?:
    -Infinity qiymati har qanday son bilan solishtirganda eng kichik musbat son, shuning uchun bu dastlabki eng katta qiymat sifatida ishlatiladi.
  
    Misol:
    console.log(10 > -Infinity); // true
  
    4. while (len--) {...}
  
    Nima qiladi?:
    while takrorlab beruvchisi orqali massivning barcha elementlari teskari tartibda (oxiridan boshigacha) tekshiriladi.
  
    len--:
    len o'zgaruvchisi har bir iteratsiyada 1 ga kamayadi.
  
    Bu sikl len > 0 bo'lganda davom etadi, va massivning har bir elementi qayta ishlanadi.
    Misol:
  
    let len = 3;
    while (len--) {
      console.log(len); // 2, 1, 0
    }
  
    5. if (arr[len] > max) {...}
  
    Nima qiladi?:
    Joriy element (arr[len]) bilan hozirgacha topilgan eng katta qiymat (max) solishtiriladi.
    Agar joriy element (arr[len]) eng katta bo'lsa:
    max o'zgaruvchisiga joriy element qiymati qiymat sifatida beriladi.
  
    Misol:
  
    const arr = [40, 100, 1, 5, 25, 10];
    let min = -Infinity;
    console.log(arr[2] > max); // true (1 > -Infinity)
  
    6. max = arr[len];
  
    Nima qiladi?:
  
    max o'zgaruvchisiga yangi eng katta qiymat sifatida joriy element (arr[len]) qiymati qiymat sifatida beriladi.
  
    Natija:
    max => doimo massivning hozirgacha ko'rilgan => eng katta qiymatini saqlab boradi.
  
    7. return min;
  
    Nima qiladi?:
    Sikl tugagandan keyin topilgan eng katta qiymatni (max) funksiyadan qaytarib beradi.
  
    Natija:
    Massivning eng katta elementi => funksiya natijasi sifatida qaytadi.
  
    Misol:
  
    const arr = [40, 100, 1, 5, 25, 10];
    console.log(myArrayMax(arr)); // 100
  
    qisqacha tushuntirish:
    Kodni ishlash jarayoni quyidagicha:
  
    Massiv uzunligi va boshlang'ich qiymat sifatida javascriptdagi Eng kichik son bo'lgan manfiy cheksizlik (-Infinity) belgilanadi.
    Massivning oxirgi elementidan boshlab har bir element tekshiriladi.
    Agar element hozirgacha topilgan eng katta qiymatdan katta bo'lsa, u yangi eng katta qiymat sifatida belgilanadi.
    Sikl tugagach, eng katta qiymat qaytariladi.
  
    \n\n`;
  
    let arr6 = [40, 100, 1, 5, 25, 10];
  
    function myArrayMaxValue(arr) {
      let len = arr.length;
      let max = -Infinity;
      while (len--) {
        if (arr[len] > max) {
          max = arr[len];
        }
      }
      return max;
    }
  
    let maxValueFunc = myArrayMaxValue(arr6);
  
    output += `[40, 100, 1, 5, 25, 10] massividan => Eng katta qiymat: ${JSON.stringify(
      maxValueFunc
    )} \n\n`;
  
    //=================
  
    output += `Obyekt massivlarini saralash
  
  JavaScript massivlarida ko'pincha => obyektlar mavjud:
  
  Misol:
  
  const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  
  Ob'ektlar => har xil turdagi ma'lumotlarning xususiyatlariga ega bo'lsa ham, bu sort() usuli => massivni saralash uchun ishlatilishi mumkin.
  
  Masala: Yuqoridagi masivdan foydalanib, elementlarni yiliga ko'ra o'sish tartibida joylashtiring
  
  Yechim xususiyat qiymatlarini solishtirish uchun => taqqoslash funktsiyasini yozishdir:
  
  Misol: 
  
  cars.sort(function(a, b){return a.year - b.year}); 
  
  Endi masalani yechamiz: 
  
  Massivdagi elementlarni yiliga ko'ra o'sish tartibida joylashtirish algoritmi:
  
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
  
  Yuqoridagi kod tahlili: 
  
  1. const cars = [...]
  Nima qiladi?
  cars nomli massiv yaratiladi. Bu massivda uchta obyekt mavjud. Har bir obyekt mashina turi (type) va ishlab chiqarilgan yili (year) haqida ma'lumot saqlaydi.
  
  Misol:
  console.log(cars[0]); // {type: "Volvo", year: 2016}
  console.log(cars[1].type); // "Saab"
  console.log(cars[2].year); // 2010
  
  2. displayCars(); (Birinchi chaqiriq)
  
  Nima qiladi?
  displayCars funksiyasi birinchi marta chaqiriladi va cars massivining hozirgi holatdagi ma'lumotlarini konsolga chiqaradi.
  
  Natija: Konsolga quyidagi ma'lumotlar chiqariladi:
  
  Volvo 2016
  Saab 2001
  BMW 2010
  
  3. console.log("\n");
  
  Nima qiladi?
  Konsolda yangi qatorga o'tish uchun "\n" (yangi qator belgisi) chiqariladi.
  
  Natija: Konsolda ikki qator orasida bo'shliq hosil qiladi.
  
  4. cars.sort(function(a, b){return a.year - b.year});
  
  Nima qiladi?
  Bu qator cars massivini year xossasiga ko'ra o'sish tartibida saralaydi. 
  
  Bu yerda:
  
  function(a, b):
  Bu sort metodi uchun taqqoslash funksiyasi.
  a.year - b.year:
  Agar a.year kichikroq bo'lsa, manfiy qiymat qaytariladi (bu ani oldinga qo'yadi).
  Agar a.year katta bo'lsa, ijobiy qiymat qaytariladi (bu bni oldinga qo'yadi).
  Agar ular teng bo'lsa, 0 qaytariladi (o'rinlari o'zgarmaydi).
  
  Natija: Massiv quyidagicha saralanadi:
  
  [
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010},
    {type: "Volvo", year: 2016}
  ]
  
  5. displayCars(); (Ikkinchi chaqiriq)
  
  Nima qiladi?
  displayCars funksiyasi ikkinchi marta chaqiriladi va endi cars massivining saralangan holatdagi ma'lumotlarini konsolga chiqaradi.
  
  Natija: 
  Konsolga quyidagi ma'lumotlar chiqariladi:
  
  Saab 2001
  BMW 2010
  Volvo 2016
  
  6. function displayCars() { ... }
  Nima qiladi?
  Bu funksiya massivning barcha elementlarini birma-bir ko'rib chiqadi va ularning type va year xossalarini konsolga chiqaradi.
  
  for tsikli:
  
  for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].type + " " + cars[i].year + "\n");
  }
  
  bu yerda: 
  
  let i = 0: Tsikl boshlanishida i=0 ga tenglashtiriladi.
  i < cars.length: i => massiv uzunligidan kichik bo'lgungacha tsikl davom etadi.
  i++: Har bir iteratsiyada i bir birlikka oshiriladi.
  
  console.log:
  Har bir iteratsiyada cars[i] obyektining type va year qiymatlari konsolga chiqariladi.
  
  "\n" bilan yangi qatorga o'tish qo'shiladi.
  
  To'liq ishlash jarayoni:
  
  Dastlabki massiv:
  
  Volvo 2016
  Saab 2001
  BMW 2010
  
  Massivni saralash:
  cars.sort(...) yordamida year bo'yicha o'sish tartibida saralanadi.
  
  Saralangan massiv:
  
  Saab 2001
  BMW 2010
  Volvo 2016
  
  Tahlilning muhim jihatlari:
  
  Massiv elementlarini konsolga chiqarish:
  displayCars funksiyasi har bir obyektni iteratsiya qiladi va konsolga chiqaradi.
  
  Massivni saralash:
  sort metodi massivni year xossasiga ko'ra saralaydi.
  
  Tartib o'zgarishi:
  Massivning dastlabki holati va saralangan holati displayCars funksiyasi orqali ko'rsatiladi.
  
  Massivning dastlabki holati: \n`;
  
    const cars = [
      { type: "Volvo", year: 2016 },
      { type: "Saab", year: 2001 },
      { type: "BMW", year: 2010 },
    ];
  
    displayCars();
  
    output += `\n Massivning saralangan holati \n`;
  
    cars.sort(function (a, b) {
      return a.year - b.year;
    });
    displayCars();
  
    function displayCars() {
      for (let i = 0; i < cars.length; i++) {
        output += `${JSON.stringify(cars[i].type)} ${JSON.stringify(
          cars[i].year
        )} \n`;
      }
    }
  
    //=================
  
    output += `
    
    const cars1 = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
  ];
  
  displayCars2();
  
  myFunction1();
  
  function myFunction1() {
    cars1.sort(function(a, b) {
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
    displayCars2();
  }
  
  function displayCars2() {
    let string = "";
    for (let i = 0; i < cars1.length; i++) {
      string += "cars1[i].type cars1[i].year \n";
    }
    output += string;
  }
  
  Tahlil:
  
  1. const cars1 = [...]
  Nima qiladi?
  
  cars1 nomli massiv e'lon qilinadi.
  Bu massiv ichida uchta obyekt mavjud:
  
  { type: "Volvo", year: 2016 }
  { type: "Saab", year: 2001 }
  { type: "BMW", year: 2010 }
   
  Har bir obyekt type (mashina turi) va year (ishlab chiqarilgan yil) xossalariga ega.
  
  Kerakligi:
  Massivni saralash va ma'lumotlarini ko'rsatish uchun ishlatiladi.
  
  2. displayCars2();
  
  Nima qiladi?
  Dastlab cars1 massivining hozirgi holatini chiqarish uchun displayCars2 funksiyasini chaqiradi.
  
  3. myFunction1();
  
  Nima qiladi?
  cars1 massivini saralaydi va qayta chiqaradi.
  
  Ishlash tartibi:
  Avval massivni type qiymatlariga qarab alfavit tartibida saralaydi.
  Keyin displayCars2 funksiyasini chaqiradi va saralangan natijani ko'rsatadi. 
  
  4. function myFunction1() {...}
  Nima qiladi?
  Bu funksiya cars1 massivini type qiymatlari bo'yicha alfavit tartibida saralaydi va natijani chiqarish uchun displayCars2 funksiyasini chaqiradi.
  Ichki jarayon:
  
  cars1.sort(function(a, b) {...}):
  
  sort funksiyasi => cars1 massivini saralaydi.
  Taqqoslash funksiyasi a.type va b.type qiymatlarini kichik harflarga o'tkazib solishtiradi.
  Agar a.type kichik bo'lsa, -1 qaytariladi, bu ani oldinga qo'yadi.
  Agar a.type katta bo'lsa, 1 qaytariladi, bu bni oldinga qo'yadi.
  Agar ular teng bo'lsa, 0 qaytariladi.
  
  Natija: Saralashdan so'ng massiv quyidagicha bo'ladi:
  
  [
    { type: "BMW", year: 2010 },
    { type: "Saab", year: 2001 },
    { type: "Volvo", year: 2016 }
  ]
  5. function displayCars2() {...}
  
  Nima qiladi?
  Bu funksiya cars1 massivining barcha elementlarini o'qib, ularni string o'zgaruvchisiga matn sifatida qo'shadi.
  Keyin output o'zgaruvchisiga ushbu string qiymatini qo'shadi.
  
  Ichki jarayon:
  let string = "";:
  Har bir element uchun matnni saqlash uchun bo'sh o'zgaruvchi yaratiladi.
  
  for tsikli:
  Massivni boshidan oxirigacha iteratsiya qiladi.
  Har bir elementni matn shaklida (JSON.stringify) string o'zgaruvchisiga qo'shadi:
  
  "Volvo" 2016
  
  output += string;:
  string qiymati output'ga qo'shiladi.
  
  \n\n`;
    const cars1 = [
      { type: "Volvo", year: 2016 },
      { type: "Saab", year: 2001 },
      { type: "BMW", year: 2010 },
    ];
  
    output += `Massivning dastlabki ko'rinishi: \n`
  
    displayCars2();
  
    output += `\n Massivning alfabet bo'yicha saralangan ko'rinishi: \n`
    
    myFunction1();
  
    function myFunction1() {
      cars1.sort(function(a, b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
      displayCars2();
    }
  
    function displayCars2() {
      let string = "";
      for (let i = 0; i < cars1.length; i++) {
        string += `${JSON.stringify(cars1[i].type)} ${JSON.stringify(cars1[i].year)} \n`;
      }
      output += string;
    }
    
  // Final output
  outputDiv.textContent = output;
}

function clearOutput() {
  document.getElementById("output").querySelector("pre").textContent = "";
  document.getElementById("inputString").value = "";
}

const array = [40, 100, 1, 5, 25, 10];

function myFunction() {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = array[i];
    array[i] = array[j];
    array[j] = k;
  }
  document.getElementById("demo").innerHTML = array;
}

