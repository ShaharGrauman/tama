//Hoisting

function foo() {
    console.log(i);
    for (var i = 0; i < 5; i++) {
        console.log(i);        
    } 
    console.log(i);
}

// The above function is being changed as all var declarations are moved up
//This is called Hoisting

// function fooHoisted() {
//     var i;
//     console.log(i);
//     for (i = 0; i < 5; i++) {
//         console.log(i);        
//     } 
//     console.log(i);
// }



foo();
//output:
//undefined
//0
//1
//2
//3
//4
//5


let x = 3;
var x = 4;
var y = x;

console.log(x, y);// 4 4

function bar(a, a, b) {
    console.log(a, b);// 2, 3
}

bar(1,2,3);


function baz() {
    let x = 42;

    if(!x){
        let x = 5;
        console.log(x);
    }else{
        x = 17;
        console.log(x);
    }
    console.log(x);
}

function what(x) {
    return x != x; //true
}


//value types (number, boolean)
let answer = 42;
//no further assignments
const result = answer;

answer++;

console.log(answer, result); // 43 42

result++; //result = result + 1  - constant variable


//Reference types (pointers)
const person = {
    name: 'Ido',
    age: 32
}

person.age++; //? ok 33
person.city = 'Mishmar'; //? ok

//Error - person is constant (the person address/pointer)
// person = {
//     name: 'Ola',
//     age: 12
// }


// function changePerson(person) {

// }

const x = 42;
let y = x;
y++;


function what(x) { 
    x++;
}

what(x);
console.log(x);


const x = 42;
let y = x;
y++;






const person = {
    name: 'Ido',
    age: 32
}

const changePerson = person => {
    // person.age++;
    person = {
        name: 'Ilana',
        age: 45
    }
}

changePerson(person);
console.log(person.age); //? 32






const he = person; //he points to the same memory

he.age++;
console.log(person.age);

