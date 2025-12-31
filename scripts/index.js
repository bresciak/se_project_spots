const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },

  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const cardTemplate = document.querySelector("#card__template");
const cardList = document.querySelector(".cards__list");

const modalImage = document.querySelector("#card-image-modal");
const modalImageCloseButton = modalImage.querySelector(
  ".modal__close-btn_type_image"
);
const modalImageCaption = modalImage.querySelector(".modal__caption");
const modalImageElement = modalImage.querySelector(".modal__image");

const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton =
  editProfileModal.querySelector(".modal__close-btn");
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__description");
const editNameInput = document.querySelector("#input-name");
const editAboutInput = document.querySelector("#input-description");
const editProfileForm = document.querySelector(".modal__form");

function getCardElement(data) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-btn_liked");
  });
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtn.addEventListener("click", function () {
    cardDeleteBtn.closest(".card").remove();
  });
  cardImage.addEventListener("click", () => {
    modalImageElement.src = data.link;
    modalImageElement.alt = data.name;
    modalImageCaption.textContent = data.name;
    openModal(modalImage);
  });
  return cardElement;
}

modalImageCloseButton.addEventListener("click", function () {
  closeModal(modalImage);
});

toggleButtonState(inputList, buttonElement, settings);
formElement.addEventListener("reset", () => {
  disableButton(buttonElement, settings);
});

function openModal(modal) {
  modal.classList.add("modal__is-opened");
  document.addEventListener("keydown", handleEscapeKey);
}

function closeModal(modal) {
  modal.classList.remove("modal__is-opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

editProfileButton.addEventListener("click", function () {
  editNameInput.value = profileNameElement.textContent;
  editAboutInput.value = profileAboutElement.textContent;
  openModal(editProfileModal);
});

editModalCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const newName = editNameInput.value;
  const newAbout = editAboutInput.value;
  profileNameElement.textContent = newName;
  profileAboutElement.textContent = newAbout;
  closeModal(editModal);
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const newProfileButton = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseButton = newPostModal.querySelector(".modal__close-btn");

newProfileButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostModalCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

const newPostForm = document.querySelector('form[name="new-post"]');
const captionInput = document.querySelector("#input-caption");
const linkInput = document.querySelector("#input-image-link");

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: captionInput.value,
    link: linkInput.value,
  };
  const newCard = getCardElement(newCardData);
  cardList.prepend(newCard);
  closeModal(newPostModal);
  evt.target.reset();
}

newPostForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});

function handleOverlayClick(evt) {
  if (!evt.target.closest(".modal__card-wrapper")) {
    closeModal(evt.currentTarget);
  }
}

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("mouseddown", (evt) => {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__close-btn")
    ) {
      closeModal(modal);
    }
  });
});

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal__is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

function openEditModal() {
  editNameInput.value = profileNameElement.textContent;
  editAboutInput.value = profileAboutElement.textContent;

  const inputList = Array.from(
    editProfileModal.querySelectorAll(validationConfig.inputSelector)
  );
  resetValidation(editProfileModal, inputList, validationConfig);
  openModal(editProfileModal);
}
