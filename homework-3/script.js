// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number){
return Math.max(...number.toString().split('').map(Number))
}

console.log(getMaxDigit(105876));
document.writeln( `Your first number is : ${getMaxDigit}` )



// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

// function numberToThePow(x,y) {
//     let result = x;
//     if (x == 0) result = 1;
//     else{
//         for (let i = 1; i < y; i++) {
//         result *= x; 
//         }
//     }
//     return result;
// }
// console.log(numberToThePow(0,3))

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

// function fixedName(name) {
//     return  name[0].toUpperCase() + name.slice(1).toLowerCase();
// }
// console.log(fixedName('vIkTORiA'))

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

// function netSalary( salary, tax){
//     return salary - (salary *(tax/100));
// }
// console.log(netSalary(1000, 19.5))

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

// function getRandomArbitrary(n, m) {
//     return Math.ceil(Math.random() * (m - n) + n) ;
//   }

//   console.log(getRandomArbitrary(-100, 1000))

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

// function convertCurrency(currency){



// }

// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

// function getRandomPassword(Password = 8){
//     let lengthPassword = "" ;
//     for (i=1; i<=Password; i++) {
//     lengthPassword += Math.trunc(Math.random()*10)
//     }
//     return lengthPassword
// }
// console.log(getRandomPassword(2))







// Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"







// Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

// function isPalyndrom(expression){
//  let reverseExpression = expression.split('').reverse().join('')

//     // if (newExpression === reverseExpression) {
//     //     return  true
//     // }
//     // else return false;


// }
//  let expression = 'лала лал';
//  let expressionArray = expression.split('');
//  let reverseExpression = expression.toLowerCase().split('').reverse().join('')

// console.log(expressionArray)