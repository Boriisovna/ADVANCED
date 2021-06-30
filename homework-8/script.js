class Student{

    constructor(university, course, fullName, marks = [5, 4, 4, 5],){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }

    getInfo(){
        console.log(`Студент ${this.course} ${this.university} ${this.fullName}`)
    }
    get getMarks(){
        return  this.marks
    }
    set setMarks(mark){  
       return user.getMarks.push(mark)
    }
    getAverageMark(){
        let sum=0;
        user.getMarks.forEach((current)=>{
            sum +=current
            
        });
        return console.log(sum/user.getMarks.length)

    }

    
}

// BASIC
console.group(`BASIC`) 

const user = new Student('Вищої Школи Психотерапії м.Одеса,','1го курсу','Остап Бендер')


// 1.
//  Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

console.group(`task 1`) 
user.getInfo()
console.groupEnd()

// 2.
// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

console.group(`task 2`) 
console.log(user.getMarks)
console.groupEnd()

// 3.
// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5].
user.setMarks = 5;
console.group(`task 3`) 
console.log(user.getMarks)
console.groupEnd()

// 4.
// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

console.group(`task 4`) 
user.getAverageMark()
console.groupEnd()

// 5.
// Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)







console.groupEnd()