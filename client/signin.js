var signin = {
  init: function (){

    signin.events();
  },



events: function () {
  $(".glyphicon-plus").on('click', function(event){
      event.preventDefault();
      $('.add-item-container').toggleClass('hidden');
  });

  $(".admin-log-in").on('click', function(event){
      event.preventDefault();
      $('.signIn').toggleClass('hidden');
  });
}
};

//credit to http://www.formget.com/javascript-login-form/ for the function below

$(document).ready(function(){
$(".loginSubmit").on('click',function(event) {
  event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "theIronBar" && password == "fullstax") {
      $('.admin').removeClass('hidden');
        alert("Login successfully");
        return false;
    } else {

        alert("You are wrong about that.");

    }
});
});
