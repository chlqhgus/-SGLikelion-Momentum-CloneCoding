
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSummit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hi, ${username}! I wish you have a nice day 😽🌼`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { //유저네임이 저장되어 있지 않으면 -> 입력 창 보이기
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSummit);
} else { //유저네임이 저장되어 있으면 -> greeting 보이기
    paintGreetings(loginInput.value);
} 