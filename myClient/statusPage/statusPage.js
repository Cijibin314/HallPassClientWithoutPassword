// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'username' parameter

const username = urlParams.get('username');
const password = urlParams.get('password');
// Use the username in your page login
let newUser;
function initializePage(){

    let destination;


    newUser = new User(username, password);

    const date = new Date;
    date.setTime(date.getTime());
    
    let minutes = date.getMinutes();
    let hour = date.getHours();
    if(hour > 12){
        hour -= 12;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    setTimeout(()=>{
        newUser.getLocation().then((result) => {
            destination = result;
            document.getElementById("destination").textContent = `Destination: ${destination}`;
        });
        document.getElementById("timeLeft").textContent = `Left At: ${hour}:${minutes}`;
    }, 1500)
}
initializePage();

function backToLocationChoosing(){
    window.location.href = `../goToPage/goToPage.html?username=${username}&password=${password}`
}
function backToLogin(){
    window.location.href = `../mainPage/index.html?username=${username}&password=${password}`
}
async function backInRoom(){
    newUser.setLocation("inRoom").then(()=>{backToLogin()})
}