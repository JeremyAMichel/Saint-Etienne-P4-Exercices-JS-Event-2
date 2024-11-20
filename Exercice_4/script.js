const verification = document.querySelector('#verification');

verification.addEventListener('click', handleClickVerification);


function handleClickVerification(){
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    const isValid = password.value === confirmPassword.value // si les deux champs ne sont pas égale je vais avoir false
    updateBorder(password, isValid);
    updateBorder(confirmPassword, isValid);
}

function updateBorder(elementHtml, isValid) {
    
    elementHtml.classList.toggle('border-green', isValid);
    elementHtml.classList.toggle('border-red', !isValid); // si j'ai false, il ne mettra PAS la classe border-red donc le "!" va changer le false en true
}