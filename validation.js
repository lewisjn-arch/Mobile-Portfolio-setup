const nameError = document.querySelector('#name_error');
const emailError = document.querySelector('#email_error');
const textError = document.querySelector('#text_error');
const submitError = document.querySelector('#submit_error');

function validateName() {
  const name = document.querySelector('#name-id').value;

  if (name.length === 0) {
    nameError.innerHTML = 'Name cannot be blank';
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write your full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check" style="color: #3bc456;"></i>';
  return true;
}

function validateEmail() {
  const email = document.querySelector('#email-id').value;

  if (email.length === 0) {
    emailError.innerHTML = 'Email cannot be blank';
    return false;
  }

  if (!email.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
    emailError.innerHTML = 'Invalid email';
    return false;
  }

  emailError.innerHTML = '<i class="fa-regular fa-circle-check" style="color: #3bc456;"></i>';
  return true;
}

function validateText() {
  const text = document.querySelector('#text-area').value;
  const length = 60;
  const required = length - text.length;

  if (required > 0) {
    textError.innerHTML = `${required} more characters left`;
    return false;
  }

  textError.innerHTML = '<i class="fa-regular fa-circle-check" style="color: #3bc456;"></i>';
  return true;
}

function validate() { // eslint-disable-line no-unused-vars
  if (!validateName() || !validateEmail() || !validateText()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix errors in the required fields!';
    setTimeout(() => { submitError.style.display = 'none'; }, 3000);
    return false;
  }
  return true;
}
