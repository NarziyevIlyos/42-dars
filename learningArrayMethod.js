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

points.sort(function(a, b){return a - b});
output += `Natija: ${JSON.stringify(points)} \n\n`;

output += `Massivni KAMAYISH bo'yicha SARALASH uchun xuddi shu usuldan foydalaning: 

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a}); 
\n`;

points.sort(function(a, b){return b - a});
output += `Natija: ${JSON.stringify(points)} \n\n`;

output += `ESLATMA!!!

* SORT() usuli => PARAMETRSIZ => ALFABET bo'yicha TARTIBLAYDI.
* SORT() usuli => PARAMETRI bo'lsa => SON bo'yicha TARTIBLAYDI.
* SORT() usuli => 1 ta ixiyoriy parametrga ega, u ham bo'lsa => TAQQOSLASH funksiyasidir. 
* SORT() usuli => o'zining CALLBACK Funksiyasiga bir vaqtning o'zida 2 ta ARGUMENT uzatishga mo'ljallangan usuldir.
* TAQQOSLASH funksiyasiga chaqiriqlar soni => ichki ishlatiladigan tartiblash algoritmiga bog'liq.
\n`;

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
