const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton = editModal.querySelector(".modal__close-btn");

editButton.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
});

editModalCloseButton.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

const newButton = document.querySelector(".profile__add-btn");
const newModal = document.querySelector("#new-post-modal");
const newModalCloseButton = newModal.querySelector(".modal__close-btn");

newButton.addEventListener("click", function () {
  newModal.classList.add("modal_is-opened");
});

newModalCloseButton.addEventListener("click", function () {
  newModal.classList.remove("modal_is-opened");
});
