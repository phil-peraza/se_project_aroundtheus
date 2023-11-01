import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  cardsWrap,
  profileEditModal,
  profileEditForm,
  profileEditOpenButton,
  profileEditCloseButton,
  addCardModal,
  addCardForm,
  addCardOpenButton,
  addCardCloseButton,
  imageModal,
  imageModalPreview,
  previewModalCloseButton,
  modalCaption,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  newCardTitleInput,
  newCardLinkInput,
  config,
  cardData,
} from "../utils/constants.js";

const newUserInfo = new UserInfo(".profile__title", ".profile__description");

const addCardPopup = new PopupWithForm("#profile-add-card-modal", handleAddCardSubmit);
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
editProfilePopup.setEventListeners();

const imagePreview = new PopupWithImage("#popup-modal");
imagePreview.setEventListeners();

const renderCard = (cardData) => {
  const createCard = new Card(cardData, "#card-template", handleImageClick);
  cardSection.addItem(createCard.getView());
};

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
cardSection.renderItems();

const profileEditFormValidator = new FormValidator(config, profileEditForm);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, addCardForm);
addCardFormValidator.enableValidation();

function handleImageClick(title, link) {
  imagePreview.open(title, link);
}

function handleAddCardSubmit(data) {
  renderCard(data);
  addCardPopup.close();
}

function handleProfileEditSubmit(data) {
  newUserInfo.setUserInfo(data);
  console.log(data);
  editProfilePopup.close();
}

// Event Listeners //

profileEditOpenButton.addEventListener("click", () => {
  const data = newUserInfo.getUserInfo();
  profileTitleInput.value = data.name;
  profileDescriptionInput.value = data.description;
  editProfilePopup.open();
});

addCardOpenButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});
