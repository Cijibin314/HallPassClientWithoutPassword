async function returnHi(){
    console.log("hi")
}


async function getUserData(username) {
    try{
    const options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.6.1'}};
        return fetch(`https://luxuriant-open-pedestrian.glitch.me/get-user/${name}`, options)
        .then(response => response.json())
        .then(response => {/*console.log(response)*/;return response})
    }catch(err){
        // this part dosen't work
        return async function(){
            return "user does not exist"
        }
    }
}
async function userExists(name) {
    return getUserData(name).then((result)=>{
        return true;
    }).catch((error)=>{return false;});
}
async function addUser(body) {
    try {
        const exists = await userExists(body["username"]);
        if (!exists) {
            const response = await fetch("https://luxuriant-open-pedestrian.glitch.me/add-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
        } else {
            return "User Already Exists";
        }
    } catch (error) {
        console.error("Error:", error);
        throw error; // Propagate the error
    }
}
async function updateUser(name, body) {
    const exists = await userExists(name);
    if(exists){
        const response = await fetch(`https://luxuriant-open-pedestrian.glitch.me/update-user/${name}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
    }else{
        return "User does not exist"
    }
}
async function replaceUser(username, body){
    const exists = await userExists(username);
    if(exists){
        const response = await fetch(`https://luxuriant-open-pedestrian.glitch.me/replace-user/${name}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
    }else{
        return "User does not exist"
    }
}
async function deleteUser(username){
    const exists = await userExists(username);
    if(exists){
        const response = await fetch(`https://luxuriant-open-pedestrian.glitch.me/delete-user/${name}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            return data;
    }else{
        return "User does not exist"
    }
}