function startTrainer() {
  const inputString = document.getElementById("inputString").value;
  const outputDiv = document.getElementById("output").querySelector("pre");
  if (!inputString) {
    outputDiv.textContent = "Please enter a string to begin.";
    return;
  }

  let output = `Original String: ${inputString}\n\n`;

  // Demonstrating String Methods
//   output = `// o'qilishi: string o'zgaruvchisining qiymatiga kirib, uning uzunligini qaytar \n`;
  output += `1. String length: ${inputString.length}\n`;
  output = `// string.charAt(numberIndex) \n`;
  output += `2. Character at index 2 (charAt): ${inputString.charAt(2)}\n`;
  output += `3. Unicode of character at index 2 (charCodeAt): ${inputString.charCodeAt(
    2
  )}\n`;
  output += `4. Character at index -1 using at(): ${inputString.at(-1)}\n`;
  output += `5. Character at index 3 using [ ]: ${inputString[3]}\n`;
  output += `6. Sliced string (0, 5): ${inputString.slice(0, 5)}\n`;
  output += `7. Substring (1, 4): ${inputString.substring(1, 4)}\n`;
  output += `8. Substr (2, 3): ${inputString.substr(2, 3)}\n`;
  output += `9. Uppercase string: ${inputString.toUpperCase()}\n`;
  output += `10. Lowercase string: ${inputString.toLowerCase()}\n`;
  output += `11. Concatenated string: ${inputString.concat(" is fun!")}\n`;

  const paddedString = "   Hello World!   ";
  output += `12. Trimmed string: ${paddedString.trim()}\n`;
  output += `13. Start-trimmed string: ${paddedString.trimStart()}\n`;
  output += `14. End-trimmed string: ${paddedString.trimEnd()}\n`;
  output += `15. String padded at start: ${inputString.padStart(20, "-")}\n`;
  output += `16. String padded at end: ${inputString.padEnd(20, "-")}\n`;
  output += `17. Repeated string 3 times: ${inputString.repeat(3)}\n`;
  output += `18. Replace first occurrence of 'a' with '@': ${inputString.replace(
    "a",
    "@"
  )}\n`;
  output += `19. Replace all occurrences of 'a' with '@': ${inputString.replaceAll(
    "a",
    "@"
  )}\n`;
  output += `20. Split string by spaces: ${inputString
    .split(" ")
    .join(" | ")}\n`;

  output += `21. Index of 'a': ${inputString.indexOf("a")}\n`;
  output += `    Last index of 'a': ${inputString.lastIndexOf("a")}\n`;
  output += `    Does the string include 'hello'?: ${inputString.includes(
    "hello"
  )}\n`;

  // Puzzle time: Reverse a string using string methods
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  output += `\nPuzzle: Reverse the string: ${reverseString(inputString)}\n`;

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
