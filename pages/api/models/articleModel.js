const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    title:String,
    details: String
})




export default mongoose.models.Article || mongoose.model("Article", userSchema)