// ------Function №1------
// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    return Math.max(...number.toString().split('').map(Number))
}

// ------Function №2------
// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function numberToThePow(x, y) {
    let result = 1;
    if (y == 0) result = 1;
    else {
        for (let i = 1; i <= Math.abs(y); i++) {
            if (y > 0) result *= x;
            else if (y < 0) result = (1 / x) * result;
        }
    }
    return result;
}

// ------Function №3------
// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function fixedName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// ------Function №4------
// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function netSalary(salary, tax) {
    return salary - (salary * (tax / 100));
}


// ------Function №5------
// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(n, m) {
    return Math.ceil(Math.random() * (m - n) + n);
}

// ------Function №6------
// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
    let count = 0;
    const letterToLowerCase = letter.toLowerCase();
    const wordToLowerCase = word.toLowerCase();
    for (let i = 0; i < wordToLowerCase.length; i++) {
        if (wordToLowerCase.charAt(i) === letterToLowerCase) {
            count++;
        }
    }
    return count;
}

// ------Function №8------
// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(Password = 8) {
    let lengthPassword = "";
    for (i = 1; i <= Password; i++) {
        lengthPassword += Math.trunc(Math.random() * 10)
    }
    return lengthPassword
}

// ------Function №10------
// Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(expression) {
    const newExpression = expression.replace(/[\s.,%]/g, '').split('').join('').toLowerCase();
    const reverseExpression = expression.replace(/[\s.,%]/g, '').split('').reverse().join('').toLowerCase();
    if (newExpression === reverseExpression) {
        return true;
    } else return false;
}

document.writeln(`
<li>Function №1: ${getMaxDigit(123456)}</li>
<li>Function №2: ${numberToThePow(2,-2)}</li>
<li>Function №3: ${fixedName('vIkTORiA')}</li>
<li>Function №4: ${netSalary(1000, 19.5)}</li>
<li>Function №5: ${getRandomNumber(-100, 1000)}</li>
<li>Function №6: ${countLetter('O', 'CursOre one LOVE <3' )} </li>
<li>Function №8: ${getRandomPassword(2)}</li>
<li>Function №10: ${isPalyndrom("Я, н%е ,су гусеня")}</li>
`)