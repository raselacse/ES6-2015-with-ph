let pakhi;
console.log(pakhi); // undefined

function add(num1, num2) {
    console.log(num1 + num2);
    // return num1 + num2;

}
const result = add(13,82);
console.log(result); // undefined



function add2(num1, num2) {
    console.log(num1 + num2); // NaN

}
const result2 = add2(13);
console.log(result2); // undefined


const premik = {name: 'rasel', age: 25};
console.log('premik',premik.gf); // undefined

let ages = [12,13,14];
console.log(ages[3]);   // undefined

let fun = undefined;
console.log(fun);   // undefined