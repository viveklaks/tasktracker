import express from 'express';
import User from './models/User.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {url} from './db/db.js'
const app =express();


  
app.use(cors());
mongoose.connect(url,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    }
)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.post("/register",(req,res)=>{
    try {
        User.findOne({$or:[{username:req.body.username},{email:req.body.email}]}).then((user)=>{
            if(user){
                return res.status(400).json({email:" email already in user",username:"already in use"})
            }else{
                const newUser = new User({
                    username:req.body.username,
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    email:req.body.email,
                    password:req.body.password,
                    
                });
                newUser.save()
                return res.status(200).json({msg:newUser})
            }
        });
        
      } catch (error) {
        console.error(error);
        
      }
    

});

app.post("/login",(req,res)=>{
    try {
        User.findOne({$and:[{username:req.body.username},{password:req.body.password}]}).then((user)=>{
            if(user){
                return res.status(200).json({loggedin:"Success"})
            }else{
                
                return res.status(400).json({msg:"check userid and password"})
            }
        });
        
      } catch (error) {
        console.error(error);
        
      }
    

});
app.get('/',(req,res)=>{
    res.send("Hello Node")
});
const port = process.env.PORT || 5500;
app.listen(port ,()=>{
    console.log(`Serve at http://localhost:${port}`);
});