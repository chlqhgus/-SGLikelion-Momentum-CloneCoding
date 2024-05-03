
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSummit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hi, ${userName}! I wish you have a nice day :)`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener("submit",onLoginSummit);

// if (savedUsername == null){ 
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit",onLoginSummit);
// } else {


// }
