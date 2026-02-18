

document.getElementById("btn-login").addEventListener("click",function(){
    const  mobileNumber = document.getElementById("mobile-number").value;
    const pin = document.getElementById("password").value;
    if(mobileNumber === '01677509970' && pin==="1234"){
        alert("login successful");
        window.location.replace("./home.html");
    }
    else{
        alert("login failed");
        return;

    }
});