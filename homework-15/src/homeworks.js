// #1
export function minPriceProducts(breadPrice, meatPrice, fishPrice) {

    return Math.min(breadPrice, meatPrice, fishPrice);
}

// #2

export function getSumOfNumber(firstNumber, secondNumber) {
    const minNumber = Math.min(firstNumber, secondNumber);
    const maxNumber = Math.max(firstNumber, secondNumber);
    let sum = 0;

    for (let i = minNumber; i <= maxNumber; i++) {
        sum += i;
    };
    return sum
}

// #3

export function fixedName(name) {
    const fixName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return fixName
}


// #4
export function getPairs(...students) {
    const pairs = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]],
    ];
    return pairs;
}

// #5
export function getRandomArray(length, min, max) {
    let randomArr = [];
    for (let i = 0; i < length; i++) {
        randomArr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomArr
}

// #6

export function calculateWordLetters(word) {
    const splitWord = word.toLowerCase().split('');
    let count = {};

    for (let i = 0; i < splitWord.length; i++) {

        if (count[splitWord[i]]) {
            count[splitWord[i]] = count[splitWord[i]] += 1;
        } else {
            count[splitWord[i]] = 1;
        }
    };
    return count;
}


// #7

export const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};

export function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}


// #8

export class Student {

    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    getInfo() {
        return `Студент ${this.course} ${this.university} ${this.fullName}`
    }

}

export const ostap = new Student('Вищої Школи Психотерапії м.Одеса,', '1го курсу', 'Остап Бендер')
export const getInfo = ostap.getInfo()


// #9

export function getRandomColor() {
    let r = Math.trunc(Math.random() * 255)
    let g = Math.trunc(Math.random() * 255)
    let b = Math.trunc(Math.random() * 255)
    let randomColor = `rgb(${r}, ${g}, ${b})`
    return randomColor
};

// #11

export async function getRandomChinese(length) {
    let i = 0;
    let hieroglyphsString = "";

    while (i < length) {

        let promise = new Promise(resolve => {
            setTimeout(() => {
                const data = +Date.now().toString().slice(-5);
                const hieroglyphs = String.fromCharCode(data);

                resolve(hieroglyphs)
            }, 50 * length)

        });
        i++;

        hieroglyphsString += await promise;

    }
    return hieroglyphsString
}

// #13

export async function getAllPlanets() {

    return fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            return data.results
        })
        .then(results => {
            return results.map(planet => {
                document.body.insertAdjacentHTML("afterbegin", `<div class="planets_container"><p>${planet.name}</p></div>`)
            })
        })
}

// #14

export function* createIdGenerator() {
    let i = 1;

    while (Infinity) {
        yield i++
    }
}
export const idGenerator = createIdGenerator();

