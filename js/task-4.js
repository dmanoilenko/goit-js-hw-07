const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const userData = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }
    if (elements.email.value === "" || elements.password.value === "") {
        alert('All form fields must be filled in')
    } else {
    console.log(userData);
    event.target.reset()
    }
}

