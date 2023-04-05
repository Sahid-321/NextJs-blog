const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    user: { type: String, required: true },
    title: { type: String, required: true },
    articleId: { type: String, required: true }
})




export default mongoose.models.Chat || mongoose.model("Chat", userSchema)