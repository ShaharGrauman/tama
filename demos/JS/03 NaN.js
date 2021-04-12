function foo(x, y) {
    return x * y;
}

let result = foo(1, 2);

if(typeof result === 'number'){
    console.log('ok');
}

result = foo(1, '2');

if(typeof result === 'number'){
    console.log('ok');
}

result = foo(1, 'lala');

if(isNaN(result)){
    console.log('Error');
}
