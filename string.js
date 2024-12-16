//str4

let str = "I love programming";
let res = str.replace("programming", "coding");

console.log(res);

//str5
let str1 = "Hello ";
let str2 = "World";

res = str1.concat(str2);
console.log(res);

//str6
let str3 = "T"

//example

let string = "Dunyo bo'ylab sayohat";
console.log(string.split());
//  kvadrat qavs operatori => Stringni faqat O'QIYDI, elementini O'ZGARTIRMAYDI. xatolik bermaydi, ammo ishlamaydi.
string[0] = "T"; //  Chunki kvadrat qavs FAQAT => MASSIVE elementlarinigina o'zgartiradi xolos
console.log(string); // Matn o'zgarmaydi

let array = [10,20,32,0,1,4,7,8,2];
// kvadrat qavs FAQAT => MASSIVE elementlarinigina o'zgartiradi xolos
array[0] = 100000000; // kvadrat qavs operatori => Stringni faqat O'QIYDI, elementini O'ZGARTIRMAYDI.
console.log(array);