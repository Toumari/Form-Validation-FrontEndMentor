const submitBtn = document.querySelector(".submit-btn");
const toast = document.querySelector(".toast");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const fieldset = document.querySelector("fieldset");
const form = document.querySelector("form");

submitBtn.addEventListener("click", (e) => {
  const isValid = form.checkValidity();

  if (isValid) {
    toast.classList.add("active");
    fieldset.disabled = true;
    toast.innerText = "Form submitted successfully";
    form.reset();
    setTimeout(() => {
      toast.classList.remove("active");
      fieldset.disabled = false;
    }, 5000);
  } else {
    toast.classList.add("active");
    toast.innerText = "Please fill out all fields";
    setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);
  }
  e.preventDefault();
});
