export default class Card {
    constructor ({link, name}, cardSelector, handlePreviewPicture) {
        this._link = link;
        this._name = name;
        this._handlePreviewPicture = handlePreviewPicture;
        this._cardSelector = cardSelector;
    }

    _setEventListeners(data) {
        /* ------------------------------- Like Button ------------------------------ */
        this._cardElement
        .querySelector(".card__like_button")
        .addEventListener("click", () => this._handleLikeIcon());

        /* ------------------------------ Delete Button ----------------------------- */
        this._cardElement
        .querySelector(".card__delete_button")
        .addEventListener("click", () => this._handleDeleteIcon());

        /* ------------------------------ Preview Image ----------------------------- */
        this._cardImage
        .addEventListener("click", () => {
            this._handlePreviewPicture(this._link, this._name);
        });
    }

    _handleLikeIcon() {
        this._cardElement
        .querySelector(".card__like_button")
        .classList.toggle("card__like_button_active");
    }

    _handleDeleteIcon() {
        this._cardElement.remove();
    }

    getView() {
        this._cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);

        /* ------------------------------ Get Card View ----------------------------- */
        this._cardImage = this._cardElement.querySelector(".card__image");
        this._cardTitle = this._cardElement.querySelector(".card__title");
        this._cardImage.src = this._link;
        this._cardTitle.textContent = this._name;
        this._cardImage.alt = this._name;

        /* ------------------------------ Set Listener ------------------------------ */
        this._setEventListeners();

        /* ------------------------------- Return Card ------------------------------ */
        return this._cardElement;
    }
}