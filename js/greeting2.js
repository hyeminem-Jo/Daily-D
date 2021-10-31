
const loginForm = document.querySelector('#loginForm');
const loginInput = loginForm.querySelector('input');
const userInfoSection = document.querySelector('#userInfoSection');
const userInfo = document.querySelector('#userInfo');
const logoutBtn = document.querySelector('#logoutBtn');

// const USER_HIDDEN_CLASS_NAME = 'hidden';
// const USERNAME_KEY = 'username';

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   loginForm.classList.remove(USER_HIDDEN_CLASS_NAME);
//   loginForm.addEventListener('submit', onSubmitLogin);
// } else {
//   showUserInfo(savedUsername);
// }

logoutBtn.addEventListener('click', handleLogout);

function showUserInfo(username) {
  const date = new Date();
  let greeting;

  if (date.getHours() >= 6 && date.getHours() < 12) {
    greeting = 'Good Morning!';
  } else if (date.getHours() >= 12 && date.getHours() < 18) {
    greeting = 'Good Afternoon!';
  } else if (date.getHours() >= 18) {
    greeting = 'Good Evening!';
  } else {
    greeting = 'Hello!';
  }

  // userInfoSection.classList.remove(USER_HIDDEN_CLASS_NAME);
  userInfo.innerText = `${greeting} ${username}`;
}

// function onSubmitLogin(event) {
//   event.preventDefault();
//   loginForm.classList.add(USER_HIDDEN_CLASS_NAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);

//   showUserInfo(username);
  loginInput.value = '';
// }

function handleLogout() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(USER_HIDDEN_CLASS_NAME);
  userInfoSection.classList.add(USER_HIDDEN_CLASS_NAME);
}