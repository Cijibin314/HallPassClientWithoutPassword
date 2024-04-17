// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'username' parameter

//TODO: CHANGE THESE BACK TO ACTUAL VALUES////////////////////////////////////////////////////////////////////////////////////////////////////////
const username = "coltonflather@gmail.com"//urlParams.get('username');
const password = "Wonderful1!"//urlParams.get('password');
// Use the username in your page login
const newUser = new User(username, password);
setInterval(()=>{
    const optionState = document.getElementById("goToSelection").value
    if(optionState === "other"){
        document.getElementById("otherWrapper").style.visibility = "visible";
    }else{
        document.getElementById("otherWrapper").style.visibility = "hidden";
        document.getElementById("otherInput").value = "";
    }
}, 100)


function submitForm(){
    const otherInput = document.getElementById("otherInput").value;
    const regularInput = document.getElementById("goToSelection").value;
    if(otherInput){
        newUser.setLocation(otherInput);
        window.location.href = `../statusPage/statusPage.html?username=${username}&password=${password}`
    }else{
        newUser.setLocation(regularInput);
        window.location.href = `../statusPage/statusPage.html?username=${username}&password=${password}`
    }
}