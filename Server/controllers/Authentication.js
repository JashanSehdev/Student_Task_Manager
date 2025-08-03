const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const userModel = require('../Models/user')

// for register
const register = async(req,res)=>{
    
    try{

    const {username,email,password,confirm_password} = req.body;
    // "User" for checking is user exist
    const User = await userModel.findOne({ $or: [{ username }, { email }] })

    if(User) return res.status(409).send("User Already exisit");

    if(password!== confirm_password)return res.status(400).send("pass don't match");
    
    // "user" for getting recently created user
    const user =await userModel.create({
        username,
        email,
        password
    })

    let token = jwt.sign({username,userId:user._id},"shhh");
    res.cookie("token",token)
    res.status(201).send("User registered")}

    catch(err){
        console.log("server error register",err);
        res.status(500).send("fill all required data or server error"); // if req.body don't send required data then it throw this error
    }
} 

// for login 
const login = async (req,res)=>{
    try{
        const{username,password} = req.body;

        let user = await userModel.findOne({username}) //don't forget to put await

        if(!user)return res.status(404).send("user not found") // if user not found
        
        if(user){       // final output
            if(user.password !== password) return res.status(400).send("username or password is incorrect");
            let token = jwt.sign({username,userId:user.id},"shhh");
            res.cookie("token",token)
            res.status(200).send("Login successful")
            
        }

    } catch (err){
        console.log("error in server login",err);
        res.send(5000).send("server error or something required") // if req.body don't send required data then it throw this error
    }
}

// for logout
const logout = async (req,res)=>{
    try{res.cookie("token","")
        res.status(200).send("Successful logout");}
    catch(err){
        console.log("there is error in logout")
        res.send("error in sending empty token")
        }
}
module.exports = {
    register,
    login,
    logout
}