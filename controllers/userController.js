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
            console.log("userdata")
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
        return res.status(200).send({
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



































// module.exports={

//     userForm:function(req,res){
//         res.render('user-form')
//    },
// saveUser((req,res) => {
    
//     var obj={
//         fullName = req.body.fullName,
//         email = req.body.email,
//         phoneNumber = req.body.phoneNumber}
    
//     userModle.insertOne(obj , (err, res)=> {
//         if (err) throw err;
//         console.log("document inserted");
//         res.render("user form")
//         res.send(200,"successfully saved")
//   })
    
// });


//var user1 = new User({fullName:"user2",email:"sarim@gmail.com",phoneNumber:9083456789})

// console.log(user1)
// exports.router.postAddUser = (req,res,next) => {
//     const fullName = req.body.fullName
//     const email = req.body.email
//     const phoneNumber = req.body.phoneNumber
//     const user = new User({
//         fullName:fullName,email:email,phoneNumber:phoneNumber
//     })
// }
