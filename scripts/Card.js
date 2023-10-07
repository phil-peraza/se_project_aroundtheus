export default class Card {
    constructor({name, link}, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

_setEventListeners() {
    /* ".card__like_button" */
    const likeButton = this._cardElement.querySelector(".card__like_button");
    console.log(likeButton);
    /* ".card__delete_button" */

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