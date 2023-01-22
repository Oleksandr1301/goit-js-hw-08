import throttle from 'lodash.throttle';

const MESSAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea[name="message"]'),
  input: document.querySelector('input[name="email"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Відправляєм форму');
  e.currentTarget.reset();
  localStorage.removeItem(MESSAGE_KEY);
}

function onTextareaInput(e) {
  const save = { input: refs.input.value, textarea: refs.textarea.value };
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(save));
}

function populateTextarea() {
  const data = JSON.parse(localStorage.getItem(MESSAGE_KEY));
  if (data) {
    console.log(data);
    refs.textarea.value = data.textarea;
    refs.input.value = data.input;
  }
}
