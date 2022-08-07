const formFields = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea')
const LOCALSTORAGE_KEY = "feedback-form-state";

formFields.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', onInputEvent);

takeTextInput();

function onInputEvent(evt) {

    const text = evt.currentTarget.value
    console.log(text)

    localStorage.setItem(LOCALSTORAGE_KEY, text)
};


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("gjkexbkjcm")
    evt.currentTarget.reset();
}

function takeTextInput() {

    const savedText = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedText) {
        console.log(savedText);
        textArea.value = savedText;
    }

}
