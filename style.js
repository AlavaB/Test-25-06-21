/*Suite de Fibonacci*/
function fibonacci(number){
    let number1 = 0;
    let number2 = 1;
    let sum;

    for (let index = 0; index < number; index++) {
        sum = number1 + number2;
        number1 = number2;
        number2 = sum;
    }
    return number2;
}

console.log(fibonacci(8));