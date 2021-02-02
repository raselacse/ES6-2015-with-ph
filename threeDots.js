const age = [12,13,14,15];
const age2 = [22,23,24,25];
const age3 = [32,33,34,35];
const allAge = age.concat(age2).concat(5).concat(age3);
// console.log(allAge);

const allAges = [...age, ...age2, ...age3];
// console.log(allAges);

const num = 650, num2 = 360, num3 = 540;
const maxNum = Math.max(num, num2, num3);
// console.log(maxNumber);

const numbers = [652, 5000, 40, 100];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

const words = ['sjdj','jsdjf','kjg'];
const maxWords = Math.max(...words);
console.log(maxWords);


