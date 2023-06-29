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
const inputSaved = [nameInput, emailInput, textInput];
inputSaved.forEach((input) => {
input.addEventListener('input', storeData);
});

const savedData = JSON.parse(localStorage.getItem('formData'))
if(savedData) {
  nameInput.value = savedData.username;
  emailInput.value = savedData.email;
  textInput.value = savedData.text;
};

