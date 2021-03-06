// var swal = require("sweetalert")
$(document).ready(function(){
   $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: 0.5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );

  var currentURL = window.location.origin;

  $('#signUp').on('click', function(){
    var newUser = {
      firstName: $('#first_name').val().trim(),
      lastName: $('#last_name').val().trim(),
      username: $('#username').val().trim(),
      password: $('#password').val().trim(),
      reenterpassword: $('#reenterpassword').val().trim(),
      email: $('#email').val().trim()
    };
    if(newUser.password === newUser.reenterpassword){ //added this
    $.post(currentURL + "/login/new", newUser ,function(err){
      console.log(err);
      if (err == "alert"){
        sweetAlert("Oops...", "Username is taken, try another!", "error");
      }
      else {
        window.location.reload();
      }
    });
  }
  else {
    sweetAlert("Oops...", "Please make sure your passwords match!", "error");
  } //added this
    return false;
  });

 $('#signInSubmit').on('click', function(e){
   e.preventDefault();
   var userInfo = {
    username: $('#signInUser').val().trim(),
    password: $('#signInPass').val().trim()
    };
   var currentURL = window.location.origin;
   $.post(currentURL + '/signIn', userInfo, function(data){
    if (data == "userName" || data == "password"){
      // alert("you entered a username that doesn't exist");
      sweetAlert("Oops...", "Wrong username or password!", "error");
    }
    // else if (data == "password"){
    //   sweetAlert("Oops...", "Wrong username or password!", "error");
    // }
    else {
    window.location.href = "/mylist";
    }
   });
  }); //closes out submit button on click

  function check(){
    var check = $("#myCheckbox").val();
    if (check == "on"){
      return true;
    }
    else{
      return false;
    }
  }
  $('#addToDo').on('click',function(e){
    console.log("button clicked");
    e.preventDefault();
    //var emailRemind = $('#mySwitch').prop("checked");
    //console.log(emailRemind);
    var newItem = {
      title: $('#restaurantNameInput').val().trim(),
      description: $('#commentInput').val().trim(),
      remind: $('#reminderInput')[0].checked,
      remindTime: $('#dateInput').val().trim(),
      city: $('#cityInput').val().trim(),
      address: $('#addressInput').val().trim(),
      state: $('#stateInput').val().trim(),
      restaurantPhone: $('#phoneInput').val().trim(),
      restaurantURL: $('#websiteInput').val().trim()
    };
    console.log("new click:");
    console.log(newItem);
    var currentURL = window.location.origin;
    $.post(currentURL + '/addToList', newItem, function(data){
      window.location.href = "/mylist";
    });
  });
}); //closes out document.ready
