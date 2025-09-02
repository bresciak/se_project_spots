const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton = editModal.querySelector(".modal__close-btn");
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__description");
const editNameInput = document.querySelector("#input-name");
const editAboutInput = document.querySelector("#input-description");
const editProfileForm = document.querySelector(".modal__form");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  modal === editModal;
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editButton.addEventListener("click", function () {
  editNameInput.value = profileNameElement.textContent;
  editAboutInput.value = profileAboutElement.textContent;
  openModal(editModal);
});

editModalCloseButton.addEventListener("click", function () {
  closeModal(editModal);
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

const newButton = document.querySelector(".profile__add-btn");
const newModal = document.querySelector("#new-post-modal");
const newModalCloseButton = newModal.querySelector(".modal__close-btn");

newButton.addEventListener("click", function () {
  openModal(newModal);
});

newModalCloseButton.addEventListener("click", function () {
  closeModal(newModal);
});

const newPostForm = document.querySelector('form[name="new-post"]');
const captionInput = document.querySelector("#input-caption");
const linkInput = document.querySelector("#input-image-link");

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(captionInput.value);
  console.log(linkInput.value);
  closeModal(newModal);
  evt.target.reset();
}

newPostForm.addEventListener("submit", handleAddCardSubmit);
