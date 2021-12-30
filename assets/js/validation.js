function validate(){

  if(nameValidate()==true && emailValidate()==true && mobileValidate()==true && messageValidate()==true){
  
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbz5HplZBLZJTR_CI-TWumjwdSp18QWzQ7XCTvYdC37PR_cV0xU-KzXJv-tNSA0uWmWxwA/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              //window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Please enter the values")
  
          }
      })
  
    }
  }
  
  
  function nameValidate(){
    var varname = $('#fname').val();
    var pattern = /[a-zA-Z\s]+/;
  
    if(varname==" "){
      $('#name_error').html("Name is mandatory");
      return false;
    }else if(varname.match(pattern)){
      $('#name_error').html("");
      return true;
    }else{
      $('#name_error').html("Enter correct name");
      return false;
    }
  }
  
  function emailValidate(){
    var varEmail = $('#email').val();
    var emailPattern = /^[a-zA-Z0-9.!#$%&+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
    if(varEmail==""){
      $('#email_error').html("Email is mandatory");
      return false;
    }else if(varEmail.match(emailPattern)){
      $('#email_error').html("");
      return true;
    }else{
      $('#email_error').html("Enter correct Email");
      return false;
    }
  
  }
  
  function mobileValidate(){
    var varMobile = $('#phnumber').val();
    var mobilePattern = /^\d{10}$/;
  
    if(varMobile==""){
      $('#mobile_error').html("Contact number is mandatory");
      return false;
    }else if(varMobile.match(mobilePattern)){
      $('#mobile_error').html("");
      return true;
    }
    else if(varMobile.length<10 ||varMobile.length>=10){
      $('#mobile_error').html("Number should be 10 digits");
    }
    else{
      $('#mobile_error').html("Enter valid Contact number");
      return false;
    }
  }
  
  function messageValidate(){
    var varMessage = $('#msg').val();
  
    if(varMessage==""){
      $('#message_error').html("Enter something please");
      return false;
    }else {
      $('#message_error').html("");
      return true;
    }
  }