/* -------------------------------------------------
# all scripts  here it will extends to all the pages 
--------------------------------------------------*/
// 1) if no patient, show the maessage
$(document).ready(function(){
    var verify = $("#chk_td").length;
        if (verify == 0) {
            $("#no-data").text("No patient found");
        }
});

//3) Validate all <inputs>
function validateEmail(email) {
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validateAll() {
    
    var name = $("#name").val();
    var name = $("#phone").val();
    var name = $("#email").val();
    var name = $("#age").val();
    var name = $("#gender").val();

    if (name == ''){
        swal("Opss !", "Name field cannot be empty.", "error")
        return false;
    }

    else if (phone == ''){
        swal("Opss !", "Phone field cannot be empty.", "error")
        return false;
    }

    else if (email == ''){
        swal("Opss !", "Email field cannot be empty.", "error")
        return false;
    }

    else if  (!(validateEmail(email))) {
        swal("Opss !", "Put a valid email adress.", "error")
        $("#email").val("");
        return false;
    }
    else if (age == ''){
        swal("Opss !", "Age field cannot be empty.", "error")
        return false;
    }
    else if (gender == ''){
        swal("Opss !", "Gender field cannot be empty.", "error")
        return false;
    }
    else {
        return true;
    }
}

$("#btn-add").bind("click",validateAll);

