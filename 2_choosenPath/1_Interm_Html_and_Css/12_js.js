function validateForm() {

    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;

    if (fname == "") {
        document.getElementById("error-message1").innerText = "First name must be filled out.";
        return false;
    }
    if (lname == "") {
        document.getElementById("erro-message2").innerText = "Last name must be filled out.";
        return false;
    }
    return true; // Allow form submission if validation passes  

}
