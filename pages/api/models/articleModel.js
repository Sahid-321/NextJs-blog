const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    details: { type: String, required: true },
    role: { type: String }
})




export default mongoose.models.Article || mongoose.model("Article", userSchema)