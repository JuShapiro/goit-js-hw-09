const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textInput = form.elements.message;
const storageKey = 'feedback-form-state';

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);
loadPage();

function onInput(event) {
  const inputValues = {
    email: emailInput.value.trim(),
    message: textInput.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(inputValues));
}

function loadPage() {
  const savedValues = JSON.parse(localStorage.getItem(storageKey)) || {};
  emailInput.value = savedValues.email || '';
  textInput.value = savedValues.message || '';
}

function onSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.message.value.trim();

  if (!email || !message) {
    alert('Filled all fields of form');
    return;
  }
  console.log({ email, message });
  localStorage.removeItem(storageKey);
  form.reset();
}
