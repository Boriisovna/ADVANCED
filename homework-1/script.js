const bread = 15.678;
const meat = 123.965;
const fish = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
let maxPrice = (Math.max(bread,meat,fish));
console.log(maxPrice);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
let minPrice = (Math.min(bread,meat,fish));
console.log(minPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let products = bread+meat+fish;
console.log(products);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let priceTruncated = (Math.trunc(products))
console.log(priceTruncated);


// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let priceRoundedToHundreds = (Math.round(products/100)*100);
console.log(priceRoundedToHundreds);


// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let productsFloor = Math.floor(products);
let value = productsFloor%2===0;
console.log(value);


// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let cash = 500;
let changes = (cash-products);
console.log(changes);

// Виведіть середнє значення цін, округлене до другого знаку після коми
let = averagePrice = ((products)/3).toFixed(2);
console.log(averagePrice)

// (Більш складне): 

//Рандомна знижка
let randomDiscount = Math.round(Math.random()*100) ;
console.log(randomDiscount);

// сума до оплати зі знижкою
let priceWithDiscount = (products-(products*(randomDiscount/100))).toFixed(2);
console.log(priceWithDiscount);

let profit = (priceWithDiscount-(products/2)).toFixed(2);
console.log(profit);

document.writeln(
    `<li>Максимальна ціна: ${maxPrice} UAH</li>
    <LI>Мінімальна ціна: ${minPrice} UAH</LI>
    <LI>Вартість всіх товарів: ${products} UAH</LI> 
    <LI>Вартість всіх товарів (без копійок): ${priceTruncated} UAH</LI> 
    <LI>Вартість всіх товарів (округлена до сотень): ${priceRoundedToHundreds} UAH</LI>
    <LI>Вартість всіх товарів є парним значенням?: ${value}</LI>
    <LI>Решта з ${cash} UAH: ${changes} UAH</LI> 
    <LI>Середнє значення ціни: ${averagePrice} UAH</LI> 
    <LI>Сума до оплати зі знижкою ${randomDiscount}%: ${priceWithDiscount} UAH</LI>
    <LI>Чистий прибуток: ${profit} UAH</LI> `
)