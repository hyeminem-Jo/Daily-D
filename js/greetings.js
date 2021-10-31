const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const user = document.getElementById("user")
const greeting = user.querySelector("#greeting")
const editBtn = user.querySelector("#edit") 

const HIDDEN_CLASSNAME = "hidden" 
const USERNAME_KEY = "username" 

editBtn.addEventListener("click", logoutHandler)

function onLoginSubmit(event) { 
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings(username){
  user.classList.remove(HIDDEN_CLASSNAME) 
  greeting.innerText = `Hello ${username} :)` 
}

function logoutHandler() {
  loginInput.value = localStorage.getItem(USERNAME_KEY) 
  localStorage.removeItem(USERNAME_KEY)
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  user.classList.add(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
  loginInput.focus()
}

const savedUsername = localStorage.getItem(USERNAME_KEY) 

if(savedUsername === null) { 
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername)
}

