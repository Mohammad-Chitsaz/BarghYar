const mainPaymentButton = document.getElementById('main-payment-btn');
const paymentInput = document.getElementById('payment-input');

mainPaymentButton.addEventListener('click', event => {
  event.preventDefault();
  if (paymentInput.value) {
    alert('قبض شما با موفقیت پرداخت شد.');
  } else {
    alert('لطفا شناسه قبض خود را وارد کنید.');
  }
});
