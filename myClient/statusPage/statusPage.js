// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'username' parameter

const username = urlParams.get('username');
const password = urlParams.get('password');
// Use the username in your page login
function initializePage(){

    let destination;


    const newUser = new User(username, password);
    setTimeout(()=>{
        newUser.getLocation().then((result) => {
            destination = result;
            document.getElementById("destination").textContent = destination;
        });
    }, 1500)
    // setting up the clock
    let currentTime = new Date();
    const fiveMinutesInMillis = 5 * 60 * 1000;
    const futureTime = new Date(currentTime.getTime() + fiveMinutesInMillis);

    let timeDifference;
    setInterval(()=>{
        currentTime = new Date();
        timeDifference = Math.round((futureTime.getTime() - currentTime.getTime()) / 60000);
        document.getElementById("timeLeft").textContent = timeDifference;
        if(timeDifference <= 0){
            document.getElementById("timeLeft").textContent = "Expired";
            document.getElementById("timeLeft").style.color = "red";
        }
    }, 5000)
}
initializePage();

function backToLogin(){

}
function backToLocationChoosing(){
    window.location.href = `../goToPage/goToPage.html?username=${username}&password=${password}`
}
function backToLogin(){
    window.location.href = `../mainPage/index.html?username=${username}&password=${password}`
}