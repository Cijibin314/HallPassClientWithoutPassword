class User{
    username;
    constructor(username){
        userExists(username).then((userData)=>{
            if(userData){
                console.log("User logged in")
                this.username = username;
            }else{
                console.log("User does not exist")
            }
        }).catch(err => console.log(err));
    }
    async setLocation(location){
        let blankLocation = {
            "bathroom": false,
            "office": false,
            "guidance": false,
            "inRoom": false,
            "dismissed": false,
            "absent": false,
            "other": ""
        }
        
            const locations = Object.keys(blankLocation);
            for(const key of locations){
                if(key !== "other" && location === key){
                    blankLocation[location] = true;
                    return updateUser(this.username, {"location": blankLocation}).then((response) => {return response;}).catch(error => {return error})
                }
            }
            blankLocation["other"] = location;
            return updateUser(this.username, {"location": blankLocation}).then((response) => {return response;}).catch(error => {return error})
        
}
    async getLocation(){
        const dataObj = await getUserData(this.username);
        const locationObj = dataObj["location"];
        const keys = Object.keys(locationObj);
        let location;
        for(const key of keys){
            if(locationObj[key]){
                if(key !== "other"){
                    location = key;
                }else{
                    location = locationObj[key];
                }
            }
        }
        location = location[0].toUpperCase() + location.slice(1);
        return location;
    }
    async getLocationObj(){
        const dataObj = await getUserData(this.username);
        return dataObj["location"];
    }
    async getRoom(){
        const dataObj = await getUserData(this.username);
        return dataObj["roomLeft"];
    }
    async setRoom(room){
        return await updateUser(this.username, {"roomLeft": room})
    }
    async deleteUser(){
        return await deleteUser(this.username);
    }
}