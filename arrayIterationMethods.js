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
    output += `Massivni TAKRORLOVCHI usullar \n\n`;
    
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
