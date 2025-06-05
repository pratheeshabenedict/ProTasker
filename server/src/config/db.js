const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI,{
           useNewUrlParser: true,
           useUnifiedTopology: true,
        });
        console.log("MongoDb connected successfully");
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
    }
    catch(error){
        console.error(`Not connected,${error.message}`);
        process.exit(1);
    }
};
module.exports=connectDB;
