const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ProfileSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users',
    },

    handle:{
        type: String,
        required,
        max: 40
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required
    },
    bio: {
        type: String,
    },
    githubusername:{
        type: String
    }
});
