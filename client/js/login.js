document.addEventListener("DOMContentLoaded", async () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  const login = document.getElementById("loginUser");
  login.addEventListener("click", (e) => {
    e.preventDefault();
    loginUser(loginForm);
  });

  const signup = document.getElementById("signup");
  signup.addEventListener("click", (e) => {
    e.preventDefault();
    signUp(loginForm);
  });
});

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

async function loginUser(loginForm) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (validateInput(username, password)) {
    let user = {
      email: username,
      password: password,
    };

    await fetch("/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        let userID = JSON.parse(result).userID;
        if (userID !== null) {
          localStorage.setItem("userID", userID);
          window.open("/menu", "_self");
        }
      });
  } else {
    setFormMessage(loginForm, "error", "Invalid username/password combination");
  }
}

async function signUp(loginForm) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (validateInput(username, password)) {
    let user = {
      email: username,
      password: password,
    };

    let response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });

    if (response.userID !== null) {
      localStorage.setItem("userID", response.userID);
      window.open("/menu", "_self");
    }
  } else {
    setFormMessage(loginForm, "error", "Invalid username/password combination");
  }
}

function validateInput(username, password) {
  return username !== "" && password !== "";
}
