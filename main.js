"use strict";

const passwordOriginalInput = document.querySelector(".js-password-original");
const passwordConfirmInput = document.querySelector(".js-password-confirm");

passwordConfirmInput.addEventListener("input", comparePasswords);

function comparePasswords(event) {
  const password = passwordOriginalInput.value;

  if (password !== event.target.value) {
    event.target.classList.add("error");
  } else {
    event.target.classList.remove("error");
  }
}
