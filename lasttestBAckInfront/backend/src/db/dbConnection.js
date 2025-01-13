import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to mongo");
}).catch(()=>{
    console.log("Error connecting to mongo");
})