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
console.log(Math.round(products/100)*100)


// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let productsFloor = Math.floor(products);
let value = productsFloor%2===0;
console.log(value);


// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let cash = 500;
console.log(cash-products);

// Виведіть середнє значення цін, округлене до другого знаку після коми
console.log(((products)/3).toFixed(2))

// (Більш складне): 

//Рандомна знижка
let randomDiscount = Math.round(Math.random()*100) ;
console.log(randomDiscount);

// сума до оплати зі знижкою
let priceWithDiscount = (products-(products*(randomDiscount/100))).toFixed(2);
console.log(priceWithDiscount);

let profit = (priceWithDiscount-(products/2)).toFixed(2);
console.log(profit);