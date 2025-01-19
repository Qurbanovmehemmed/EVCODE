
import mongoose, { connect } from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connect to monmgo")
}).catch(()=>{
    console.log("not connect")
})