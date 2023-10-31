export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".modal__close");
  }

  open() {
    this._popupElement.querySelector(".modal").classList.toggle("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.querySelector(".modal").classList.remove("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose() {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("modal_opened")) {
        this.close(e.target);
      }
    });
  }
}
