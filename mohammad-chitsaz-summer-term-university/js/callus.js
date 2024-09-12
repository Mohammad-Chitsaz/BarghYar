const callUsNameField = document.querySelector('.call-us__name');
const callUsEmailField = document.querySelector('.call-us__email');
const callUsRequestField = document.querySelector('.call-us__request');
const callUsSubmitButton = document.querySelector('.call-us-submit-btn');

console.log(callUsNameField);
console.log(callUsEmailField);
console.log(callUsRequestField);

callUsSubmitButton.addEventListener('click', event => {
  event.preventDefault();
  if (callUsNameField.value && callUsEmailField.value && callUsRequestField.value)
    alert('درخواست شما با موفقیت ارسال شد و همکاران ما در اسرع وقت با شما ارتباط خواهند گرفت.');
  else alert('لطفا تمامی فرم های بالا را پر کنید.');
});
