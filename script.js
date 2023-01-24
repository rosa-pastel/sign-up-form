function checkPasswords(){
    const error_element = document.querySelector("p.error, p.no-error")
    if(password1.value !== password2.value){  
        displayPasswordWarning(error_element)
    }
    else{
        removePasswordWarning(error_element)
    }
    console.log(1)
}

function displayPasswordWarning(error_element){
    error_element.textContent = "Passwords do not match"      
    error_element.setAttribute("class","error")
    password1.setAttribute("class","error")
    password2.setAttribute("class","error")
}

function removePasswordWarning(error_element){
    error_element.textContent = ""
    error_element.setAttribute("class","no-error")
    password1.setAttribute("class","")
    password2.setAttribute("class","")
}

const password1 = document.getElementById("password")
const password2 = document.getElementById("confirm-password")
password1.addEventListener("change", checkPasswords)
password2.addEventListener("change", checkPasswords)

