export default class Card {
    constructor({name, link}, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

_setEventListeners() {
    // Like Button
    this._cardElement.querySelector(".card__like_button").addEventListener("click", () => {
        this._handleLikeIcon();
    });
    ;
    // Delete Card
    this._cardElement.querySelector(".card__delete_button").addEventListener("click", () => {
        this._handleDeleteCard();
    });
    }

_handleLikeIcon() {
    this._cardElement.querySelector(".card__like_button")
    .classList.toggle("card__like_button_active");
}

_handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
}

getView() {
    this._cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector(".card")
    .cloneNode(true);
    // get card veiw
    // set event listeners
    this._setEventListeners();
    // return the card
    }
}