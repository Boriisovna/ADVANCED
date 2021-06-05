// Отримайте у користувача число(N) від якого ми будемо складати. 
let firstNumber = +prompt("Hi! Enter the first (integer) number, please",0);

// Перевірте, чи є передане значення N числове значення || ЦІЛИМ числом.
while(isNaN(firstNumber) || !Number.isInteger(firstNumber) ){
    firstNumber = +prompt("Your number isn't integer, please try again",0);
}

// Отримайте у користувача число(M) до якого ми будемо складати (включно).
let secondNumber = +prompt("Hi! Enter the second (integer) number, please",0);

// Перевірте, чи є передане значення M числове значення || ЦІЛИМ числом.
while(isNaN(secondNumber) || !Number.isInteger(secondNumber) ){
    secondNumber = +prompt("Your number isn't integer, please try again",0);
    }

 // Отримайте у користувача булевий параметр(true/false), 
 // який підкаже нам чи потрібно пропускати парні числа. 
 let skipEven = confirm("Do you want to skip even numbers?");

// Напишіть цикл, який буде складати числа від раніше отриманих N и M
// В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. 
// (Використовуйте для цього if/else). Якщо парні числа потрібно пропускати не додавайте їх до суми.

let minNumber = Math.min(firstNumber,secondNumber);
let maxNumber = Math.max(firstNumber,secondNumber);
let sum = 0;

for (minNumber; minNumber<=maxNumber; minNumber++) {
    if(skipEven && minNumber %2 === 0){
        continue;
    };
    sum += minNumber;
};


 document.writeln(
`Your first number is : ${firstNumber}<br>
 Your second number is : ${secondNumber}<br>
 You missed even numbers?: it's ${skipEven}<br>
 The sum of your numbers is : ${sum}`)
