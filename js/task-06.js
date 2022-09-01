// Напиши скрипт, який під час втрати фокусу на інпуті
//     (подія blur), перевіряє його вміст щодо правильної 
//     кількості введених символів.
const inputWithValidation = document.querySelector('#validation-input');
const limiter = inputWithValidation.dataset.length;
function warningValidation() {
    if (inputWithValidation.value.length !== Number(limiter)) {
        inputWithValidation.classList.add('invalid')
        inputWithValidation.classList.remove('valid')
    }
    else if (inputWithValidation.value.length === Number(limiter)) {
        inputWithValidation.classList.add('valid')
        inputWithValidation.classList.remove('invalid')
    }
}

inputWithValidation.addEventListener("blur", warningValidation);
