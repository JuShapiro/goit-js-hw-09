const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const textInput = form.elements.message;
const storageKey = "feedback-form-state";

form.addEventListener("input", event => {
  const inputValues = {
    email: emailInput.value.trim(),
    message: textInput.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(inputValues));
});

function loadPage() {
  const savedValues = JSON.parse(localStorage.getItem(storageKey)) || {};
  emailInput.value = savedValues.email || "";
  textInput.value = savedValues.message || "";
}; 

loadPage();

form.addEventListener("submit", event => {
  event.preventDefault();
  const parsedValues = JSON.parse(localStorage.getItem(storageKey)) || {};
  if(parsedValues.email && parsedValues.message){
    console.log(parsedValues);
  }
  localStorage.removeItem(storageKey);
  form.reset();
});
