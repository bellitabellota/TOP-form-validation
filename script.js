const inputs = document.querySelectorAll("input");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

password.addEventListener("input", () => {
  password.setCustomValidity("");
  if(!password.validity.valid) {
    return
  }

  if(! (/[A-Z]/.test(password.value) && /\d/.test(password.value) && /[#\+]/.test(password.value))) {
    password.setCustomValidity("Password must contain at least 1 digit, 1 uppercase letter and a + or # symbol.");
  }
});

passwordConfirmation.addEventListener("input", () => {
  passwordConfirmation.setCustomValidity("");
  if(!passwordConfirmation.validity.valid) {
    return
  }

  if(! (password.value === passwordConfirmation.value)) {
    passwordConfirmation.setCustomValidity("Password Confirmation must match password.");
  }
});

inputs.forEach(( input) => {
  input.addEventListener("blur", () => {
    input.reportValidity();
  })
});