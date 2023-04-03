const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: String
})




export default mongoose.models.User || mongoose.model("User", userSchema)