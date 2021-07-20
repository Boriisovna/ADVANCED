// ------------------------#1 task--------------------------

function* createIdGenerator() {
    let i = 1;

    while (Infinity) {
        yield i++
    }
}

const idGenerator = createIdGenerator();


const infiniteGeneratorButton = document.querySelector('.infinite_button');
let outputNumber = document.querySelector('.output_number');

infiniteGeneratorButton.addEventListener('click', () => {
    outputNumber.innerHTML = idGenerator.next().value
})


//------------------------- #2 task-----------------------------
const startValue = 14

function* newFontGenerator(size) {

    let res = yield size

    while (Infinity) {
        if (res === 'up') {
            res = yield(size += 2)
        } else if (res === 'down') {
            res = yield(size -= 2)
        } else res = yield size

    }

}

const fontGenerator = newFontGenerator(startValue)


const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
let outputText = document.querySelector('.output_text');

let fontSize = outputText.style.fontSize;


upButton.addEventListener('click', () => {

    fontSize = fontGenerator.next('up').value;
    outputText.style.fontSize = `${fontSize}px`
})


downButton.addEventListener('click', () => {
    fontSize = fontGenerator.next('down').value
    outputText.style.fontSize = `${fontSize}px`
})