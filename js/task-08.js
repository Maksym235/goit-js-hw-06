const form = document.querySelector(".login-form");

form.addEventListener("submit", onButtonSubmit);

function onButtonSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!(email.value && password.value)) {
    alert(`Please fill in all the fields!`);
  }

  const result = {
    email: email.value,
    password: password.value,
  };
  console.log(result);

  event.currentTarget.reset();
}
