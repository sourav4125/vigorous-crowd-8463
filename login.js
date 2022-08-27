document.getElementById("box").addEventListener("submit", validate);
function validate(event){
   event.preventDefault();
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username=="sourav"&&password=="masai"){
        console.log("HERE")
        alert("login successful");
        window.location.href="head.html";

    }else{
        alert("login failed");
    }
}
