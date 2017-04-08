$(document).ready(function autorization(){
// checkLS();
$(loginForm).submit(function (event) {
  event.preventDefault();
 var login=$('#inputLogin').val();
 var password=$('#inputPassword').val();
 var radio = $('input[name=user_type]:checked').val();
 if(radio === 'client'){
   $.ajax({
    url: 'https://hair-salon-personal.herokuapp.com/login/client',
    method: 'POST',
    data: JSON.stringify({
      clientEmail: login,
      clientPassword: password
    }),
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    success: function(){
      // location.href="client_account.html"
    },
    error: function() {
      alert('login or password is not correct')
    },
  }).then(function (data) {
    testRequest2();
    console.log(data);
    localStorage.setItem("client", data.token);
  });
}else{
 $.ajax({
  url: 'https://hair-salon-personal.herokuapp.com/login/master',
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
  localStorage.setItem("master", JSON.stringify(data));
});
}
});
});

function checkLS() {
  var data  = localStorage.getItem("client");
  if(data !== null && data !== 'undefined'){
    location.href="client_account.html"
  }
}

