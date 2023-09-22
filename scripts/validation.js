// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
}

function hideInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = ('');
    errorMessageEl.classList.remove(errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
    if(!inputEl.validity.valid) {
        showInputError(formEl, inputEl, options);
    } else {
        hideInputError(formEl, inputEl, options);
    }
}

function toggleButtonState(inputEls, submitButton) {

}

function setEventListeners(formEl, options) {
    const {inputSelector} = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(".modal__button");

    inputEls.forEach(inputEl => {
        inputEl.addEventListener("input", (e) => {
            checkInputValidity(formEl, inputEl, options);
            toggleButtonState(inputEls, submitButton);
        });
    });
}

function enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) => {
            formEl.addEventListener("submit", (evt) => {
                evt.preventDefault();
            });

            setEventListeners(formEl, options);
            // look for all inputs inside of form
            // loop through inputs to see if all are valid
            // if input is not valid
            // get vaildation message
            // add error class to input
            // display error message
            // disable button
            // if all inputs are valid
            // enable button
            // reset error messages

        });
}

const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  };

enableValidation(config);