function getInputId(id) {
    return document.getElementById(id);
}
const userName= getInputId("signInname")
const logOut = getInputId("logout")
const isLogged = localStorage.getItem("isLogged")
const loginData = localStorage.getItem("loginUserData")
// console.log(user)
let user = JSON.parse(loginData)
// console.log(m)
    if(isLogged){
       userName.innerText= user.name
       userName.href = "#";
       logOut.innerText = "LogOut"
       logOut.onclick = function(){
        // localStorage.clear("isLogged")
        localStorage.removeItem("isLogged");
        localStorage.removeItem("loginUserData");
        // localStorage.clear("loginUserData")
       }
    }


function handleLeftArrow() {
    let firstDivId = getInputId("first-card-div")
    let secondDivId = getInputId("second-card-div")
    secondDivId.style.display = "none"
    firstDivId.style.display = "flex"


}

function handleRightArrow() {
    let firstDivId = getInputId("first-card-div")
    let secondDivId = getInputId("second-card-div")
    secondDivId.style.display = "flex"
    firstDivId.style.display = "none"

}

function handleArrayCheck(){
    const isLogged = localStorage.getItem("isLogged")
    if(isLogged){
        document.location = "./array/arrayMethod.html";
    }else{
            alert("Login First")
    }
}

function handleStringCheck(){
    const isLogged = localStorage.getItem("isLogged")
    if(isLogged){
        document.location ="./stringMethod/stringMethod.html";
    }else{
            alert("Login First")
    }
}

function handleObjectCheck(){
    const isLogged = localStorage.getItem("isLogged")
    if(isLogged){
        document.location ="./object/objectMethod.html";
    }else{
            alert("Login First")
    }
}

function handlePromiseCheck(){
    const isLogged = localStorage.getItem("isLogged")
    if(isLogged){
       document.location ="./promise/promise.html";
    }else{
            alert("Login First")
    }
}

function handleCallbackCheck(){
    const isLogged = localStorage.getItem("isLogged")
    if(isLogged){
        document.location ="./promise/promise.html";
    }else{
            alert("Login First")
    }
}

function handleAsyncAwaitCheck(){
    const isLogged = localStorage.getItem("isLogged")
    if(isLogged){
        document.location ="./promise/promise.html";
    }else{
            alert("Login First")
    }
}

