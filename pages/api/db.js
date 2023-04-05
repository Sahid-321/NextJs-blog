const mongoose = require("mongoose")

const connectDB = async()=>{
   try {
    const url = "mongodb+srv://user:F24PGnId5I91ZL5y@ecommerce.qxk5j1r.mongodb.net/?retryWrites=true&w=majority"
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