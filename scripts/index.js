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
const modal = document.querySelector(".modal");
const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addNewCardModal = document.querySelector("#profile-add-card-modal");
const addNewCardForm = addNewCardModal.querySelector(".modal__form");
const previewImageModalWindow = document.querySelector("#popup-modal");

// Elements
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const previewImageElement = document.querySelector(".modal__image_popup");
const previewImageDescription = document.querySelector(".modal__name_popup");

// Buttons and DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
const previewImageCloseButton = previewImageModalWindow.querySelector(".modal__close");

// Form Data
const cardTitleInput = addNewCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addNewCardForm.querySelector(".modal__input_type_url");

// Functions
function openModal(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", handleEsc);
}

function closeModal(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEsc);
}

function getCardData(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");
    const likeButton = cardElement.querySelector(".card__like_button");
    const deleteButton = cardElement.querySelector(".card__delete_button");

    deleteButton.addEventListener("click", () => {
        cardElement.remove();
    })

    cardImageEl.addEventListener("click", () => {
        previewImageElement.src = cardImageEl.src;
        previewImageElement.alt = cardImageEl.alt;
        previewImageDescription.textContent = cardTitleEl.textContent;
        openModal(previewImageModalWindow);
    })

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("card__like_button_active");
    })

    cardImageEl.src = cardData.link;
    cardImageEl.alt = cardData.name;
    cardTitleEl.textContent = cardData.name;

    return cardElement;
}

function renderCard(cardData, wrapper) {
    const cardElement = getCardData(cardData);
    wrapper.prepend(cardElement);
};

// Event Handlers
function handleProfileEditSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(profileEditModal);
}

function handleProfileAddNewCardSubmit(e) {
    e.preventDefault();
    const name = cardTitleInput.value;
    const link = cardUrlInput.value;
    renderCard({name, link}, cardsWrap);
    e.target.reset();
    closeModal(addNewCardModal);
}

function handleEsc(e) {
    const openedModal = document.querySelector(".modal_opened")
    if(e.key === "Escape") {
        closeModal(openedModal);
    }
}

// Events Listenters
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(profileEditModal)
});
profileEditCloseButton.addEventListener("click", () => closeModal(profileEditModal));

addNewCardForm.addEventListener("submit", handleProfileAddNewCardSubmit);
addNewCardButton.addEventListener("click", () => openModal(addNewCardModal));
addNewCardCloseButton.addEventListener("click", () => closeModal(addNewCardModal));

previewImageCloseButton.addEventListener("click", () => closeModal(previewImageModalWindow));

[profileEditModal, addNewCardModal, previewImageModalWindow].forEach(modal => {
    modal.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("modal")) {
            closeModal(modal);
        }
    })
});

// Card Elements
initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
