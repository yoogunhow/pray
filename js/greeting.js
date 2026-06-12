const logInForm = document.querySelector("#login-form");
const inPutId = logInForm.querySelector("input");
const hello = document.querySelector("#hello");

const savedID = localStorage.getItem("id");

function showGreeting(id){
    hello.classList.remove("hidden");
    hello.innerText = `Hello! ${id}`;
}

function handleSubmit(event){
    event.preventDefault()
    logInForm.classList.add("hidden");
    const idValue = inPutId.value;
    localStorage.setItem("id", idValue);
    showGreeting(idValue);
}

if (savedID === null){
    logInForm.classList.remove("hidden");
} else {
    showGreeting(savedID);
}

logInForm.addEventListener("submit",handleSubmit);
