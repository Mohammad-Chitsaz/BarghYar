const signUpInput = document.querySelector('.sign-up-input');
const signUpButton = document.querySelector('.sign-up-btn');

signUpButton.addEventListener('click', event => {
  event.preventDefault();
  if (signUpInput.value) alert('شما با موفقیت ثبت نام شدید');
  else alert('لطفا ایمیل خود را وارد کنید.');
});
