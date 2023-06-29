const nameInput = document.querySelector('#name-id');
const emailInput = document.querySelector('#email-id');
const textInput = document.querySelector('#text-area');

function storeData() {
    const formData = {
        username: nameInput.value,
        email: emailInput.value,
        text: textInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}
