const person = {name: 'Jack Willian', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kohijk'};

const {name, age} = person;

const gfName = person.gfName;
// console.log(name,age);



const firends = ['Jack Willian','facebooker','Ema Watson','Kohijk'];
const [bestu, ...bakisob] = firends;
// console.log(bestu, bakisob);



const complextObject = {name: 'abac', info: {address: 'kaliakari', leader: 'Showon'}};

const {leader} = complextObject.info;
console.log(leader);
