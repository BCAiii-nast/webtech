function validate()
{
    let email = document.getElementById('email').value;
    console.log(email.indexOf('@'));

    if((email.indexOf('@') == -1 || email.indexOf('@') ==0) || (email.length -4 != email.indexOf('.')) ){
        alert("Email field is not correct");
        return false;
    }
}