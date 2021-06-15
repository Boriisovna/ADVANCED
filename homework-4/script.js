const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs() {
   const pairs = [
    [students[0],students[2]],
    [students[1],students[3]],
    [students[4],students[5]],
];
   return pairs;
}
const studentPairs = getPairs();
console.log(studentPairs);

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function getThemesProject(){
    const receivedThemes = []
   for (let i = 0; i < studentPairs.length; i++){
     receivedThemes[i] = [studentPairs[i].join(' і '), themes[i]]
   }
    return receivedThemes;
  }
  const pairsThemes = getThemesProject();
  console.log(pairsThemes);

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function  getMarks(){
    const studentMarks = [];

    for (i = 0; i < students.length; i++){
        studentMarks[i] = [students[i],marks[i]]
    }

  return studentMarks;

}
console.log(getMarks());


// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function getRandomMarks(){
    let randomMarks = []
    for (i = 0; i <pairsThemes.length; i++){
    let random = Math.floor(Math.random() * 5) + 1;
    randomMarks[i] = [...pairsThemes[i],random]
    }
    return randomMarks;
}

console.log(getRandomMarks());
// console.log(students);