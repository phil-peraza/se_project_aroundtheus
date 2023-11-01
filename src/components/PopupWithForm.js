import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputItems = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
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
      this.close();
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
