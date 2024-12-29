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

  // 1. Array length
  output +=
    "1. array.length \n // arrayning qiymatiga kirib, uning UZUNLIGIni (= ELEMENTLAR SONIni) qaytar\n";
  output += `Array length: ${students.length}\n\n`;

  // 2. Clean up whitespace using map and trim
  output += `2. array.map(callback);
    map() usuli => xuddi for operatoriga o'xshab, => massivning qiymatidagi har bir elementni ko'rib chiqadi, va o'zining parametrida berilgan elementni qayta ishlovchi  CALLBACK funksiya yordamida elementlarni => O'ZGARTIRADI, va o'zgartirilgan elementlarni yangi bir massivga joylashtirib boradi va uni QAYTARADI.
    array.trim() \n // arrayning qiymatiga kirib, uning BOSHI va OXIRIdan BO'SH JOYlarni olib tashlab (= trim), massivni qaytar;
    
    students = [" Alice  ","BOB","  charlie","dave ","Eve","  ","Frank"];

    kod: students = students.map((name) => name.trim());
    \n`;
  students = students.map((name) => name.trim());
  output += `Cleaned Array: ${JSON.stringify(students)}\n\n`;

  // 3. Remove empty entries using filter
  output += `3. array.filter() \n // Yangi MASSIV yarat, parametringga berilgan biror bir callback funksiyaga ko'ra tekshiruvdan o'tgan elementlarni olib, shu massivni to'ldir, to'ldirilgan yangi massivni qaytar. 
  
    Filter ishlashi:

    Bunda filter() usuli => xuddi for operatoriga o'xshab, => massivning qiymatidagi har bir elementni ko'rib chiqadi, va o'zining parametrida berilgan shartga ko'ra (= callback funksiya) to'g'ri kelgan elementlarni yangi bir massivga joylashtirib boradi.
    \n`;
  output += `//Filtrlashdan oldingi massiv: ["Alice","BOB","charlie","dave","Eve","","Frank"] \n`;
  output += `//Filtrlash kodi:  students.filter((name) => name !== "") \n`;
  students = students.filter((name) => name !== "");
  output += `Array after removing empty entries: ${JSON.stringify(
    students
  )}\n\n`;

  // 4. Add new students using push()
  output += `4. array.push() \n Massivning qiymatiga kir, uning qiymati OXIRIga push() => parametrida ko'rsatilgan ELEMENTLARNI => QO'SH, va massivni qaytar. 
  \n`;
  output += `// students = ["Alice","BOB","charlie","dave","Eve","Frank"]\n`;
  output += `// students.push("Zara","Henry") \n`;
  output += "// Add new students (Zara, Henry) using push()\n";
  students.push("Zara", "Henry");
  output += `Array after push: ${JSON.stringify(students)}\n\n`;

  // 5. Remove the last student using pop()
  output += `5. array.pop() \n Massivning qiymatiga kir, uning qiymatidan OXIRGI ELEMENTNI => OLIB TASHLA, va massivni qaytar. 
  \n`;
  output += `// students = ["Alice","BOB","charlie","dave","Eve","Frank","Zara","Henry"] \n`;
  output += `// kodi: removedStudent = students.pop()`;
  output += "// Remove the last student using pop()\n";
  let removedStudent = students.pop();
  output += `Array after pop: ${JSON.stringify(
    students
  )} (Removed: ${removedStudent})\n\n`;

  // 6. Add a student to the beginning using unshift()
  output += `6. array.unshift() \n Massivning qiymatiga kir, uning qiymati OLDIdan => ko'rsatilgan ELEMENTLARNI => QO'SH, va massivni qaytar. 
  \n`;
  output += `// students = ["Alice","BOB","charlie","dave","Eve","Frank","Zara"] \n`;
  output += `// kodi: students.unshift("Yvonne");`;
  output += "// Add a student (Yvonne) to the beginning using unshift()\n";
  students.unshift("Yvonne");
  output += `Array after unshift: ${JSON.stringify(students)}\n\n`;

  // 7. Remove the first student using shift()
  output += `7. array.shift() \n Massivning qiymatiga kir, uning qiymati OLDIdan => ko'rsatilgan ELEMENTLARNI => OLIB TASHLA, va massivni qaytar. 
  \n`;
  output += `// students = ["Yvonne","Alice","BOB","charlie","dave","Eve","Frank","Zara"]\n`;
  output += `// kodi: students.shift();`;
  output += "// Remove the first student using shift()\n";
  removedStudent = students.shift();
  output += `Array after shift: ${JSON.stringify(
    students
  )} (Removed: ${removedStudent})\n\n`;

  // 8. Sort the array alphabetically
  output += `8. array.sort() \n Massivning qiymatiga kir, uning qiymatidagi har bir elementni shu joyning o'zida => ALFABET tartibida => SARALA va saralangan ELEMENTLARdan tashkil topgan massivni qaytar. 
  \n`;
  output += `// students = ["Alice","BOB","charlie","dave","Eve","Frank","Zara"]\n`;
  output += `// kodi: students.sort();`;
  output += "// Sort the array alphabetically\n";
  students.sort();
  output += `Sorted Array: ${JSON.stringify(students)}\n\n`;

  // 9. Reverse the array
  output += `9. array.reverse() \n Massivning qiymatiga kir, uning qiymatidagi elementlar joylashuvini TESKARI tartibda joylashtir, TESKARI TARTIBda joylashgan elementlardan tashkil topgan massivni qaytar. 
  \n`;
  output += `// students = ["Alice","BOB","Eve","Frank","Zara","charlie","dave"]\n`;
  output += `// kodi: students.reverse();`;
  output += "// Reverse the array\n";
  students.reverse();
  output += `Reversed Array: ${JSON.stringify(students)}\n\n`;

  // 10. Slice a subset of students
  output += `10. array.slice(startOfNumberIndex <= copyArray < byIndex) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, uning 1-parametrda ko'rsatilgan indeksdan boshlab => 2-parametrda ko'rsatilgan songacha (= Kirmaydi) bo'lgan belgilar ketma-ketligidan NUSXA olib, array sifatida qaytar 
  \n`;
  output += `// students = ["dave","charlie","Zara","Frank","Eve","BOB","Alice"]\n`;
  output += `// kodi: subset = students.slice(1, 3);`;
  output += "// Extract a subset of students (index 1 to 3) using slice()\n";
  let subset = students.slice(1, 3);
  output += `Sliced Subset: ${JSON.stringify(subset)}\n\n`;

  // 11. Splice the array to remove 1 student and add 2 new ones
  output += `11. array.splice(changingIndexOfArray, numberOfRemovedElements, newElements) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxaga quyidagicha o'zgartirish kirit: 
  // 1-parametrda ko'rsatilgan indeksdan boshlab => O'ZGARTIRISH kirit, 
  // bunda 2-parametr => OLIB TASHLANADIGAN elementlar SONI, 
  // 3-parametr => esa shu massivga QO'SHILYOTGAN elementlardir. 
  // Hosil bo'lgan yangi qiymatni qaytar 
  \n`;
  output += `// students = ["dave","charlie","Zara","Frank","Eve","BOB","Alice"]\n`;
  output += `// kodi: students.splice(2, 1, "Ivy", "Jade")`;
  output +=
    "// splice() dan foydalanib 2-indeksda turgan 1 ta talabani (= elementni) 2 ta yangi talaba (= 2 ta element) bilan almashtir\n";
  students.splice(2, 1, "Ivy", "Jade");
  output += `Array after splice: ${JSON.stringify(students)}\n\n`;

  // 12. Flatten a nested array using flat()
  output += `12. array.flat() 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan massiv nusxasidagi ICHMA-ICH JOYLASHGAN MASSIVlardan 1-darajali Massiv JOYLASHTIRISHni olib tashla va uni MASSIV elementlari sifatida joylashtir va yangi massivni qaytar. 
  \n`;
  output += `Flat() usuli => ichma-ich joylashtirilgan (= nested) massivlarni tekislash uchun ishlatiladi, 
  ya'ni u ko'p o'lchovli (ichma-ich joylashtirilgan) massivni => 1-darajali massivga aylantiradi.
  U flat() usulining parametrida => siz belgilagan chuqurlikka (= qiymatga) asoslangan holda joylashtirish darajalarini => olib tashlaydi . Odatda, u 1-darajali => tekislaydi .`;
  output += `// Flatten a nested array of groups\n`;
  output += `// nestedGroups = [["Alice", "Bob"], ["Charlie", "Dave"], ["Eve"]]\n`;
  output += `// kodi: let flatArray = nestedGroups.flat(); \n`;
  let nestedGroups = [["Alice", "Bob"], ["Charlie", "Dave"], ["Eve"]];
  let flatArray = nestedGroups.flat();
  output += `Flattened Array: ${JSON.stringify(flatArray)}\n\n`;

  // 13. Concatenate two arrays
  output += `13. array.concat(elseArray) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, shu qiymat OXIRIGA 2-ARRAYni BIRLASHTIR, BIRLASHTIRILGAN qiymatni qaytar 
  \n`;
  output += `Array: students = ["dave","charlie","Ivy","Jade","Frank","Eve","BOB","Alice"] \n\n`;
  output += `addingArray:  ["Kyle", "Liam"] \n\n`;
  output += `// kodi: let allStudents = students.concat(additionalStudents);\n`;
  output += "// Concatenate two arrays\n";
  let additionalStudents = ["Kyle", "Liam"];
  let allStudents = students.concat(additionalStudents);
  output += `Concatenated Array: ${JSON.stringify(allStudents)}\n\n`;

  // 14. converts an array to a string with toString()
  output += `14. array.toString() \n\n`;
  output += `O'qilishi: massivning qiymatidan NUSXA OL va shu nusxanining qiymatlarini => STRING turiga o'zgartir va uni massiv qiymatli STRING sifatida QAYTAR \n\n`;
  output += `// Massive: ${JSON.stringify(allStudents)}\n`;
  output += `// Kodi: let stringedArray = allStudents.toString(); \n`;
  let stringedArray = allStudents.toString();
  output += `Stringed Array: ${JSON.stringify(stringedArray)}\n\n`;

  // 15. converts an array to a string with join()
  output += `15. array.join() \n\n`;
  output += `O'qilishi: massivning qiymatidan NUSXA OL va shu nusxanining qiymatlarini => STRINGga o'zgartir, massivning ushbu elementlarini join() usuli parametrida ko'rsatilgan STRING turdagi AJRATUVCHI bilan BIRLASHTIR va uni QAYTAR \n\n`;
  output += `// Massive: ${JSON.stringify(allStudents)}\n`;
  output += `// Kodi: let stringedArray = allStudents.join(" - "); \n`;
  let stringedArrayWithSeparator = allStudents.join(" - ");
  output += `Stringed Array: ${JSON.stringify(stringedArrayWithSeparator)}\n\n`;

  // 16. returns an indexed element from an array
  output += `16. array.at() \n\n`;
  output += `O'qilishi: massivning qiymatiga kirib, at() usuli yordamida uning parameterida ko'rsatilgan qiymatga teng indeksda turgan elementdan NUSXA OL va uni QAYTAR \n\n`;
  output += `Massiv students = ${JSON.stringify(allStudents)}\n\n`;
  output += `// Kodi: let student = allStudents.at(7); \n`;
  let student = allStudents.at(7);
  output += `indexed element in Array: ${student}\n\n`;

  // 17. Copy part of the array within itself using copyWithin()
  output += `17. array.copyWithin(indexOfChangingElement, indexOfCopyingStartElement, numberOfCopyingElements ) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, unga quyidagi tartibda O'ZGARTIRISH kirit: 
  1-parametr => O'ZGARTIRILAYOTGAN element indeksi;
  2-parametr => shu massivning ICHIDAN (= WITHIN) NUSXA olinayotgan BOSHLANG'ICH element INDEKSI;
  3-parametr => NUSXA olinayotgan Elementlar SONI;
  
  ya'ni, m-indeksdan BOSHLAB k ta elementdan NUSXA OL va uni n-indeksda turgan element bilan ALMASHTIR
  \n`;
  output += ` \n`;
  output += `// kodi: allStudents.copyWithin(0, 2, 4); \n`;
  output +=
    "// copyWithin() yordamida o'zining ICHIDAN (= WITHIN) shu massivning qismidan NUSXA OL va QAYTAR\n";
  allStudents.copyWithin(0, 2, 4);
  output += `Array after copyWithin: ${JSON.stringify(allStudents)}\n\n`;

  // 18. Delete an element (creates a hole)
  output += `18. delete array[3] 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, shu qiymatning [n-indeksda] turgan elementni O'CHIRIB TASHLA va uni QAYTAR 
  \n`;
  output += `// Massiv:  allStudents = ${JSON.stringify(allStudents)}\n`;
  output += `// Kodi: delete allStudents[3]; \n`;
  ("\n // delete operatori yordamida shu massivning 3-indeksida turgan talabani O'CHIRIB TASHLA (= DELETE) \n");
  delete allStudents[3];
  output += `Array after delete: ${JSON.stringify(allStudents)}\n\n`;

  output += `====================================================\n`;
  output += `====================================================\n\n`;
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
  output += `Son bo'yicha SARALASH \n\n
  
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

\n\n`;

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

cars.sort(function(a, b){return a.year - b.year});
displayCars();

function displayCars() {
  console.log(
    cars[0].type + " " + cars[0].year + 
    "<br>" +
    cars[1].type + " " + cars[1].year + 
    "<br>" +
    cars[2].type + " " + cars[2].year
  );
  
}

  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
  //=================
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
