const emailEl = document.getElementById("email")
const submitEl = document.getElementById("email-btn")

submitEl.addEventListener("click", function(){
    validateEmail()
})

const validateEmail = () =>{
    const emailvalue = emailEl.value.trim()

    if(emailvalue === ""){
        showError(emailEl, "Email cannot be empty")
    } else if(!isEmailValid(emailvalue)){
        showError(emailEl, "Email is not valid")
    } else{
        showSuccess(emailEl)
    }
}
const showError = (element, message) => {
    
    const errorMsg = document.querySelector(".error")
     errorMsg.textContent = message
     inputField.classList.add("error")
     inputField.classList.remove("success")
}
const showSuccess = (element, message) => {
    
    const errorMsg = document.querySelector(".error")
     errorMsg.textContent = ""
     inputField.classList.add("success")
     inputField.classList.remove("error")
}
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}