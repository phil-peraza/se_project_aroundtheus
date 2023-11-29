import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputItems = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
    this._saveButton = this._popupForm.querySelector(".modal__button");
    this._saveButtonText = this._saveButton.textContent;
  }

  _getInputValues() {
    const inputValues = {};
    this._inputItems.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    console.log({ inputValues });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setLoading(isLoading) {
    if (isLoading) {
      this._saveButton.textContent = "Saving...";
    } else {
      this._saveButton.textContent = this._saveButtonText;
    }
  }
}
