const loginSection = document.querySelector(".login");
const mainSection = document.querySelector(".main");
const mainSentence = document.querySelector(".main h4");
const loginForm = document.querySelector(".login-form");
const logInInput = document.querySelector(".login-form input");
const alertInput = document.querySelector(".login p");
const createSection = document.querySelector(".create");
const createNoteBtn = document.getElementById("board-btn");
const cancelBtn = document.querySelector("#cancel-create");

const HIDDEN = "hidden";

const onLoginBtnClick = (event) => {
  const inputName = logInInput.value;
  event.preventDefault();

  if (inputName === "") {
    alert("Please write your name");
  } else {
    localStorage.setItem("username", inputName);
    loginSection.classList.add(HIDDEN);
    mainSection.classList.remove(HIDDEN);

    const userName = localStorage.getItem("username");
    mainSentence.innerHTML = `Hello ${userName}`;
  }
};

const createNoteHandler = () => {
  mainSection.classList.add(HIDDEN);
  createSection.classList.remove(HIDDEN);
};

const cancelBtnHandler = () => {
  mainSection.classList.remove(HIDDEN);
  createSection.classList.add(HIDDEN);
};

if (localStorage.getItem("username") === null) {
  loginForm.addEventListener("submit", onLoginBtnClick);
} else {
  loginSection.classList.add(HIDDEN);
  mainSection.classList.remove(HIDDEN);
  mainSentence.innerHTML = `Hello ${localStorage.getItem("username")}`;
}

createNoteBtn.addEventListener("click", createNoteHandler);
cancelBtn.addEventListener("click", cancelBtnHandler);
