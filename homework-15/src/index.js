import _ from 'lodash';

import '../../homework-13/style.css'

import {
minPriceProducts,
getSumOfNumber,
fixedName,
getPairs,
getRandomArray,
calculateWordLetters,
getTotalTaxes,
ukraine,
Student,
ostap,
getInfo,
getRandomColor,
getRandomChinese,
getAllPlanets,
createIdGenerator,
idGenerator,
} from './homeworks';


console.group(`function #1`)
console.log(minPriceProducts(20,12,9))
console.groupEnd()

console.group(`function #2`)
console.log(getSumOfNumber(1,5))
console.groupEnd()

console.group(`function #3`)
console.log(fixedName('cUrsOR'))
console.groupEnd()



console.group(`function #4`)
console.log(getPairs("Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"))
console.groupEnd()

console.group(`function #5`)
console.log(getRandomArray(12,1,5))
console.groupEnd()

console.group(`function #6`)
console.log(calculateWordLetters('viktotIIia'))
console.groupEnd()

console.group(`function #7`)
console.log(getTotalTaxes.call(ukraine))
console.groupEnd()

console.group(`function #8`)
console.log(getInfo)
console.groupEnd()

console.group(`function #9`)
console.log(getRandomColor())
console.groupEnd()

console.group(`function #11`)
console.log(getRandomChinese(5))
console.groupEnd()

console.group(`function #13`)
console.log(getAllPlanets())
console.groupEnd()

console.group(`function #14`)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.groupEnd()