export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formEl = formElement;
    }

    _setEventListeners() {
        this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
        this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
        this._inputEls.forEach((inputEl) => {
        inputEl.addEventListener("input", (e) => {
            this._checkInputValidity(inputEl);
            this.toggleButtonState(this._submitButton);
        });
    });
    }
    
    _showInputError(inputEl) {
        const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
        errorMessageEl.textContent = inputEl.validationMessage;
        errorMessageEl.classList.add(this._errorClass);
    }

    _hideInputError(inputEl) {
        const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
        errorMessageEl.textContent = ('');
        errorMessageEl.classList.remove(this._errorClass);
    }
    
    _checkInputValidity(inputEl) {
        if(!inputEl.validity.valid) {
            return this._showInputError(inputEl);
        } else {
            this._hideInputError(inputEl);
        }
    }

    _hasInvalidInput() {
        !this._inputEls.every((inputEl) => inputEl.validity.valid)
    }

    resetValidation() {
        this.toggleButtonState();
        this._inputEls.forEach((inputEl) => {
        this._hideInputError(inputEl)
        });
  
      }

    toggleButtonState() {
        if(this._hasInvalidInput()) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        } 
    }

    enableValidation() {
        this._formEl.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this._setEventListeners();
    }
}