$(document).ready(function(){
    $("#submit-form").validate({
      rule:{
        name:{
          required:true
        },
        email:{
          requried:true,
          email:true
        },
        phnumber:{
          required:true,
          minlength:10,
          maxlength:10
        },
        message:{
            required:true,
            minlength:10
        }
      },
      messages:{
        phnumber:{
          required:"Enter your phone number",
          minlength:"Must be 10 digites",
          maxlength:"Must be 10 digites"
        },
        message:{
            required:"Enter your message",
            minlength:"Must be 10 digites"
        }
      }
    })
  })



/*|=================
| CONTACT FORM
|=================
*/


