import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";

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
 
    /* -------------------------------- Wrappers -------------------------------- */
    
    const modal = document.querySelector(".modal");
    const cardsWrap = document.querySelector(".cards__list");
    const profileEditModal = document.querySelector("#profile-edit-modal");
    const profileEditForm = profileEditModal.querySelector(".modal__form");
    const addNewCardModal = document.querySelector("#profile-add-card-modal");
    const addNewCardForm = addNewCardModal.querySelector(".modal__form");
    const previewImageModalWindow = document.querySelector("#popup-modal");
    /* const cardSelector = document.querySelector("#card-template"); */
    
    /* -------------------------------- Elements -------------------------------- */
    
    const profileTitle = document.querySelector(".profile__title");
    const profileDescription = document.querySelector(".profile__description");
    const profileTitleInput = document.querySelector("#profile-title-input");
    const profileDescriptionInput = document.querySelector("#profile-description-input");
    const previewImageElement = document.querySelector(".modal__image_popup");
    const previewImageDescription = document.querySelector(".modal__name_popup");
    
    /* -------------------------- Buttons and DOM nodes ------------------------- */
    
    const profileEditButton = document.querySelector(".profile__edit-button");
    const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
    const addNewCardButton = document.querySelector(".profile__add-button");
    const addNewCardCloseButton = addNewCardModal.querySelector(".modal__close");
    const previewImageCloseButton = previewImageModalWindow.querySelector(".modal__close");
    
   /* -------------------------------- Form Data ------------------------------- */
    
   const cardTitleInput = addNewCardForm.querySelector(".modal__input_type_title");
    const cardUrlInput = addNewCardForm.querySelector(".modal__input_type_url");
    
    /* -------------------------------- Functions ------------------------------- */

    function openModal(modal) {
        modal.classList.add("modal_opened");
        document.addEventListener("keydown", handleEsc);
    }
    
    function closeModal(modal) {
        modal.classList.remove("modal_opened");
        document.removeEventListener("keydown", handleEsc);
    }
    
    
    /* ---------------------------- Event Handlers --------------------------- */
    
    function handleProfileEditSubmit(e) {
        e.preventDefault();
        profileTitle.textContent = profileTitleInput.value;
        profileDescription.textContent = profileDescriptionInput.value;
        closeModal(profileEditModal);
    }
    
    function handleProfileAddNewCardSubmit(e) {
        e.preventDefault();
        const cardData = { name: cardTitleInput.value, link: cardUrlInput.value };
        const cardElement = renderCard(cardData);
        cardsWrap.prepend(cardElement);
        e.target.reset();
        closeModal(addNewCardModal);
    }
    
    function handleEsc(e) {
        if(e.key === "Escape") {
            const openedModal = document.querySelector(".modal_opened");
            closeModal(openedModal);
        }
    }

    function handlePreviewPicture(data) {
        previewImageElement.src = data.link;
        previewImageElement.alt = data.name;
        previewImageDescription.textContent = data.name;
        openModal(previewImageModalWindow);
    }
    
    /* ---------------------------- Events Listenters --------------------------- */
    
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

    /* ------------------------------- Validation ------------------------------- */
    
    const config = {
        formSelector: ".modal__form",
        inputSelector: ".modal__input",
        submitButtonSelector: ".modal__button",
        inactiveButtonClass: "modal__button_disabled",
        inputErrorClass: "modal__input_type_error",
        errorClass: "modal__error_visible"
      };

      const profileFormValidator = new FormValidator(config, profileEditForm);
      profileFormValidator.enableValidation();


      const addFormValidator = new FormValidator(config, addNewCardForm);
      addFormValidator.enableValidation();

   /* ------------------------------ Card Elements ----------------------------- */
    
   initialCards.forEach((data) => {
        const cardElement = renderCard(data);
        cardsWrap.append(cardElement);
    });

    function renderCard(data) {
        const card = new Card(data, "#card-template", (link, name) => {
            previewImageElement.src = link;
            previewImageDescription.textContent = name;
            openModal(previewImageModalWindow);
        });
        return card.getView();
    }