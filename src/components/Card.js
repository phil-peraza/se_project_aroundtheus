import { cardData } from "../utils/constants";

export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    const cardTitle = this._cardElement.querySelector(".card__title");
    cardTitle.textContent = this._name;
    this._cardImage.setAttribute("src", this._link);
    this._cardImage.setAttribute("alt", this._name);
    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like_button");
    this._likeButton.addEventListener("click", this._handleLikeButton);

    this._deleteCardButton = this._cardElement.querySelector(
      ".card__delete_button"
    );
    this._deleteCardButton.addEventListener(
      "click",
      this._handleDeleteCardButton
    );

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  _handleLikeButton = () => {
    this._likeButton.classList.toggle("card__like_button_active");
  };

  _handleDeleteCardButton = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };
}
