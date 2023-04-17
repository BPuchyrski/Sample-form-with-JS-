const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");
const email = document.querySelector("#email");
const popup = document.querySelector(".popup");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");

const resetFunction = (e) => {
  e.preventDefault();
  [username, password, confirmPassword, email].forEach((input) => {
    input.value = "";
    input.classList.remove("error");
    const formBox = input.parentElement;
    const error = formBox.querySelector(".form__err");
    error.style.visibility = "hidden";
  });
};

const checkForm = (input) => {
  input.forEach((input) => {
    const formBox = input.parentElement;
    const error = formBox.querySelector(".form__err");
    if (input.value.length < 1) {
      error.style.visibility = "visible";
      input.classList.add("error");
    } else {
      input.classList.remove("error");
      error.style.visibility = "hidden";
    }
  });
};

const checkLength = (input, min) => {
  const formBox = input.parentElement;
  const error = formBox.querySelector(".form__err");
  if (input.value.length < min) {
    input.classList.add("error");
    error.style.visibility = "visible";
  } else {
    input.classList.remove("error");
    error.style.visibility = "hidden";
  }
};

const checkEmail = (input) => {
  const formBox = input.parentElement;
  const error = formBox.querySelector(".form__err");
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(input.value);
  if (patternMatch) {
    input.classList.remove("error");
    error.style.visibility = "hidden";
  } else {
    input.classList.add("error");
    error.style.visibility = "visible";
  }
};

const checkPassword = (input1, input2) => {
  checkLength(password, 5);
  const formBox1 = input1.parentElement;
  const error1 = formBox1.querySelector(".form__err");
  const formBox2 = input2.parentElement;
  const error2 = formBox2.querySelector(".form__err");
  if (input1.value !== input2.value) {
    input1.classList.add("error");
    input2.classList.add("error");
    error1.style.visibility = "visible";
    error2.style.visibility = "visible";
  } else {
    input1.classList.remove("error");
    input2.classList.remove("error");
    error1.style.visibility = "hidden";
    error2.style.visibility = "hidden";
    checkLength(password, 8);
  }
};

const checkErrors = (input) => {
  let count = 0;
  input.forEach((box) => {
    if (box.classList.contains("error")) {
      count++;
    }
  });
  return count;
};

const sumbitFunction = (e) => {
  e.preventDefault();
  checkForm([username, password, confirmPassword, email]);
  checkLength(username, 5);
  checkEmail(email);
  checkPassword(password, confirmPassword);
  if (checkErrors([username, password, confirmPassword, email]) === 0) {
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 2000);
  }
};

submit.addEventListener("click", sumbitFunction);
reset.addEventListener("click", resetFunction);
