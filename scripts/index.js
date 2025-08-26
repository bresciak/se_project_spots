const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton = editModal.querySelector(".modal__close-btn");
const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__description");
const editNameInput = document.querySelector("#input-name");
const editAboutInput = document.querySelector("#input-description");
const editProfileForm = document.querySelector(".modal__form");

editButton.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
  editNameInput.value = profileNameElement.textContent;
  editAboutInput.value = profileAboutElement.textContent;
});

editModalCloseButton.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const newName = editNameInput.value;
  const newAbout = editAboutInput.value;
  editNameInput.textContent = newName;
  editAboutInput.textContent = newAbout;
  editModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const newButton = document.querySelector(".profile__add-btn");
const newModal = document.querySelector("#new-post-modal");
const newModalCloseButton = newModal.querySelector(".modal__close-btn");

newButton.addEventListener("click", function () {
  newModal.classList.add("modal_is-opened");
});

newModalCloseButton.addEventListener("click", function () {
  newModal.classList.remove("modal_is-opened");
});

const newPostForm = document.querySelector('form[name="new-post"]');
const captionInput = document.querySelector("#input-caption");
const linkInput = document.querySelector("#input-image-link");

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log("nameInput");
  console.log("linkInput");
  newModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleAddCardSubmit);
