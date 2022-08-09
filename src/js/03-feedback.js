
import throttle from 'lodash.throttle';
const formFields = document.querySelector('.feedback-form');
// const textArea = document.querySelector('.feedback-form textarea')
formData = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

formFields.addEventListener('submit', onFormSubmit);
// textArea.addEventListener('input', throttle(onInputEvent, 1000));
formFields.addEventListener('input', onInputEvent)

takeTextInput();

function onInputEvent(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
    
 console.log(formData);
}

function onFormSubmit(evt) {

    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function takeTextInput() {

    const savedText = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    formFields.email.value = savedText.email;
    formFields.message.textContent = savedText.message;

    console.log(savedText.email);
    console.log(savedText.message);
    console.log(formFields.email.value);
    console.log(formFields.message.textContent);
    console.log(formFields);
    
    
    // if (savedText) {

    // }   

}   
