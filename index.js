/*arbabs test project*/
$(document).ready(function() {
  // فرم ثبت نام
  $('#register-button').on('click', function(e) {
     e.preventDefault();
     $('#login-form').hide();
     $('#register-form').show();
  });

  // فرم فراموشی رمز عبور
  $('#forgot-password-button').on('click', function(e) {
     e.preventDefault();
     $('#login-form').hide();
     $('#forgot-password-form').show();
  });

  // برگشت به لاگین
  $('.back-to-login-button').on('click', function(e) {
     e.preventDefault();
     $('#register-form').hide();
     $('#forgot-password-form').hide();
     $('#login-form').show();
  });

  //دکمه تایید ورود
  $('#login-form').on('submit', function(e) {
     e.preventDefault();
     
  });

  // دکمه تایید ثنت نام
  $('#register-form').on('submit', function(e) {
     e.preventDefault();
    
  });

  //دکمه تایید فراموشی رمز عبور
  $('#forgot-password-form').on('submit', function(e) {
     e.preventDefault();
    
  });
});