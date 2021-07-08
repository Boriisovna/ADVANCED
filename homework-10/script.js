const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', event => {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
});

keys.forEach((key) => {
    key.addEventListener('click', event => {
        const audio = document.querySelector(`audio[data-key='${key.dataset.key}']`);
        const keys = document.querySelectorAll(`.key[data-key='${key.dataset.key}']`);
        key.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    });
    key.addEventListener('transitionend', event => {
        if (event.propertyName === 'transform') key.classList.remove('active');
    });

});