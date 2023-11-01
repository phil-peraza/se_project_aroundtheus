export const initialCards = [
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
  },
];

export const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

export const cardsWrap = document.querySelector(".cards__list");

export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileEditForm = document.forms["#profile-edit-form"];
export const profileEditOpenButton = document.querySelector(
  "#profile-edit-button"
);
export const profileEditCloseButton = profileEditModal.querySelector(
  "#profile-close-modal-button"
);

export const addCardModal = document.querySelector("#profile-add-card-modal");
export const addCardForm = document.forms["add-card-form"];
export const addCardOpenButton = document.querySelector(
  ".profile__add-button"
);
export const addCardCloseButton = addCardModal.querySelector(
  "#add-card-close-button"
);

export const imageModal = document.querySelector("#popup-modal");
export const imageModalPreview = document.querySelector(".modal__image_popup");
export const previewModalCloseButton = document.querySelector(
  "#popup-image-close-button"
);
export const modalCaption = document.querySelector(".modal__name_popup");

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);

export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

export const newCardTitleInput = document.querySelector(
  ".modal__input_type_title"
);
export const newCardLinkInput = document.querySelector(".modal__input_type_url");

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};