const afficher = document.querySelector('#afficher');
const masquer = document.querySelector('#masquer');


afficher.addEventListener('click', handleClickDisplayText);
masquer.addEventListener('click', handleClickHideText)

function handleClickDisplayText() {
    const text = document.querySelector('#text > p');
    text.classList.remove('d-none');
}

function handleClickHideText() {
    const text = document.querySelector('#text > p');
    text.classList.add('d-none');
}