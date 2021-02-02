
// square korar way number 1

const numbers = [3,4,5,6,7,8];
const output = [];
for( let i =0; i<numbers.length; i++){
    const element = numbers[i];
    let result = element * element;
    output.push(result);
}
console.log(output);



// square korar way number 2
// and function lekhar way number 1

function square(element) {
    return element * element;
}

// function lekhar way number 2

const square = element => element * element;

// function lekhar way number 3

const square = x => x * x;


// function lekhar way number 4

const result = numbers.map(function(element/*, index, array*/){  
    // console.log(element,index, array);
    return element * element;
})

// function lekhar way number 5

const result = numbers.map(x => x * x);

const filter = numbers.filter(x => x < 5);
const find = numbers.find(x => x < 5);
console.log(filter);
console.log(find);