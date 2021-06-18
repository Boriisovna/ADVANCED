// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
function getRandomArray(length, min, max){
    let randomArr=[];
    for(i=0; i<length; i++){
        randomArr[i] = Math.floor(Math.random()*(max-min+1))+min;
    }
    return randomArr
}
// console.log(getRandomArray(10,1,10))

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getAverage(...numbers){
  let filteredNumbers = numbers.filter(number => Number.isInteger(number))
  return filteredNumbers.reduce((sum,num) => {
    return (sum+num);
   },0)/filteredNumbers.length;
}

// console.log(getAverage(1,2.4,5,3))

// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

function filterEvenNumbers(...numbers){
    return numbers.filter(number => number%2 !== 0)
    
}
console.log(filterEvenNumbers(1,4,5,8,7))