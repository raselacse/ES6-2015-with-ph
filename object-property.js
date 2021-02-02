const students = [
    {id: 21, name: 'Omar sunny'},
    {id: 31, name: 'Anwar'},
    {id: 41, name: 'Moyori'},
    {id: 71, name: 'Dipjol'}
];

let array = [];
for( let i = 0; i<students.length; i++){
    let element = students[i].name;
    array.push(element);
}
console.log(array);

const names = students.map(students => students.name);
const ids = students.map( ids => ids.id);
const bigger = students.find( large => large.id > 40);

console.log(names);
console.log(ids);
console.log(bigger);
