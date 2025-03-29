const input = document.querySelector("#name-input");
let userName = document.getElementById("name-output");
input.addEventListener("input", (event) => {
    let userValue = event.target.value.trim();
    if (userValue === "") {
        return userName.textContent = "Anonymous";
     }
     return userName.textContent = userValue;    
})

