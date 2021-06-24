const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];




//   Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(students) {
    const studentsSubjects = Object.keys(students.subjects).map((item) => {
        return (item[0].toUpperCase() + item.slice(1)).replace('_', ' ');
    });

    return studentsSubjects
}
console.log(`Function 1:
Список предметів для ${students[0].name} - ${getSubjects(students[0])} !`)


// Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(students) {
    const allMark = (Object.values(students.subjects)).flat()

    const sumAllMark = allMark.reduce((sum, item) => {
        return sum + item;
    }, 0)

    const averageMark = +(sumAllMark / allMark.length).toFixed(2)
    return averageMark
}

 console.log(`Function 2:
 Cередня оцінка по усім предметам для ${students[2].name} - ${getAverageMark(students[2])}`)


// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.


function getStudentInfo(students) {

    const {
        name,
        course,
        subjects: averageMark
    } = students;
    const studentInfo = {
        name,
        course,
        averageMark
    }
    studentInfo.averageMark = getAverageMark(students);

    return studentInfo
}
console.log(`Function 3:
Загальна інформація про ${students[1].name} :`)
console.log(getStudentInfo(students[1]))

// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    return students.map(studentName => studentName.name[0].toUpperCase()+studentName.name.slice(1)).sort()
}
console.log(`Function 4:
Імена студентів в алфавітному порядку - ${getStudentsNames(students)}`)



// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {

    const arrayAverageMarks = [];
    let bestStudent = [];

    students.forEach(student => {
        arrayAverageMarks.push(getAverageMark(student));
    });

    const maxMark = Math.max(...arrayAverageMarks);

    students.forEach(student => {
        if (getAverageMark(student) === maxMark) {
            bestStudent.push(student.name);
        }
    });

    return bestStudent;
}

console.log(`Function 5:
Кращий студент по показнику середньої оцінки - ${getBestStudent(students)}`);


// Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word) {
    const splitWord = word.toLowerCase().split('');
    let count = {};

    for (i = 0; i < splitWord.length; i++) {

        if (count[splitWord[i]]) {
            count[splitWord[i]] = count[splitWord[i]] += 1;
        } else {
            count[splitWord[i]] = 1;
        }
    };
    return count;
}

console.log(`Function 6:
Oб'єкт, в якому ключі це букви у слові ${'Viltoriia'}, а значення – кількість їх повторень`)
console.log(calculateWordLetters('Viltoriia'))