const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this


function getMyTaxes(salary) {
    return salary * this.tax;
}

console.group(`function #1`)
console.log(getMyTaxes.call(ukraine, 1000));
console.groupEnd()


// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
    return this.middleSalary * this.tax;
}

console.group(`function #2`)
console.log(getMiddleTaxes.call(ukraine));
console.groupEnd()

// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.group(`function #3`)
console.log(getTotalTaxes.call(latvia));
console.groupEnd()

// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

console.group(`function #4`)

function getMySalary() {
    setInterval(() => {
        const minSalary = 1500;
        const maxSalary = 2000;
        const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        const taxes = this.tax;
        const profit = salary - taxes;

        result = {
            salary: salary,
            taxes: taxes,
            profit: profit
        }
        return console.log(result);
    }, 10000)

}

getMySalary.call(ukraine)
console.groupEnd()