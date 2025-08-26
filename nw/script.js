(function(){
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');
const togglePwd = document.getElementById('togglePwd');


function validateEmail(value){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}


function showError(el, message){
el.textContent = message;
}
function clearErrors(){
emailError.textContent = '';
passwordError.textContent = '';
formMessage.textContent = '';
}


togglePwd.addEventListener('click', ()=>{
const isHidden = password.type === 'password';
password.type = isHidden ? 'text' : 'password';
togglePwd.textContent = isHidden ? 'Hide' : 'Show';
togglePwd.setAttribute('aria-pressed', String(isHidden));
});


form.addEventListener('submit', (e)=>{
e.preventDefault();
clearErrors();
let ok = true;


const emailVal = email.value.trim();
const pwdVal = password.value;


if(!emailVal){
showError(emailError, 'Email is required.'); ok = false;
} else if(!validateEmail(emailVal)){
showError(emailError, 'Please enter a valid email address.'); ok = false;
}


if(!pwdVal){
showError(passwordError, 'Password is required.'); ok = false;
} else if(pwdVal.length < 8){
showError(passwordError, 'Password must be at least 8 characters.'); ok = false;
}


if(!ok) return;


formMessage.textContent = 'Signing in...';
formMessage.className = '';


setTimeout(()=>{
if(pwdVal === 'password123'){
formMessage.textContent = 'Successfully signed in! Redirecting...';
formMessage.className = 'success';
} else {
formMessage.textContent = 'Invalid email or password.';
formMessage.className = 'error';
}
}, 700);
});


email.addEventListener('blur', ()=>{
emailError.textContent = '';
if(email.value && !validateEmail(email.value)) emailError.textContent = 'Invalid email format.';
});
password.addEventListener('blur', ()=>{
passwordError.textContent = '';
if(password.value && password.value.length < 8) passwordError.textContent = 'Password too short.';
});


document.getElementById('googleBtn').addEventListener('click', ()=> alert('Trigger Google OAuth flow (demo)'));
document.getElementById('githubBtn').addEventListener('click', ()=> alert('Trigger GitHub OAuth flow (demo)'));
})();