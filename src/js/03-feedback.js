import throttle from 'lodash.throttle';
const formFields = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
const formData = savedText || {};

takeTextInput();

formFields.addEventListener('submit', onFormSubmit);
formFields.addEventListener('input', throttle(onInputEvent, 500))

function onInputEvent(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(formData);

}

function takeTextInput() {
  
    if (savedText) {
        // formFields.email.value = savedText.email;
        //     formFields.message.value = savedText.message;
        Object.entries(savedText).forEach(([name, value]) => {
            formFields.elements[name].value = value;
        })
    }
}   