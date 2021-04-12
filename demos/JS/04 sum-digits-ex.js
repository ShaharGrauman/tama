// 1- Write a function which gets a number and returns the sum of its digits
//      For example: 745238 -> 29

function sumDigits(number) {
    let res = 0;

    while(number > 0){
        let digit = number % 10;
        res += digit;
        number = parseInt(number / 10);
    }

    return res;
}

sumDigits(745238); // 29


(''+745238).split('').map(Number).reduce((sum, x) => sum + x);

// 2- Write a function which gets a number and sum its digits until it’s a single digit
//       For example: 745238 -> 29 -> 11 -> 2

function sumDigitsUntil1(number) {
    do {
        number = sumDigits(number);
    }while(number > 10);

    return number;
}

console.log(sumDigitsUntil1(745238));