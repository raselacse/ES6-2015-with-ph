/* normal function

function doubleIt(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result); */


/* normal function 2

const doubleIt = function(num){
    return num *2;
}
const result = doubleIt(5);
console.log(result); */


/*arrow function with one parameter

const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result); */


/*arrow function with multi parameter

const add = (x, y) => x * y;
const result = add(5,5);
console.log(result); */



/*arrow function without parameter

const give = () => 5;
const result = give();
console.log(result); */



//arrow function with largest calculation or condition 

const bishal = (x, y) => {
    const sum = x + y;
    const different = x - y;
    const total = sum * different;
    return total;
}
const result = bishal(7, 5);
console.log(result);