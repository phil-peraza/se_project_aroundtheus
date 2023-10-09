export default class Card {
    constructor({name, link}, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

_setEventListeners() {
    /* ".card__like_button" */
    this._cardElement.querySelector(".card__like_button").addEventListener("click", () => {
        this._handleLikeIcon();
    });
    ;
    /* ".card__delete_button" */
    const deleteButton = this._cardElement.querySelector(".card__delete_button");
    }

_handleLikeIcon() {
    this._cardElement.querySelector("card__like_button")
    .classList.toggle("card__like_button_active");
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