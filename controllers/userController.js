// here we store the logic 
//CRUD perform here
const express = require("express");
const userModel = require("../modules/userModel");

//const userModle = require("../modules/userModel"); // mapping userModule schema with mongoose 


class User{
  async addUser(req,res){
        const obj = new userModel(
            {
                fullName:req.body.fullName,
                email:req.body.email,
                phoneNumber:req.body.phoneNumber
            }) 
           await obj.save()
           .then((userdata)=>{
              return res.status(200).send({
                success: true, 
                message: "record saved successfully"});
            })
            .catch((err)=>{
                return res.status(400).send({
                    success:false,
                    err: {message: "save Failed"} });
            })

    }
  async  fetchUser(req,res){
      await userModel.find({})
      .then((userdata)=>{
        return res.status(200).snd({
          success: true, 
          message: userdata});
      })
      .catch((err)=>{
          return res.status(400).send({
              success:false,
              err: {message: "save Failed"} });
      })
    }
    async updateUser(req,res){
        await userModel.findOneAndUpdate({id:req.body.id,
            fullName:req.body.fullName,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber
        })
        .then((userdata)=>{
            return res.status(200).send({
              success: true, 
              message: "record saved successfully"});
          console.log("userdata")
          })
          .catch((err)=>{
              return res.status(400).send({
                  success:false,
                  err: {message: "save Failed"} });
          })
        
    }
    async deleteUser(req,res){
        await userModel.findOneAndDelete({id:req.body.id})
        .then((userdata)=>{
            return res.status(200).send({
              success: true, 
              message: "your record deleted successfully"});
          })
          .catch((err)=>{
              return res.status(400).send({
                  success:false,
                  err: {message: "request failed try again"} });
          })
    }
}
module.exports=new User();
