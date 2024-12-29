function startTrainer() {
  const inputString = document.getElementById("inputString").value;
  const outputDiv = document.getElementById("output").querySelector("pre");
  if (!inputString) {
    outputDiv.textContent = "Please enter a string to begin.";
    return;
  }

  let output = `Original String: ${inputString}\n\n`;

  // Demonstrating String Methods - String usullarini ko'rsatish
  output += `//string.length 
  \n`;
  output += `//  o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning uzunligini qaytar 
  \n      1. String length: ${inputString.length}
  \n`;

  //===================

  output += `// string.charAt(numberIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning n-indekda turgan belgini qaytar \n`;
  output += `      2. Character at index 2 (charAt): ${inputString.charAt(
    2
  )}
  \n`;

  //===================

  output += `// string.charCodeAt(numberIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning n-indekda turgan unikodini (= takrorlanmas kodini) qaytar 
  \n`;
  output += `      3. Unicode of character at index 2 (charCodeAt): ${inputString.charCodeAt(
    2
  )}
  \n`;
  //===================
  output += `// string.at(numberIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning n-indekda turgan belgini qaytar 
  \n`;
  output += `      4. Character at index -1 using at(): ${inputString.at(-1)}
  \n`;
  //===================
  output += `// string[number] 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning n-indekda turgan belgini qaytar 
  \n`;
  output += `      5. Character at index 3 using [ ]: ${inputString[3]}
  \n`;
  //===================
  output += `// string.slice(startOfNumberIndex <= copyString < byIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning 1-parametrda ko'rsatilgan indeksdan boshlab => 2-parametrda ko'rsatilgan songacha (= Kirmaydi) bo'lgan belgilar ketma-ketligidan NUSXA olib qaytar 
  \n`;
  output += `      6. Sliced string (0, 5): ${inputString.slice(0, 5)}
  \n`;
  //===================
  output += `// string.substring(startOfNumberIndex <= copyString < byIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning 1-parametrda ko'rsatilgan indeksdan boshlab => 2-parametrda ko'rsatilgan songacha (= Kirmaydi) bo'lgan belgilar ketma-ketligidan NUSXA olib qaytar 
  \n`;
  output += `      7. Substring (1, 4): ${inputString.substring(1, 4)}
  \n`;
  //===================
  output += `// string.substr(startOfNumberIndex, numberOfCopyingElements) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning 1-parametrda ko'rsatilgan indekdan BOSHLAB, 2-parametrda ko'rsatilgan qiymatga teng elementlardan NUSXA olib ularni qaytar 
  \n`;
  output += `      8. Substr (2, 3): ${inputString.substr(2, 3)}
  \n`;
  //===================
  output += `// string.toUpperCase(numberIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, bu qiymatdan NUSXA olib, ularni KATTA HARFLARGA o'zgartirib qaytar 
  \n`;
  output += `      9. Uppercase string: ${inputString.toUpperCase()}
  \n`;
  //===================
  output += `// string.toLowerCase(numberIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan NUSXA ol, olingan nusxaning elementlarini KICHIK HARFLARGA o'zgartirib qaytar  
  \n`;
  output += `      10. Lowercase string: ${inputString.toLowerCase()}
  \n`;
  //===================
  output += `// string.concat(elseString) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan NUSXA ol, olingan nusxa bilan 2-STRING o'zgaruvchisining qiymatini BIRLASHTIRIB qaytar 
  \n`;
  output += `      11. Concatenated string: ${inputString.concat(" is fun!")}
  \n`;
  //===================
  output += `// string.trim() 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, qiymatning BOSHI va OXIRIdan => BO'SH JOYLARNI => OLIB TASHLAB, uni qaytar 
  \n`;

  const paddedString = "   Hello World!   ";
  output += `      12. Trimmed string: ${paddedString.trim()}
  \n`;
  //===================
  output += `// string.trimStart() 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, qiymatning BOSHIDAN => BO'SH JOYLARNI => OLIB TASHLAB, uni qaytar 
  \n`;
  output += `      13. Start-trimmed string: ${paddedString.trimStart()}
  \n`;
  //===================
  output += `// string.trimEnd(numberIndex) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, qiymatning OXIRIDAN => BO'SH JOYLARNI => OLIB TASHLAB, uni qaytar 
  \n`;
  output += `      14. End-trimmed string: ${paddedString.trimEnd()}
  \n`;
  //===================
  output += `// string.padStart(number, elseString) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxaning BOSHIni 2-string bilan TO'LDIR va yangi qiymatni qaytar 
  \n`;
  output += `      15. String padded at start: ${inputString.padStart(20, "-")}
  \n`;
  //===================
  output += `// string.padEnd(number, elseString) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxaning OXIRIni 2-string bilan TO'LDIR va yangi qiymatni qaytar 
  \n`;
  output += `      16. String padded at end: ${inputString.padEnd(20, "-")}
  \n`;
  //===================
  output += `// string.repeat(number) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan NUSXAni n-marta TAKRORLAngan qiymatni qaytar
  \n`;
  output += `      17. Repeated string 3 times: ${inputString.repeat(3)}
  \n`;
  //===================
  output += `// string.replace(changingString, newString) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxadan 1-parametrdagi almashtirilyotgan so'zni qidirib top, topilgan 1-so'zni 2-parametrda ko'rsatilgan yangi so'z bilan ALMASHTIR va hosil bo'lgan yangi qiymatni qaytar 
  \n`;
  output += `      18. Replace first occurrence of 'a' with '@': ${inputString.replace(
    "a",
    "@"
  )}
  \n`;
  //===================
  output += `// string.replaceAll(changingString, newString) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxadan 1-parametrdagi almashtirilyotgan so'zni qidirib top, topilgan BARCHA so'zlarni 2-parametrda ko'rsatilgan yangi so'z bilan ALMASHTIR va hosil bo'lgan yangi qiymatni qaytar  
  \n`;
  output += `      19. Replace all occurrences of 'a' with '@': ${inputString.replaceAll(
    "a",
    "@"
  )}
  \n`;
  //===================
  output += `// string.split(" ") 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan nusxa ol, split() parametrida ko'rsatilgan BELGI yordamida olingan nusxani alohida elementlarga bo'lib chiq, va bo'lingan elementlarni massiv elementlari sifatida qaytarib ber.   
  \n`;
  output += `// string.join(" | ") 
  \n`;
  output += `// o'qilishi: MASSIVga o'zgargan qiymat elementlarini join() usuli yordamida STRINGga aylantirib, uning qiymatini qaytar. Agar join() usuli parametrida maxsus belgi bo'lsa, u holda MASSIV elementlarini AJRATUVCHI belgi yordamida birlashtirib, STRINGga aylantirib, yangi qiymatni qaytar   
  \n`;
  output += `      20. Split string by spaces: ${inputString
    .split(" ")
    .join(" | ")}
    \n`;
    //===================
    output += `// string.indexOf(IndexOfSearchingString) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, qiymatdan nusxa ol, olingan nusxaning BOSHIDAN boshlab => indexOf usulining parametrida ko'rsatilgan stringni qidirib top, topilgan 1-natijaning joylashgan o'rnini indeksda qaytar 
  \n`;

  output += `      21. Index of 'a': ${inputString.indexOf("a")}
  \n`;
   //===================
   output += `// string.lastIndexOf(IndexOfSearchingString) 
   \n`;
   output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, qiymatdan nusxa ol, olingan nusxaning OXIRIDAN boshlab => indexOf usulining parametrida ko'rsatilgan stringni qidirib top, topilgan 1-natijaning joylashgan o'rnini indeksda qaytar 
   \n`;
  output += `      22. Last index of 'a': ${inputString.lastIndexOf("a")}
  \n`;
  //===================
  output += `// string.includes(searchingString) 
  \n`;
  output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, includes() usulining parametrida ko'rsatilgan stringni qidir, agar BOR bo'lsa => TRUE, yo'q bo'lsa FALSE qaytar 
  \n`;
  output += `      23. Does the string include 'hello'?: ${inputString.includes(
    "hello"
  )}
  \n`;

  // Puzzle time: Reverse a string using string methods
    //===================
    output += `// string.reverse() 
    \n`;
    output += `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, undan nusxa ol, olingan nusxaning TESKARI QIYMATNI qaytar
    \n`;
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  output += `      24. Puzzle: Reverse the string: ${reverseString(inputString)}
  \n`;

  // Bonus: Palindrome checker
  function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanedStr === reverseString(cleanedStr);
  }
  output += `Is the string a palindrome?: ${isPalindrome(inputString)}\n`;

  outputDiv.textContent = output;
}

function clearOutput() {
  document.getElementById("output").querySelector("pre").textContent = "";
  document.getElementById("inputString").value = "";
}
