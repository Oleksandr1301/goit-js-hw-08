import throttle from 'lodash.throttle';

const MESSAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onTextareaInput, 500));
populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: refs.email.value, message: refs.message.value });
  e.currentTarget.reset();
  localStorage.removeItem(MESSAGE_KEY);
}

function onTextareaInput(e) {
  const save = { email: refs.email.value, message: refs.message.value };
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(save));
  // console.log(save);
}

function populateTextarea() {
  const data = JSON.parse(localStorage.getItem(MESSAGE_KEY));
  if (data) {
    refs.message.value = data.message;
    refs.email.value = data.email;
    console.log(data);
    
  }
}
