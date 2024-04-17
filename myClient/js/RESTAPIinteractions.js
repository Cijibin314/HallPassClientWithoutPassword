async function returnHi(){
    console.log("hi")
}
async function getUserData(username){
    return fetch(`https://hallpassserver2.onrender.com/get-user/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(data => {
        // Log the response data or do something with it
        return data;
    })
    .catch(error => {
        // Log any errors
        return "User dosen't exist"
    })
}

async function userExists(name) {
    return getUserData(name).then((result)=>{
        if(result !== "User dosen't exist"){
            return result;
        }else{
            return false;
        }
    });
}
async function addUser(body_) {
    try {
        return userExists(body_["username"]).then((userData)=>{
            if(!userData){
                console.log("got to the request")
                return fetch("https://hallpassserver2.onrender.com/add-user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body_)
                }).then(response => {return response.json()}).then(data => {return data});
            } else {
                return "User Already Exists";
            }
        })
    } catch (error) {
        console.error("Error:", error);
        throw error; // Propagate the error
    }
}
async function updateUser(name, body_) {
    const exists = await userExists(name);
    if(exists){
        const response = await fetch(`https://hallpassserver2.onrender.com/update-user/${name}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body_)
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
        const response = await fetch(`https://hallpassserver2.onrender.com/replace-user/${username}`, {
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
        const response = await fetch(`https://hallpassserver2.onrender.com/delete-user/${username}`, {
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