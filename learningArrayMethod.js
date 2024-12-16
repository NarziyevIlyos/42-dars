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
  output += `Initial Scrambled Array: ${JSON.stringify(students)}\n\n`;

  // 1. Array length
  output += "// Find the length of the array\n";
  output += `1. Array length: ${students.length}\n\n`;

  // 2. Clean up whitespace using map and trim
  output += "// Clean up the array by trimming spaces\n";
  students = students.map((name) => name.trim());
  output += `2. Cleaned Array: ${JSON.stringify(students)}\n\n`;

  // 3. Remove empty entries using filter
  output += "// Remove empty entries\n";
  students = students.filter((name) => name !== "");
  output += `3. Array after removing empty entries: ${JSON.stringify(
    students
  )}\n\n`;

  // 4. Add new students using push()
  output += "// Add new students (Zara, Henry) using push()\n";
  students.push("Zara", "Henry");
  output += `4. Array after push: ${JSON.stringify(students)}\n\n`;

  // 5. Remove the last student using pop()
  output += "// Remove the last student using pop()\n";
  let removedStudent = students.pop();
  output += `5. Array after pop: ${JSON.stringify(
    students
  )} (Removed: ${removedStudent})\n\n`;

  // 6. Add a student to the beginning using unshift()
  output += "// Add a student (Yvonne) to the beginning using unshift()\n";
  students.unshift("Yvonne");
  output += `6. Array after unshift: ${JSON.stringify(students)}\n\n`;

  // 7. Remove the first student using shift()
  output += "// Remove the first student using shift()\n";
  removedStudent = students.shift();
  output += `7. Array after shift: ${JSON.stringify(
    students
  )} (Removed: ${removedStudent})\n\n`;

  // 8. Sort the array alphabetically
  output += "// Sort the array alphabetically\n";
  students.sort();
  output += `8. Sorted Array: ${JSON.stringify(students)}\n\n`;

  // 9. Reverse the array
  output += "// Reverse the array\n";
  students.reverse();
  output += `9. Reversed Array: ${JSON.stringify(students)}\n\n`;

  // 10. Slice a subset of students
  output += "// Extract a subset of students (index 1 to 3) using slice()\n";
  let subset = students.slice(1, 3);
  output += `10. Sliced Subset: ${JSON.stringify(subset)}\n\n`;

  // 11. Splice the array to remove 1 student and add 2 new ones
  output += "// Replace 1 student at index 2 with 2 new ones using splice()\n";
  students.splice(2, 1, "Ivy", "Jade");
  output += `11. Array after splice: ${JSON.stringify(students)}\n\n`;

  // 12. Flatten a nested array using flat()
  output += "// Flatten a nested array of groups\n";
  let nestedGroups = [["Alice", "Bob"], ["Charlie", "Dave"], ["Eve"]];
  let flatArray = nestedGroups.flat();
  output += `12. Flattened Array: ${JSON.stringify(flatArray)}\n\n`;

  // 13. Concatenate two arrays
  output += "// Concatenate two arrays\n";
  let additionalStudents = ["Kyle", "Liam"];
  let allStudents = students.concat(additionalStudents);
  output += `13. Concatenated Array: ${JSON.stringify(allStudents)}\n\n`;

  // 14. Copy part of the array within itself using copyWithin()
  output += "// Copy part of the array within itself using copyWithin()\n";
  allStudents.copyWithin(0, 2, 4);
  output += `14. Array after copyWithin: ${JSON.stringify(allStudents)}\n\n`;

  // 15. Delete an element (creates a hole)
  output += "// Delete a student (index 3) using delete\n";
  delete allStudents[3];
  output += `15. Array after delete: ${JSON.stringify(allStudents)}\n\n`;

  // Final output
  outputDiv.textContent = output;
}

function clearOutput() {
    document.getElementById("output").querySelector("pre").textContent = "";
    document.getElementById("inputString").value = "";
  }
