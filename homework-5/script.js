// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
function getRandomArray(length, min, max){
    let randomArr=[];
    for(i=0; i<length; i++){
        randomArr[i] = Math.floor(Math.random()*(max-min+1))+min;
    }
    return randomArr
}
console.log(getRandomArray(10,1,10))

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getAverage(...numbers){
  let filteredNumbers = numbers.filter(number => Number.isInteger(number))
  return filteredNumbers.reduce((sum,num) => {
    return (sum+num);
   },0)/filteredNumbers.length;
}

console.log(getAverage(1,2.4,5,3))

// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

function filterEvenNumbers(...numbers){
    return numbers.filter(number => number%2 !== 0)
    
}
console.log(filterEvenNumbers(1,4,5,8,7))


// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

function countPositiveNumbers(...numbers){
     let countNumber = numbers.filter(number => number>0)
     return countNumber.length
}

console.log(countPositiveNumbers(1,5,-5,-9,-1,5))


// Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

function getDividedByFive(...numbers){
   return numbers.filter(number=>number %5 ===0)
}
console.log(getDividedByFive(1,8,5,15,4))

// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 

function divideByThree(word){
    word = word.split(' ').join('').toLowerCase();
    let arr=[]
  for(let i = 0; i<word.length;  i += 3){
    arr.push(word.substring(i, i + 3));}

   return arr
}

console.log(divideByThree('ldxlsllsls'))

