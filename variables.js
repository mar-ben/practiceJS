//properties
//console.log(null.length);
let name='john';
console.log(name.length);
console.log(name[1]);
console.log(name['length']);
console.log(name.bold());


let sequence =[1,2,3];
sequence.push(4);
console.log(sequence);
sequence.pop();
console.log(sequence);

//objects

let employee={
    name:'benhar',
    workDays:['sunday','monday'],
    active :true,
    rate:10
};
console.log(employee);
console.log(employee.workDays);
console.log(employee.active);
console.log(employee.rate);
delete employee.rate;
console.log(employee.rate);
Object.assign(employee,{name:'benhar mariasoosai'});
console.log(employee);

//mutability

let object1={value:10};
let object2=object1;
let object3={value:10}
console.log(object1==object2);
console.log(object1==object3);

const obj1={value:30};
obj1.value=31;
console.log(obj1.value);
