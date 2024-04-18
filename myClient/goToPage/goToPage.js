// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'username' parameter

const username = urlParams.get('username');
const password = urlParams.get('password');
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
    const roomLeft = document.getElementById("roomLeftInput").value;
    if(roomLeft !== ""){
        console.log("setting room to " + roomLeft)
        newUser.setRoom(roomLeft).catch(err => console.log(err));
    }else{
        document.getElementById("roomLeftInput").style.borderColor = "red";
        document.getElementById("roomLeftInput").color = "red";
        document.getElementById("roomLeftInput").placeholder = "Please enter a room number";
        setTimeout(()=>{
            document.getElementById("roomLeftInput").style.borderColor = "";
            document.getElementById("roomLeftInput").color = "";
            document.getElementById("roomLeftInput").placeholder = "";
        }, 2000)
        return "User needs to input a room number";
    }
    const otherInput = document.getElementById("otherInput").value;
    const regularInput = document.getElementById("goToSelection").value;
    if(otherInput){
        console.log("setting location to " + otherInput)
        document.getElementById("submitButton").textContent = "Submitting..."
        newUser.setLocation(otherInput).then((result) => {
            window.location.href = `../statusPage/statusPage.html?username=${username}&password=${password}`
        })
    }else{
        console.log("setting location to " + regularInput)
        document.getElementById("submitButton").textContent = "Submitting..."
        newUser.setLocation(regularInput).then((result) => {
            window.location.href = `../statusPage/statusPage.html?username=${username}&password=${password}`
        })
    }
}

function backToLogin(){
    window.location.href = `../mainPage/index.html?username=${username}&password=${password}`
}