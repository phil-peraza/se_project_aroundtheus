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

// Elements
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const addNewCardModal = document.querySelector("#profile-add-card-modal");


// Buttons
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = document.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");


// Functions
function closePopup() {
    profileEditModal.classList.remove("modal__opened");
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


// Card Elements
initialCards.forEach((cardData) => {
    const cardElement = getCardData(cardData);
    cardListEl.append(cardElement);
});