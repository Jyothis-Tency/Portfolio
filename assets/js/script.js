var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var cursorPosition = $('contact-message').prop("selectionStart");

function validateName() {
  var name = document.getElementById('contact-name').value;

  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = 'Write a full name';
    return false;
  }

  nameError.innerHTML = 'Valid';
  return true;
}

function validateEmail() {
  var email = document.getElementById('contact-email').value;

  if (email.length === 0) {
    emailError.innerHTML = 'E-mail is required';
    return false;
  }

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    emailError.innerHTML = 'E-mail Invalid';
    return false;
  }

  emailError.innerHTML = 'Valid';
  return true;
}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + ' More characters required';
    return false;
  } else if (left < 0) {
    messageError.innerHTML = 'Message is too long';
    return false;
  }

  messageError.innerHTML = 'Valid';
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.innerHTML = 'Please fix errors to submit';
    return false;
  }
}


