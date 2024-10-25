function getInputId(id) {
    return document.getElementById(id);
}

function logIn() {
    const name = getInputId("login-email")
    const email = getInputId("login-password")
    const credential = localStorage.getItem("userObj")
console.log(name.value)
console.log(email.value)
    if(name.value != "" && email.value != " "){
        
        alert(credential.length )
    }else{
        alert("fill all fields")
    }
}


function signUp() {
    const name = getInputId("signup-name")
    const email = getInputId("signup-email")
    const password = getInputId("signup-pass")


    if (name.value != "" && email.value != " " && password.value != " ") {
        localStorage.setItem("userObj", JSON.stringify({
            name : name.value,
            email : email.value,
            password : password.value
        }));
    } else {
        alert("fill all field")
    }
}