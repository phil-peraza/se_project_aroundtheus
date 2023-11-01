export default class FormValidator {
    constructor(settings, formElement) {
      this._inputSelector = settings.inputSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputErrorClass = settings.inputErrorClass;
      this._errorClass = settings.errorClass;
      this._formElement = formElement;
    }
  
    _setEventListeners() {
      this._inputElements = [
        ...this._formElement.querySelectorAll(this._inputSelector),
      ];
      this._submitButton = this._formElement.querySelector(
        this._submitButtonSelector
      );
      this._inputElements.forEach((inputElement) => {
        inputElement.addEventListener("input", (event) => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
    }
  
    _showInputError(inputElement) {
      const errorMessageElement = this._formElement.querySelector(
        `#${inputElement.id}-error`
      );
      inputElement.classList.add(this._inputErrorClass);
      errorMessageElement.textContent = inputElement.validationMessage;
      errorMessageElement.classList.add(this._errorClass);
    }
  
    _hideInputError(inputElement) {
      const errorMessageElement = this._formElement.querySelector(
        `#${inputElement.id}-error`
      );
      inputElement.classList.remove(this._inputErrorClass);
      errorMessageElement.textContent = "";
      errorMessageElement.classList.remove(this._errorClass);
    }
  
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _hasInvalidInput(inputList) {
      return !inputList.every((inputElement) => inputElement.validity.valid);
    }
  
    _toggleButtonState() {
      if (this._hasInvalidInput(this._inputElements)) {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
      } else {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
      }
    }
  
    enableValidation() {
      this._formElement.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      this._setEventListeners();
    }
  
    resetValidation() {
      this._toggleButtonState();
    }
  }