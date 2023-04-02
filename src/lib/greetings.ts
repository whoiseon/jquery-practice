$(function () {
  const $loginForm = $('#login-form');
  const $loginInput = $('#login-form input');
  const $greeting = $('.greeting');
  const $todoForm = $('#todo-form');

  const HIDDEN_CLASSNAME = 'hidden';
  const USERNAME_KEY = 'username';

  function onLoginSubmit(event: Event) {
    event.preventDefault();

    const username = $loginInput.val();
    localStorage.setItem(USERNAME_KEY, username as string);
    $loginInput.val('');

    paintGreetings(username as string);
  }

  function paintGreetings(username: string) {
    $loginForm.addClass(HIDDEN_CLASSNAME);
    $greeting
      .text(`${getGreetings()}, ${username}`)
      .removeClass(HIDDEN_CLASSNAME);
    $todoForm.removeClass(HIDDEN_CLASSNAME);
  }

  function getGreetings() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername) {
    paintGreetings(savedUsername);
  } else {
    $loginForm.removeClass(HIDDEN_CLASSNAME);
    $loginForm.on('submit', onLoginSubmit);
  }
});
