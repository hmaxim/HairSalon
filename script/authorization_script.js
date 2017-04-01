$(document).ready(function autorization(){
  checkLS();
$('#authorization').click(function(){
 var login=$('#inputLogin').val();
 var password=$('#inputPassword').val();
 var radio = $('input[name=user_type]:checked').val();
if(radio === 'client'){
 $.ajax({
  url: 'https://hear-saloon.herokuapp.com/rest/hairsalon/client/login',
  method: 'POST',
   data: JSON.stringify({
    clientEmail: login,
    clientPassword: password
     }),
  dataType: 'json',
  contentType: "application/json; charset=utf-8",
  success: function(){
        location.href="client_account.html"
  },
  error: function() {
      alert('login or password is not correct')
    },
}).then(function (data) {
  console.log(data);
  localStorage.setItem("clientAuth", JSON.stringify(data));
});
}else{
 $.ajax({
  url: 'https://hear-saloon.herokuapp.com/rest/hairsalon/master/login',
  method: 'POST',
   data: JSON.stringify({
    email: login,
    password: password
     }),
  dataType: 'json',
  contentType: "application/json; charset=utf-8",
  success: function(){
      location.href="private_master.html"
  },
  error: function() {
     alert('login or password is not correct')
    },
}).then(function (data) {
  console.log(data);
  localStorage.setItem("user1", JSON.stringify(data));
});
}
});
})

///Перенести в отдельный скрипт и дописать logout с удалением key в localStorage
///нужно сделать что бы стартовая показывалась только по logout
///через delete LocalStorage как вариант
function checkLS() {
  var dataR  = localStorage.getItem("clientReg");
  var dataA  = localStorage.getItem("clientAuth");
  if(dataR !== null && dataR !== 'undefined'){
    location.href="client_account.html"
  }
  if(dataA !== null && dataA !== 'undefined'){
    location.href="client_account.html"
  }
}