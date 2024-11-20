const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');

green.addEventListener('click', handleClickGreen);
red.addEventListener('click', handleClickRed);
blue.addEventListener('click', handleClickBlue);

function handleClickGreen(){
    const text = document.querySelector('#text');
    text.classList.add("text-green");
    text.classList.remove("text-red");
    text.classList.remove("text-blue");
}

function handleClickRed(){
    const text = document.querySelector('#text');
    text.classList.add("text-red");
    text.classList.remove("text-green");
    text.classList.remove("text-blue");
}

function handleClickBlue(){
    const text = document.querySelector('#text');
    text.classList.add("text-blue");
    text.classList.remove("text-red");
    text.classList.remove("text-green");
}