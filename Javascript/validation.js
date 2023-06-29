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

function validate() {
  if (!validateName() || !validateEmail()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix errors in the required fields!';
    setTimeout(() => { submitError.style.display = 'none'; }, 3000);
    return false;
  }
  return true;
}

function eraseInput() {
  if (!validate()) {
    const form = document.querySelector('.contact_me_form');
    form.reset();
    nameError.innerHTML = 'Write your full name';
    setTimeout(() => { nameError.style.display = 'none'; }, 3000);
    emailError.innerHTML = 'Please write a valid email';
    setTimeout(() => { emailError.style.display = 'none'; }, 3000);
    textError.innerHTML = 'Tell me something...';
    setTimeout(() => { textError.style.display = 'none'; }, 3000);
  }
}
document.querySelector('#submit').addEventListener('click', eraseInput);