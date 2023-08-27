const initialCards = [
{
name: "Yosemite Valley",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
},
{
name: "Lake Louise",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
},
{
name: "Bald Mountains",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
},
{
name: "Latemar",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
},
{
name: "Vanoise National Park",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
},
{
name: "Lago di Braies",
link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
}
];

const cardTemplate = document
.querySelector("#card-template")
.content.querySelector(".card");

// Wrappers
const cardsWrap = document.querySelector(".cards__list");
const profileEditForm = document.querySelector(".modal__form");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addNewCardModal = document.querySelector("#profile-add-card-modal");

// Elements and DOM nodes

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");




// Buttons
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = document.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardCloseButton = document.querySelector("#add-card-close-button");


// Functions
function closePopup() {
    profileEditModal.classList.remove("modal__opened");
}

function closePopupAddCard() {
    addNewCardModal.classList.remove("modal__opened_add_card");
}

function getCardData(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");
    
    cardImageEl.src = cardData.link;
    cardImageEl.alt = cardData.name;
    cardTitleEl.textContent = cardData.name;

    return cardElement;
}

// Event Handlers
function handleProfileEditSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopup();
}

function handleProfileAddNewCardSubmit(e) {
    e.preventDefault();
    const cardElement = getCardData();
    closePopupAddCard();
}

// Events Listenters
profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal__opened");
})
profileEditCloseButton.addEventListener("click", closePopup);
profileEditForm.addEventListener('submit', handleProfileEditSubmit);
addNewCardButton.addEventListener("click", () => {
    addNewCardModal.classList.add("modal__opened_add_card");
})
addNewCardCloseButton.addEventListener("click", closePopupAddCard);

// Card Elements
initialCards.forEach((cardData) => {
    cardsWrap.prepend(getCardData(cardData));
});