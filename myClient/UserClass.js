class User{
    username;
    password;
    constructor(username, password){
        userExists(username).then((exists)=>{
            if(exists){
                getUserData(username).then((data)=>{
                    if(data.password === password){
                        console.log("User logged in")
                        this.username = username;
                        this.password = password;
                    }else{
                        console.log("Password is wrong")
                    }
                }).catch(err => console.log(err));
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
        try{
            blankLocation[location] = true;
            await updateUser(this.username, {"location": blankLocation})
        }catch{
            blankLocation["other"] = location;
            await updateUser(this.username, {"location": blankLocation})
        }
    }
    async getLocation(){
        const dataObj = await getUserData(this.username);
        const locationObj = dataObj["location"];
        const keys = locationObj.keys();
        for(const key in keys){
            if(locationObj[key]){
                return locationObj[key];
            }
        }
    }
    async getLocationObj(){
        const dataObj = await getUserData(this.username);
        return dataObj["location"];
    }
    async setPassword(password){
        await updateUser(this.username, {"password": password})
    }
    async getPassword(){
        const dataObj = await getUserData(this.username);
        return dataObj["password"];
    }
    async deleteUser(){
        await deleteUser(this.username);
    }
}
setTimeout(()=>{
    let myUser = new User("coltonflather@gmail.com", "Wonderful1!");
}, 1000)