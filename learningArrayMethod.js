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
  output +=
    "2. array.trim() \n // arrayning qiymatiga kirib, uning BOSHI va OXIRIdan BO'SH JOYlarni olib tashlab (= trim), massivni qaytar\n";
  students = students.map((name) => name.trim());
  output += `Cleaned Array: ${JSON.stringify(students)}\n\n`;

  // 3. Remove empty entries using filter
  output +=
    "3. array.filter() \n // Yangi MASSIV yarat, parametringga berilgan biror bir callback funksiyaga ko'ra tekshiruvdan o'tgan elementlarni olib, shu massivni to'ldir, to'ldirilgan yangi massivni qaytar.\n";
  students = students.filter((name) => name !== "");
  output += `Array after removing empty entries: ${JSON.stringify(
    students
  )}\n\n`;

  // 4. Add new students using push()
  output += `4. array.push() \n Massivning qiymatiga kir, uning qiymati OXIRIga push() => parametrida ko'rsatilgan ELEMENTLARNI => QO'SH, va massivni qaytar. 
  \n`;
  output += "// Add new students (Zara, Henry) using push()\n";
  students.push("Zara", "Henry");
  output += `Array after push: ${JSON.stringify(students)}\n\n`;

  // 5. Remove the last student using pop()
  output += `5. array.pop() \n Massivning qiymatiga kir, uning qiymatidan OXIRGI ELEMENTNI => OLIB TASHLA, va massivni qaytar. 
  \n`;
  output += "// Remove the last student using pop()\n";
  let removedStudent = students.pop();
  output += `Array after pop: ${JSON.stringify(
    students
  )} (Removed: ${removedStudent})\n\n`;

  // 6. Add a student to the beginning using unshift()
  output += `6. array.unshift() \n Massivning qiymatiga kir, uning qiymati OLDIdan => ko'rsatilgan ELEMENTLARNI => QO'SH, va massivni qaytar. 
  \n`;
  output += "// Add a student (Yvonne) to the beginning using unshift()\n";
  students.unshift("Yvonne");
  output += `Array after unshift: ${JSON.stringify(students)}\n\n`;

  // 7. Remove the first student using shift()
  output += `7. array.shift() \n Massivning qiymatiga kir, uning qiymati OLDIdan => ko'rsatilgan ELEMENTLARNI => OLIB TASHLA, va massivni qaytar. 
  \n`;
  output += "// Remove the first student using shift()\n";
  removedStudent = students.shift();
  output += `Array after shift: ${JSON.stringify(
    students
  )} (Removed: ${removedStudent})\n\n`;

  // 8. Sort the array alphabetically
  output += `8. array.sort() \n Massivning qiymatiga kir, uning qiymatidagi har bir elementni shu joyning o'zida => ALFABET tartibida => SARALA va saralangan ELEMENTLARdan tashkil topgan massivni qaytar. 
  \n`;
  output += "// Sort the array alphabetically\n";
  students.sort();
  output += `Sorted Array: ${JSON.stringify(students)}\n\n`;

  // 9. Reverse the array
  output += `9. array.reverse() \n Massivning qiymatiga kir, uning qiymatidagi elementlar joylashuvini TESKARI tartibda joylashtir, TESKARI TARTIBda joylashgan elementlardan tashkil topgan massivni qaytar. 
  \n`;
  output += "// Reverse the array\n";
  students.reverse();
  output += `Reversed Array: ${JSON.stringify(students)}\n\n`;

  // 10. Slice a subset of students
  output += `10. array.slice(startOfNumberIndex <= copyArray < byIndex) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, uning 1-parametrda ko'rsatilgan indeksdan boshlab => 2-parametrda ko'rsatilgan songacha (= Kirmaydi) bo'lgan belgilar ketma-ketligidan NUSXA olib, array sifatida qaytar 
  \n`;
  output += "// Extract a subset of students (index 1 to 3) using slice()\n";
  let subset = students.slice(1, 3);
  output += `Sliced Subset: ${JSON.stringify(subset)}\n\n`;

  // 11. Splice the array to remove 1 student and add 2 new ones
  output += `11. array.splice(changingIndexOfArray, numberOfRemovedElements, newElements) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxadan 1-parametrda ko'rsatilgan indeksdan boshlab => O'ZGARTIRISH kirit, bunda 2-parametr => OLIB TASHLANADIGAN elementlar SONI, 3-parametr => esa shu massivga QO'SHILYOTGAN elementlardir. Hosil bo'lgan yangi qiymatni qaytar 
  \n`;
  output += "// Replace 1 student at index 2 with 2 new ones using splice()\n";
  students.splice(2, 1, "Ivy", "Jade");
  output += `Array after splice: ${JSON.stringify(students)}\n\n`;

  // 12. Flatten a nested array using flat()
  output += `12. array.flat() 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxadagi ICHMA-ICH JOYLASHGAN MASSIVlar ichidagi elementlarni YAKKA MASSIV elementlari sifatida joylashtir va yangi massivni qaytar 
  \n`;
  output += "// Flatten a nested array of groups\n";
  let nestedGroups = [["Alice", "Bob"], ["Charlie", "Dave"], ["Eve"]];
  let flatArray = nestedGroups.flat();
  output += `Flattened Array: ${JSON.stringify(flatArray)}\n\n`;

  // 13. Concatenate two arrays
  output += `13. array.concat(elseArray) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, shu qiymat OXIRIGA 2-ARRAYni BIRLASHTIR, BIRLASHTIRILGAN qiymatni qaytar 
  \n`;
  output += `Array: ["dave","charlie","Ivy","Jade","Frank","Eve","BOB","Alice"] \n\n`;
  output += `addingArray:  ["Kyle", "Liam"] \n\n`;
  output += "// Concatenate two arrays\n";
  let additionalStudents = ["Kyle", "Liam"];
  let allStudents = students.concat(additionalStudents);
  output += `Concatenated Array: ${JSON.stringify(allStudents)}\n\n`;

  // 14. Copy part of the array within itself using copyWithin()
  output += `14. array.copyWithin(indexOfChangingElement, indexOfCopyingStartElement, numberOfCopyingElements ) 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, unga quyidagi tartibda O'ZGARTIRISH kirit: 
  1-parametr => O'ZGARTIRILAYOTGAN element indeksi;
  2-parametr => NUSXA olinayotgan BOSHLANG'ICH element INDEKSI;
  3-parametr => NUSXA olinayotgan Elementlar SONI;
  
  ya'ni, m-indeksdan BOSHLAB k ta elementdan NUSXA OL va uni n-indeksda turgan element bilan ALMASHTIR
  \n`;
  output += "// Copy part of the array within itself using copyWithin()\n";
  allStudents.copyWithin(0, 2, 4);
  output += `Array after copyWithin: ${JSON.stringify(allStudents)}\n\n`;

  // 15. Delete an element (creates a hole)
  output += `15. delete array[3] 
  \n`;
  output += `// o'qilishi: array o'zgaruvchisining qiymatiga kirib, shu qiymatning [n-indeksda] turgan elementni O'CHIRIB TASHLA va uni qaytar 
  \n`;
  output += `Array: ${JSON.stringify(allStudents)}\n\n`;
  output += "\n // Delete a student (index 3) using delete\n";
  delete allStudents[3];
  output += `Array after delete: ${JSON.stringify(allStudents)}\n\n`;

  // Final output
  outputDiv.textContent = output;
}

function clearOutput() {
  document.getElementById("output").querySelector("pre").textContent = "";
  document.getElementById("inputString").value = "";
}
