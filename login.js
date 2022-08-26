function validate(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username=="sourav"&&password=="masai"){
        alert("login successful");

    }else{
        alert("login failed");
    }
}
