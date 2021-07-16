const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const phonenumber = document.getElementById('phonenumber');
const agb = document.getElementById('agb')
const password = document.getElementById('password');;

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

/*email validierung */

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

/*Telefonnummer validierung */

function checkPhonenumber(input) {
  const re = /^([0|\+[0-9]{1,5})?([0-9][0-9]{9})$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'phonenumber is not valid');
  }
}

/*confirm validierung */
function checkAgb(input) {
  if (!this.form.checkbox.checked) {
    showError(input, 'You need to confirm our AGBs');
  } else {
    showSuccess(input);
  }
}


function check() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}

function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

/*länge validierung */
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/*validierung */
function validateForm() {
  if (!checkRequired([username, email, password, phonenumber])) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPhonenumber(phonenumber);
    checkEmail(email);
    checkAgb(agb);
  }
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
});