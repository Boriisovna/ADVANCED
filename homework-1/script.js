const breadPrice = 15.678;
const meatPrice = 123.965;
const fishPrice = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPriceProducts = (Math.max(breadPrice,meatPrice,fishPrice));
console.log(maxPriceProducts);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPriceProducts = (Math.min(breadPrice,meatPrice,fishPrice));
console.log(minPriceProducts);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const products = breadPrice+meatPrice+fishPrice;
console.log(products);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const priceTruncated = (Math.trunc(products))
console.log(priceTruncated);


// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const priceRoundedToHundreds = (Math.round(products/100)*100);
console.log(priceRoundedToHundreds);


// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const productsFloor = Math.floor(products);
const evenValue = productsFloor%2===0;
console.log(evenValue);


// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const cash = 500;
const changes = (cash-products);
console.log(changes);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePrice = +((products)/3).toFixed(2);
console.log(averagePrice)

// (Більш складне): 

//Рандомна знижка
const randomDiscount = Math.round(Math.random()*100) ;
console.log(randomDiscount);

// сума до оплати зі знижкою
const priceWithDiscount = +(products-(products*(randomDiscount/100))).toFixed(2);
console.log(priceWithDiscount);

const profit = +(priceWithDiscount-(products/2)).toFixed(2);
console.log(profit);

document.writeln(
    `<li>Максимальна ціна: ${maxPriceProducts} UAH</li>
    <li>Мінімальна ціна: ${minPriceProducts} UAH</li>
    <li>Вартість всіх товарів: ${products} UAH</li> 
    <li>Вартість всіх товарів (без копійок): ${priceTruncated} UAH</li> 
    <li>Вартість всіх товарів (округлена до сотень): ${priceRoundedToHundreds} UAH</li>
    <li>Вартість всіх товарів є парним значенням?: ${evenValue}</li>
    <li>Решта з ${cash} UAH: ${changes} UAH</li> 
    <li>Середнє значення ціни: ${averagePrice} UAH</li> 
    <li>Сума до оплати зі знижкою ${randomDiscount}%: ${priceWithDiscount} UAH</li>
    <li>Чистий прибуток: ${profit} UAH</li> `
)