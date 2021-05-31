const bread = 15.678;
const meat = 123.965;
const fish = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log(Math.max(bread,meat,fish));

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(Math.min(bread,meat,fish));

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let products = bread+meat+fish;
console.log(products);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
console.log(Math.trunc(bread)+Math.trunc(meat)+Math.trunc(fish));


// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log((Math.ceil(Math.round(bread/10)*10))+(Math.ceil(Math.round(meat)/10)*10)+(Math.ceil(Math.ceil((fish)/10)*10)))
// console.log(Math.ceil(Math.round(bread/10)*10));
// console.log(Math.ceil(Math.round(meat)/10)*10);
// console.log(Math.ceil(Math.ceil((fish)/10)*10));


// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let productsFloor = Math.floor(bread+meat+fish);
console.log(productsFloor);
// if (products/2 ==0 )










// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
console.log(500-(bread+meat+fish));

// Виведіть середнє значення цін, округлене до другого знаку після коми
console.log(((bread+meat+fish)/3).toFixed(2))

// (Більш складне) 
let randomDiscount = Math.random();
console.log(randomDiscount);

let discount = (products-(products*randomDiscount)).toFixed(2);
console.log(discount);

let profit = (discount-(products/2)).toFixed(2);
console.log(profit);