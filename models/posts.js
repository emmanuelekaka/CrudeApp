const mongoose = require('mongoose');

// Schema which is timestamped by default
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true  
    },
    body:{
        type: String,
        required: true  
    }
},{timestamps:true}
)

// Creating a database model using a schema
const Post = new mongoose.model("post", postSchema);

module.exports = Post;