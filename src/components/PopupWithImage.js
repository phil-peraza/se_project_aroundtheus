import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector("#image-preview-modal");
    this._caption = this._popupElement.querySelector(".modal__caption");
  }

  open(title, link) {
    super.open();
    this._image.src = link;
    this._image.alt = title;
    this._caption.textContent = title;
  }
}
