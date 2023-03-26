$(document).ready(function () {
  const $loginForm = $("#login-form");
  const $loginInput = $(".login-input");
  const $greeting = $(".greeting");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  function onLoginSubmit(event) {
    event.preventDefault();

    const username = $loginInput.val();
    localStorage.setItem(USERNAME_KEY, username);
    $loginInput.val("");

    paintGreetings(username);
  }

  function paintGreetings(username) {
    $loginForm.addClass(HIDDEN_CLASSNAME);
    $greeting.text(`Welcome ${username}`).removeClass(HIDDEN_CLASSNAME);
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername) {
    paintGreetings(savedUsername);
  } else {
    $loginForm.removeClass(HIDDEN_CLASSNAME);
    $loginForm.on("submit", onLoginSubmit);
  }
});
