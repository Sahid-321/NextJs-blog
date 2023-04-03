const mongoose = require("mongoose")

const connectDB = async()=>{
   try {
    const url = "mongodb://0.0.0.0:27017/nextjsblog"
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 30000,
      };
    
    
 await mongoose.connect(url, options)
 console.log("mongo db connected successfull");
}
 catch (error) {
    console.log(error);
   }
}

module.exports = connectDB