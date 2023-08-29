const form = document.getElementById('form-content');
const email = document.getElementById('email-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
});

function checkEmail() {
    const emailValue = email.value.trim();
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regex.test(emailValue)) {
        setSuccess(email);
    }
    if (!regex.test(emailValue)) {
        setErrorFor(email, 'Email Not Valid');
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form error';
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form success';
    small.innerText = '';

}