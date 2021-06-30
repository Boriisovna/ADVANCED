class Student {

    constructor(university, course, fullName, marks = [5, 4, 4, 5], ) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }

    getInfo() {
        console.log(`Студент ${this.course} ${this.university} ${this.fullName}`)
    }
    get getMarks() {
        if (this.dismiss) {
            return null
        }
        return this.marks
    }
    set setMarks(mark) {
        if (this.dismiss) {
            return null
        }
        return ostap.getMarks.push(mark)
    }
    getAverageMark() {
        if (this.dismiss) {
            return null
        } else {
            let sum = 0;
            ostap.getMarks.forEach((current) => {
                sum += current

            });
            return sum / ostap.getMarks.length
        }

    }

    getDismiss() {
        this.dismiss = true;
    }

    getRecover() {
        this.dismiss = false;
    }

}

// BASIC
console.group(`BASIC`)

const ostap = new Student('Вищої Школи Психотерапії м.Одеса,', '1го курсу', 'Остап Бендер')


// 1.
//  Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

console.group(`task 1`)
ostap.getInfo()
console.groupEnd()

// 2.
// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

console.group(`task 2`)
console.log(ostap.getMarks)
console.groupEnd()

// 3.
// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5].

ostap.setMarks = 5;

console.group(`task 3`)
console.log(ostap.getMarks)
console.groupEnd()

// 4.
// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

console.group(`task 4`)
console.log(ostap.getAverageMark())
console.groupEnd()

// 5.
// Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

ostap.getDismiss()

console.group(`task 5`)
console.log(ostap.getMarks)
console.log(ostap.getAverageMark())
console.groupEnd()


// 6.
// Створіть метод this.recover, який дозволить поновити студента

ostap.getRecover()

console.group(`task 6`)
console.log(ostap.getMarks)
console.log(ostap.getAverageMark())
console.groupEnd()

console.groupEnd()


// ADVANCED
console.group(`ADVANCED`)

// 1.
// Створіть новий клас BudgetStudent, який повністю наслідує клас Student

class BudgetStudent extends Student {

    constructor(university, course, fullName, marks = [5, 4, 4, 5], ) {
        super(university, course, fullName, marks = [5, 4, 4, 5], );
        setInterval(() => {
            this.getScholarship()
        }, 30000)
    };

    getScholarship() {
        if ((this.getAverageMark() >= 4) &&  this.dismiss) {
            console.log('Ви отримали 1400 грн. стипендії')
        } else {
            console.log('Ви не отримаєте стипендії :(')
        }
    }

}

const andrii = new BudgetStudent(`НУ 'ЛП' м.Львів,`, `5го курсу`, `Андрій Семенюк`)

console.group(`task 1`)
console.log(andrii)
console.groupEnd()

// 2.
// Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії

console.group(`task 2`)
andrii.getScholarship()
console.groupEnd()

console.groupEnd()


