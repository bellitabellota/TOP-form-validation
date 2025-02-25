const inputs = document.querySelectorAll("input");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const submitButton = document.querySelector(".submit");
const formContainer = document.querySelector("form");

password.addEventListener("input", () => {
  password.setCustomValidity("");
  if(!password.validity.valid) {
    return
  }

  if(! (/[A-Z]/.test(password.value) && /\d/.test(password.value) && /[#\+]/.test(password.value))) {
    password.setCustomValidity("Password must contain at least 1 digit, 1 uppercase letter and a + or # symbol.");
  }

  password.reportValidity();
});

passwordConfirmation.addEventListener("input", () => {
  passwordConfirmation.setCustomValidity("");
  if(!passwordConfirmation.validity.valid) {
    return
  }

  if(! (password.value === passwordConfirmation.value)) {
    passwordConfirmation.setCustomValidity("Password Confirmation must match password.");
  }

  passwordConfirmation.reportValidity();
});

inputs.forEach((input, inputIndex) => {
  input.addEventListener("input", () => {
    if (inputIndex === (inputs.length - 1) || (inputs.length - 2)) {
      return
    }

    input.reportValidity();
  })
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
 if(!formContainer.checkValidity()) {

  return formContainer.reportValidity();
 }

 alert("Successful form submission!");
})