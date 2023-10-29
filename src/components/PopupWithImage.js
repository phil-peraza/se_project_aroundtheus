import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._viewImage = document.querySelector(".modal__image_popup");
    this._viewImageCaption = document.querySelector(".modal__name_popup");
  }

  open({ name, link }) {
    this._viewImage.alt = name;
    this._viewImageCaption.textContent = name;
    this._viewImage.src = link;
    super.open();
  }
}
