const form = {
    name: "",
    email: "",
    password: "",
    cpassword:"",
    message:"",
    firstname:"",
    lastname: "",
    
    nameValidate : function() {
        if(this.name == "" ){
            alert("Name is required and alphabet only");
            return false;
        }
    },
    emailValidate : function() {
        if(this.email == "" || !this.email.includes("@") || !this.email.includes(".")){
            alert("email is required and valid email address");
            return false;
        }
    },
    passwordValidate : function() {
        if(this.password == "" || this.password.length <8 ){
            alert("Password is required and gater than 8 char");
            return false;
        }
    },
    cpasswordValidate : function() {
        if(this.cpassword == "" || this.cpassword.length <8 ){
            alert("Confirm Password is required and gater than 8 char");
            return false;
        }
    },
    messageValidate : function() {
        
    
        if(this.message == "" ){
            alert("message is required ");
            return false;
        }
    },
    concatName: function(){
        alert(this.firstname+" "+this.lastname);
    }
};