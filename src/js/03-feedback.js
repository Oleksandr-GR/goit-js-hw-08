import throttle from 'lodash.throttle';
const formFields = document.querySelector('.feedback-form');
const formData = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

formFields.addEventListener('submit', onFormSubmit);
formFields.addEventListener('input', throttle(onInputEvent, 500))

takeTextInput();

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

    const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (savedText) {
    formFields.email.value = savedText.email;
    formFields.message.textContent = savedText.message;
    // Object.entries(savedText).forEach(([name, value]) => {
    //     formFields.elements[name].value = value;
    // })

    }   

}   
