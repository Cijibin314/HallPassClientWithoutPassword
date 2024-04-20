// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'username' parameter

const username = urlParams.get('username');
// Use the username in your page login
let newUser;
function initializePage(){

    let destination;


    newUser = new User(username);

    const date = new Date;
    date.setTime(date.getTime());
    
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let afterNoon = false;
    if(hour > 12){
        hour -= 12;
        afterNoon = true;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    setTimeout(async function (){
        newUser.getLocation().then((result) => {
            destination = result;
            document.getElementById("destination").textContent = `Destination: ${destination}`;
        });
        newUser.getRoom().then((result) => {
            document.getElementById("leftFrom").textContent = `Left From: ${result}`;
        })
        if(afterNoon){
            document.getElementById("timeLeft").textContent = `Left At: ${hour}:${minutes}p.m.`;
        }else{
            document.getElementById("timeLeft").textContent = `Left At: ${hour}:${minutes}a.m.`;
        }
    }, 1500)
}
initializePage();

function backToLocationChoosing(){
    window.location.href = `../goToPage/goToPage.html?username=${username}`
}
function backToLogin(){
    window.location.href = `../mainPage/index.html?username=${username}`
}
async function backInRoom(){
    newUser.setLocation("inRoom").then(()=>{backToLogin()})
}