function getInputId(id) {
    return document.getElementById(id);
}
let userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];

function signUp(event) {
    event.preventDefault()
    const name = getInputId("signup-name")
    const email = getInputId("signup-email")
    const password = getInputId("signup-pass")
    const newUser = {
        name : name.value,
            email : email.value,
            password : password.value
    }

    if (name.value != "" && email.value != " " && password.value != " ") {
        userData.push(newUser);
        if(localStorage){
            localStorage.setItem("userData", JSON.stringify(userData));
        } 
    } else {
        alert("fill all field")
    }
}


function login(event)
{
    event.preventDefault()
    const email = getInputId("login-email")
    const password = getInputId("login-password")
    const user = userData.find((user)=> user.email === email.value)
    console.log(user)
    if(user && user.password === password.value){
        console.log(user.password)
        console.log("login")
        window.location.replace("./array/arrayMethod.html");
        localStorage.setItem("isLogged", true)
        localStorage.setItem("loginUserData",JSON.stringify(user))
    }else{
        console.log("not")
    }
}