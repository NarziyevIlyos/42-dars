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
  // Massivdan elementni TOPISH va QIDIRISH usullari
  output += `Massivdan elementni TOPISH va QIDIRISH usullari \n\n`;

  output += `Eslatma!!!
* Massivda elementlar => 0 dan boshlab sanaladi, chunki komputer 0 va 1 dan tashkil topgan \n\n
* Massivdagi QIDIRUV va TOPISH usullari agar berilgan massivdan biror bir elementni topa olmasa -1 qaytaradi. \n
* Nega -1 qaytaradi, 0 emas?
* Chunki, massiv elementlari => 0 dan boshlab sanaladi. Bu esa qidirilyotgan element eng kamida massivning 0-indeksida turadi degani. Shuning uchun QIDIRUV usullari TOPILMAGAN natijani berish uchun -1 degan qiymatni qaytaradi \n\n
* indexOf() va lastIndexOf() massivni 0-indeksdan boshlab elementni qidiradi \n\n`;

  output += `19.  array.indexOf(searchingElement, indexOfStartSearch ) 
\n`;
  output += `O'qilishi:
1-parametr => Qidirilyotgan element;
2-parametr => Qidiruvni Boshlash JOYI; 

* 1-topilgan element indeksini => natija sifatida chiqar \n\n`;

  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  output += `massiv: const fruits = ["Apple", "Orange", "Apple", "Mango"]; \n`;
  let firstPosition = fruits.indexOf("Apple");
  output += `Kodi: let position = fruits.indexOf("Apple"); \n\n`;
  output += `Qidiruv natijasi: ${JSON.stringify(firstPosition)}\n\n`;

  output += `20.  array.lastIndexOf(searchingElement, indexOfStartSearch ) 
\n`;
  output += `O'qilishi:
1-parametr => Qidirilyotgan element;
2-parametr => Qidiruvni Boshlash JOYI; 

* Oxirgi-topilgan element indeksini => natija sifatida chiqar\n\n`;

  //const fruits = ["Apple", "Orange", "Apple", "Mango"];
  output += `massiv: const fruits = ["Apple", "Orange", "Apple", "Mango"]; \n`;
  let lastPosition = fruits.lastIndexOf("Apple");
  output += `Kodi: let position = fruits.lastIndexOf("Apple"); \n\n`;
  output += `Qidiruv natijasi: ${JSON.stringify(lastPosition)}\n\n`;

  output += `21.  array.includes(searchingElement ) 
\n`;
  output += `O'qilishi:
Includes() parametrida ko'rsatilgan qidirilyotgan element massivda bor-yo'qligini includes() usuli yordamida tekshir; 
agar bor bo'lsa TRUE, yo'q bo'lsa FALSE mantiqiy qiymatni qaytar; \n\n`;

  //const fruits = ["Apple", "Orange", "Apple", "Mango"];
  output += `massiv: const fruits = ["Apple", "Orange", "Apple", "Mango"]; \n`;
  let isHaveSearchingElement = fruits.includes("Apple");
  output += `Kodi: let isHaveSearchingElement = fruits.includes("Apple"); \n\n`;
  output += `Qidiruv natijasi: ${JSON.stringify(isHaveSearchingElement)}\n\n`;

  // 22. array.find(callback)
  output += `22.  array.find(callback(value, index, nameOfArray));
\n`;
  output += `O'qilishi:
find() usuli => xuddi for operatoriga o'xshab, => massivdagi har bir elementni Massivning BOSHIdan ko'rib chiqadi, 
va o'zining parametrida berilgan TEKSHIRUVCHI  CALLBACK funksiyaga shu elementning QIYMATIni, INDEKSIni va shu element joylashgan butun Massivni uzatadi, 
TEKSHIRUVCHI callback funksiya esa elementlarni => TEKSHIRADI, va Tekshiruvdan o'tgan elementlarni FIND() usuliga QAYTARADI, 
tekshiruvdan o'tgan 1-elementni olgan FIND() usuli esa ishlashni to'xtatadi, va 1-elementdan NUSXA olib, uni QAYTARADI. 

*  Agar hech qanday element shartni qanoatlantirmasa, find() usuli => UNDEFINED qaytaradi.

Asosiy xulosalar:

find() usuli => haqiqatan ham qiymat , indeks va massivni qayta chaqiriluvchi funksiyaga (= callback funksiyaga) o'tkazadi .
Agar kerak bo'lsa, qayta chaqiriluvchi funksiya => bu argumentlardan foydalanadi, lekin ko'p hollarda faqat value ishlatiladi.\n\n`;

  const numbers = [4, 9, 16, 25, 29];
  let firstSearchingElement = numbers.find(myFunction);

  function myFunction(value, index, array) {
    return value > 18;
  }

  output += `const numbers = [4, 9, 16, 25, 29]; \n`;
  output += `let firstSearchingElement = numbers.find(myFunction); 
\n
function myFunction(value, index, array) {
  return value > 18;
}

find() usulining haqiqatdan ham value, index, va arrayni o'zining callback funksiyasiga uzatayotganini ushbu qismda ko'rishingiz mumkin :

Kodi:

const numbers = [4, 9, 16, 25, 29];

let first = numbers.find((value, index, array) => {
  console.log("Value:", value, "Index:", index, "Array:", array);
  return value > 18;
});

Natijasi: \n\n`;
  let first = numbers.find((value, index, array) => {
    output += `Value: ${JSON.stringify(value)}, Index: ${JSON.stringify(
      index
    )}, Array: ${JSON.stringify(array)} \n`;
    return value > 18;
  });
  output += `\n`;
  output += `Qidiruv natijasi: ${JSON.stringify(firstSearchingElement)}\n\n`;

  // ======================

  // array.findLast()
  output += `24.  array.findLast(callback(value, index, nameOfArray));
   \n`;
  output += `O'qilishi:
   findLast() usuli => xuddi for operatoriga o'xshab, => massivdagi har bir elementni Massivning OXIRIdan ko'rib chiqadi, 
   va o'zining parametrida berilgan TEKSHIRUVCHI  CALLBACK funksiyaga shu elementning QIYMATIni, INDEKSIni va shu element joylashgan butun Massivni uzatadi, 
   TEKSHIRUVCHI callback funksiya esa elementlarni => TEKSHIRADI, va Tekshiruvdan o'tgan elementlarni findLast() usuliga QAYTARADI, 
   tekshiruvdan o'tgan 1-elementni olgan findLast() usuli esa ishlashni to'xtatadi, va 1-elementdan NUSXA olib QAYTARADI. 
   
   *  Agar hech qanday element shartni qanoatlantirmasa, findLast() usuli => UNDEFINED qaytaradi.
   
   Asosiy xulosalar:
 
   findLast() usuli => haqiqatan ham qiymat , indeks va massivni qayta chaqiriluvchi funksiyaga (= callback funksiyaga) o'tkazadi .
   Agar kerak bo'lsa, qayta chaqiriluvchi funksiya => bu argumentlardan foydalanadi, lekin ko'p hollarda faqat value ishlatiladi.\n\n`;

  // const numbers = [4, 9, 16, 25, 29];
  // let firstSearchingElement = numbers.findIndex(myFunction);

  // function myFunction(value, index, array) {
  //   return value > 18;
  // }

  output += `const numbers = [4, 9, 16, 25, 29]; \n`;
  output += `let searchingLastElement = numbers.findLast(myFunction); 
   \n
   function myFunction(value, index, array) {
     return value > 18;
   }
 
   findLast() usulining haqiqatdan ham value, index, va arrayni o'zining callback funksiyasiga uzatayotganini ushbu qismda ko'rishingiz mumkin :
   
   Kodi:
 
   const numbers = [4, 9, 16, 25, 29];
 
   let last = numbers.findLast((value, index, array) => {
     console.log("Value:", value, "Index:", index, "Array:", array);
     return value > 18;
   });
   
   Natijasi: \n\n`;
  let searchingLastElement = numbers.findLast((value, index, array) => {
    output += `Value: ${JSON.stringify(value)}, Index: ${JSON.stringify(
      index
    )}, Array: ${JSON.stringify(array)} \n`;
    return value > 18;
  });
  output += `\n`;
  output += `Qidiruv natijasi: ${JSON.stringify(searchingLastElement)}\n\n`;

  // ======================

  // array.findIndex();
  output += `25.  array.findIndex(callback(value, index, nameOfArray));
\n`;
  output += `O'qilishi:
findIndex() usuli => xuddi for operatoriga o'xshab, => massivdagi har bir elementni Massivning BOSHIdan ko'rib chiqadi, 
va o'zining parametrida berilgan TEKSHIRUVCHI  CALLBACK funksiyaga shu elementning QIYMATIni, INDEKSIni va shu element joylashgan butun Massivni uzatadi, 
TEKSHIRUVCHI callback funksiya esa elementlarni => TEKSHIRADI, va Tekshiruvdan o'tgan elementlarni findIndex() usuliga QAYTARADI, 
tekshiruvdan o'tgan 1-elementni olgan findIndex() usuli esa ishlashni to'xtatadi, va 1-elementning INDEKSIdan NUSXA olib QAYTARADI. 

*  Agar hech qanday element shartni qanoatlantirmasa, findIndex() usuli => UNDEFINED qaytaradi.

Asosiy xulosalar:

findIndex() usuli => haqiqatan ham qiymat , indeks va massivni qayta chaqiriluvchi funksiyaga (= callback funksiyaga) o'tkazadi .
Agar kerak bo'lsa, qayta chaqiriluvchi funksiya => bu argumentlardan foydalanadi, lekin ko'p hollarda faqat value ishlatiladi.\n\n`;

  // const numbers = [4, 9, 16, 25, 29];
  // let firstSearchingElement = numbers.findIndex(myFunction);

  // function myFunction(value, index, array) {
  //   return value > 18;
  // }

  output += `const numbers = [4, 9, 16, 25, 29]; \n`;
  output += `let indexOfSearchingFirstElement = numbers.findIndex(myFunction); 
\n
function myFunction(value, index, array) {
  return value > 18;
}

findIndex() usulining haqiqatdan ham value, index, va arrayni o'zining callback funksiyasiga uzatayotganini ushbu qismda ko'rishingiz mumkin :

Kodi:

const numbers = [4, 9, 16, 25, 29];

let first = numbers.findIndex((value, index, array) => {
  console.log("Value:", value, "Index:", index, "Array:", array);
  return value > 18;
});

Natijasi: \n\n`;
  let indexOfSearchingFirstElement = numbers.findIndex(
    (value, index, array) => {
      output += `Value: ${JSON.stringify(value)}, Index: ${JSON.stringify(
        index
      )}, Array: ${JSON.stringify(array)} \n`;
      return value > 18;
    }
  );
  output += `\n`;
  output += `Qidiruv natijasi: ${JSON.stringify(
    indexOfSearchingFirstElement
  )}\n\n`;

  // ======================

  // array.findLastIndex();
  output += `26.  array.findLastIndex(callback(value, index, nameOfArray));
\n`;
  output += `O'qilishi:
findLastIndex() usuli => xuddi for operatoriga o'xshab, => massivdagi har bir elementni Massivning OXIRIdan ko'rib chiqadi, 
va o'zining parametrida berilgan TEKSHIRUVCHI  CALLBACK funksiyaga shu elementning QIYMATIni, INDEKSIni va shu element joylashgan butun Massivni uzatadi, 
TEKSHIRUVCHI callback funksiya esa elementlarni => TEKSHIRADI, va Tekshiruvdan o'tgan elementlarni findLastIndex() usuliga QAYTARADI, 
tekshiruvdan o'tgan 1-elementni olgan findLastIndex() usuli esa ishlashni to'xtatadi, va 1-elementning INDEKSIdan NUSXA olib QAYTARADI. 

*  Agar hech qanday element shartni qanoatlantirmasa, findLastIndex() usuli => UNDEFINED qaytaradi.

Asosiy xulosalar:

findLastIndex() usuli => haqiqatan ham qiymat , indeks va massivni qayta chaqiriluvchi funksiyaga (= callback funksiyaga) o'tkazadi .
Agar kerak bo'lsa, qayta chaqiriluvchi funksiya => bu argumentlardan foydalanadi, lekin ko'p hollarda faqat value ishlatiladi.\n\n`;

  // const numbers = [4, 9, 16, 25, 29];
  // let firstSearchingElement = numbers.findIndex(myFunction);

  // function myFunction(value, index, array) {
  //   return value > 18;
  // }

  output += `const numbers = [4, 9, 16, 25, 29]; \n`;
  output += `let indexOfSearchingFirstElement = numbers.findLastIndex(myFunction); 
\n
function myFunction(value, index, array) {
  return value > 18;
}

findLastIndex() usulining haqiqatdan ham value, index, va arrayni o'zining callback funksiyasiga uzatayotganini ushbu qismda ko'rishingiz mumkin :

Kodi:

const numbers = [4, 9, 16, 25, 29];

let first = numbers.findLastIndex((value, index, array) => {
  console.log("Value:", value, "Index:", index, "Array:", array);
  return value > 18;
});

Natijasi: \n\n`;
  let result = numbers.find((value, index, array) => {
    output += `Value: ${JSON.stringify(value)}, Index: ${JSON.stringify(
      index
    )}, Array: ${JSON.stringify(array)} \n`;
    return value > 18;
  });

  let indexOfSearchingLastElement = numbers.findLastIndex(
    (value, index, array) => {
      output += `Value: ${JSON.stringify(value)}, Index: ${JSON.stringify(
        index
      )}, Array: ${JSON.stringify(array)} \n`;
      return value > 18;
    }
  );
  output += `\n`;
  output += `Qidiruv natijasi: ${JSON.stringify(
    indexOfSearchingLastElement
  )}\n\n`;

  //======================================================================
  //======================================================================
  output += `===================================================== \n===================================================== \n\n`;
  output += `Alfabet bo'yicha SARALASH \n\n`;

  // 27. Sort the array alphabetically
  output += `27. array.sort() \n Massivning qiymatiga kir, uning qiymatidagi har bir elementni shu joyning o'zida => ALFABET tartibida => SARALA va saralangan ELEMENTLARdan tashkil topgan massivni qaytar. 
\n`;
  output += `// students = ["Alice","BOB","charlie","dave","Eve","Frank","Zara"]\n`;
  output += `// kodi: students.sort();`;
  output += "// Sort the array alphabetically\n\n";
  students.sort();
  output += `Sorted Array: ${JSON.stringify(students)}\n\n`;

  // 28. Sort the array alphabetically
  output += `28. array.toSorted() \n Massivning qiymatidan NUSXA ol, olingan NUSXAning elementlarini ALFABET tartibida SARALA, keyin YANGI MASSIV yarat va SARALANGAN ELEMENTLARni shu massivga joyla va shu massivni QAYTAR. 
\n`;
  output += `// students = ["Alice","BOB","charlie","dave","Eve","Frank","Zara"]\n`;
  output += `// kodi: students.toSorted();`;
  output += `// Sort the array alphabetically\n\n`;
  let newSortedArray = students.toSorted();
  output += `Sorted Array: ${JSON.stringify(newSortedArray)}\n\n`;
  output += `Original Array: ${JSON.stringify(students)}\n\n`;

  output += `toSorted() usuli => asl massivni o'zgartirmasdan, undan NUSXA olib, shu NUSXAni => ALFABET tartibida SARALASHdan hosil bo'lgan massivni qaytaradi .

Farqi shundaki, toSorted() usuli => asl massivni o'zgartirmasdan => yangi massiv yaratadi, sort() usuli esa => asl massivni o'zgartirib, natija sifatida qaytaradi. \n\n`;

  // 29. Reverse the array
  output += `29. array.reverse() \n Massivning qiymatiga kir, uning qiymatidagi elementlar joylashuvini TESKARI tartibda joylashtir, TESKARI TARTIBda joylashgan elementlardan tashkil topgan massivni qaytar. 
\n`;
  output += `// students = ["Alice","BOB","Eve","Frank","Zara","charlie","dave"]\n`;
  output += `// kodi: students.reverse();`;
  output += "// Reverse the array\n";
  students.reverse();
  output += `Reversed Array: ${JSON.stringify(students)}\n\n`;

  //=================
  output += `30. array.toReversed() \n Massivning qiymatidan NUSXA ol, olingan NUSXAning elementlarini TESKARI tartibida SARALA, keyin YANGI MASSIV yarat va TESKARI tartibida SARALANGAN ELEMENTLARni shu massivga joyla va shu massivni QAYTAR. 
\n`;
  output += `// students = ["Alice","BOB","charlie","dave","Eve","Frank","Zara"]\n`;
  output += `// kodi: students.toReversed();`;
  output += `// Sort the array alphabetically\n\n`;
  let newReversedArray = students.toReversed();
  output += `Sorted Array: ${JSON.stringify(newReversedArray)}\n\n`;
  output += `Original Array: ${JSON.stringify(students)}\n\n`;
  output += `toReversed() usuli => asl massivni o'zgartirmasdan, undan NUSXA olib, shu NUSXAni teskari o'zgartirishdan hosil bo'lgan massivni qaytaradi .

Farqi shundaki, toReversed() usuli => asl massivni o'zgartirmasdan => yangi massiv yaratadi, reverse() usuli esa => asl massivni o'zgartirib, natija sifatida qaytaradi. \n\n`;

  //======================================================================
  //======================================================================
  output += `======================================================== \n======================================================== \n\n`;
  //=================

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
