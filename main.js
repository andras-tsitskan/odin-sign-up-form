"use strict";

const passwordOriginalInput = document.querySelector(".js-password-original");
const passwordConfirmInput = document.querySelector(".js-password-confirm");
const errorText = document.querySelector(".js-error-text");

passwordConfirmInput.addEventListener("input", comparePasswords);

function comparePasswords(event) {
  const password = passwordOriginalInput.value;

  if (password !== event.target.value) {
    event.target.classList.add("error");
    errorText.style.visibility = "visible";
  } else {
    event.target.classList.remove("error");
    errorText.style.visibility = "hidden";
  }
}
