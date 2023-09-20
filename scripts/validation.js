function enableValidation(options) {
    const formEls = [...document.querySelectorAll(".modal__form")];
        formEls.forEach((formEl) => {
            formEl.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });

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
};

const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };

enableValidation(config);