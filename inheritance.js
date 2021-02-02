// class Parent{
//     constructor(name){
//         this.fatherName = "Schwerznegger";
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

// const baby= new Child("Arnold");
// const baby2= new Child("Tom");
// console.log(baby);
// console.log(baby2);

class Parent{
    fatherName = "Schwerznegger";
    
}
class Child extends Parent{
    name = "Tom";
    
}

const baby2= new Child();
console.log(baby2);