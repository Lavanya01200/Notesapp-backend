const express=require('express');
const cors=require('cors')
const app=express();
require("dotenv").config()
const mongoose=require('mongoose');
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/note.routes")
const database=module.exports=()=>{
   const connetionParams={
      useNewUrlParser:true,
      useUnifiedTopology:true,
   }
   try{
      mongoose.connect('mongodb+srv://lavanyasurisetty1:lavanyasurisetty@cluster0.buzy5qy.mongodb.net/')
      console.log('databse connected')
   }
   catch(error){
    console.log('Database not connected')  
   }
}
database();
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/note",noteRouter)
app.get("/",(req,res)=>{
    res.send({message:"api is working now"})
})
app.listen(2000,
    console.log("server is running on port 2000")
)