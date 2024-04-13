const express = require('express')
const mongoose = require('mongoose');
const UserModel = require('userModel');

const cors = require('cors')

const app = express();

app.use(express.json())

const connectionString = "mongodb+srv://coltonflather:Wonderful1!@userdatacluster.gskuflb.mongodb.net/"
mongoose.connect(connectionString);

app.listen(3000, "localhost", ()=>{console.log("started")})

//post requests
app.post('/add-user', (req, res) => {
  let body = req.body;
  const newUser = new UserModel(body);

  newUser.save().then((result) => {
      res.status(200).send(result);
  }).catch((error) => {
      res.status(400).send({ "userExists": false });
  });
});

app.post('/update-user/:name', (req, res) => {
  const name = req.params.name;
  const body = req.body;
  res.send(body)
  UserModel.findOneAndUpdate({name: name}, body, {new: true}).exec().then((result)=>{
    res.status(200);res.send(result)
  }).catch((error)=>{
    res.status(400); console.log(error)
  });
})

app.post('/replace-user/:name', (req, res) => {
  const name = req.params.name;
  const body = req.body;
  res.send(body)
  UserModel.findOneAndReplace({name: name}, body, {new: true}).exec().then((result)=>{
    res.status(200);res.send(result)
  }).catch((error)=>{
    res.status(400); console.log(error)
  });
})
//puts

app.put('/delete-user/:name', (req, res) => {
  const name = req.params.name;
  UserModel.findOneAndDelete({name:name}).exec().then((result)=>{
    res.status(200);res.send(result)
  }).catch((error)=>{
    res.status(400); console.log(error)
  });
})
//gets
app.get('/get-user/:name',(req,res)=>{
    const name = req.params.name
    UserModel.findOne({name: name}).exec().then((result)=>{
      res.status(200);res.send(result)
    }).catch(err=>res.send(err));
})

//testing
app.post('/test', (req, res) => {
  const body = req.body;
  res.send(body);
})