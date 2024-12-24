const form = document.getElementById('register-form');
const name_input = document.getElementById('name-input');
const username_input = document.getElementById('username-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message')

function RegisterAccount(){
  let errors = []

  if(name_input){
    errors = getSignupFormErrors(name_input.value, username_input.value, password_input.value, repeat_password_input.value)
  }else{
    errors = getLoginFormErrors(username_input.value, password_input.value)
  }

  if(errors.length > 0){
    error_message.innerText = errors.join("\n ")
  }else{
    sessionStorage.setItem('username', username_input.value);
    sessionStorage.setItem('password', password_input.value);
    window.location.href = "LoginPage.html";
  }
}

function LoginAccount(){
  let errors = [];
  errors = getLoginFormErrors(username_input.value, password_input.value)

  if(errors.length > 0){
    error_message.innerText = errors.join("\n ")
  }else{
    window.location.href = "DashboardPage.html";
  }
}

function getSignupFormErrors(name, username, password, repeatPassword){
  let errors = [];

  if(name === '' || name == null){
    errors.push('Name is required')
    name_input.parentElement.classList.add('incorrect')
  }
  if(username === '' || username == null){
    errors.push('Username is required')
    username_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }
  return errors;
}

function getLoginFormErrors(username, password){
  let errors = []
  let username_value = sessionStorage.getItem('username')
  console.log(username_value) 
  let password_value = sessionStorage.getItem('password')
  console.log(password_value)
  console.log() 

  if(username === '' || username == null){
    errors.push('Username is required')
    username_input.parentElement.classList.add('incorrect')
  }
  if(username != username_value){
    errors.push('Username is not registered')
    username_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password != password_value){
    errors.push('Password is not registered')
    username_input.parentElement.classList.add('incorrect')
  }
  return errors;
}

const allinputs = [name_input, username_input, password_input, repeat_password_input].filter(input => input != null)

allinputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText= ''
    }
  })
})
