function add(num1, num2 = 20){ // way number 1. if parameter value 10 na thakle 20 dhore result dibe.

    // way number 2

    // num2 = num2 || 20;


    // way number 3

    // if(num2 == undefined){
    //     num2 = 20;
    // }
    return num1 + num2;
}
const total = add(12,10);
console.log(total);