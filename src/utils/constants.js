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

/* -------------------------------- Wrappers -------------------------------- */

export const cardsWrap = document.querySelector(".cards__list");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const addNewCardModal = document.querySelector("#profile-add-card-modal");
export const addNewCardForm = document.forms["add_card_form"];
export const previewImageModalWindow = document.querySelector("#popup-modal");

/* -------------------------- Buttons and DOM nodes ------------------------- */

export const profileEditButton = document.querySelector(".profile__edit-button");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const popups = document.querySelectorAll(".modal");

/* -------------------------------- Elements -------------------------------- */

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const previewImageElement = document.querySelector(".modal__image_popup");
export const previewImageDescription = document.querySelector(".modal__name_popup");

/* -------------------------------- Form Data ------------------------------- */

export const cardTitleInput = addNewCardForm.querySelector(".modal__input_type_title");
export const cardUrlInput = addNewCardForm.querySelector(".modal__input_type_url");
export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const editForm = document.querySelector("#edit-profile-form");
export const addForm = document.querySelector("#add-card-form");
