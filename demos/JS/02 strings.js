var myName = 'Ido',
    age = 87,
    city = 'Haifa';

var msg = 'Hello ' + myName + ' (age ' + age + '), Living in ' + city;

function foo() {
    return 'Siyomet';
}

//String literal
//string interpolation
var msg2 = `Hello ${myName} (age ${age}), Living in ${city}. ${foo()}`;

console.log(msg2);