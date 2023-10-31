import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { 
  initialCards,
  cardsWrap,
  profileEditModal,
  profileEditForm,
  addNewCardModal,
  addNewCardForm,
  previewImageModalWindow,
  profileEditButton,
  addNewCardButton,
  popups,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  previewImageElement,
  previewImageDescription,
  cardTitleInput,
  cardUrlInput,
  config,
  editForm,
  addForm,
 } from "../utils/constants.js";

/* ------------------------------ Card Elements ----------------------------- */

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", (name, link) => {
    viewImagePopup.open({ name, link });
  });
  return card.getView();
}

const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = renderCard(cardData);
    section.addItem(card);
  },
});
section.renderItems();

/* -------------------------------- UserInfo -------------------------------- */

const userInfo = new UserInfo({
  userName: ".profile__title",
  userDescription: ".profile__description",
});

/* ----------------------------- PopupWithImage ----------------------------- */

const viewImagePopup = new PopupWithImage("#popup-modal");
viewImagePopup.setEventListeners();

/* ------------------------------ PopupWithForm ----------------------------- */

//Edit Profile popup
const handleProfileEditSubmit = (inputValues) => {
  userInfo.setUserInfo(inputValues.name, inputValues.about);

  editProfilePopup.close();
};
const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

editProfilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const updatedUserInfo = userInfo.getUserInfo();
  profileTitleInput.value = updatedUserInfo.name;
  profileDescriptionInput.value = updatedUserInfo.about;
  editProfilePopup.open();
});

//Add New Card popup
const handleAddCardFormSubmit = (inputValues) => {
  const card = renderCard(inputValues);
  section.addItem(card);
  newCardPopup.close();
};

const newCardPopup = new PopupWithForm(
  "#profile-add-card-modal",
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

addNewCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newCardPopup.open();
});

/* ------------------------------- Validation ------------------------------- */

const profileFormValidator = new FormValidator(config, profileEditForm);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, addNewCardForm);
addFormValidator.enableValidation();
