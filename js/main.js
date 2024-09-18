function validatePassword(){
    let password=document.getElementById("password").value
    let repassword=document.getElementById("repassword").value
    let message=document.getElementById("message") 
    
    if(password.length !=0 && repassword.length !=0){
        if(password===repassword){
            message.textContent="password match"
            message.style.backgroundColor="#3ae374"
        }
        else{
            message.textContent="password don't match"
            message.style.backgroundColor="#ff4d4d"
        }
    }
    else{
        alert("please enter password or confirm password")
    }
}