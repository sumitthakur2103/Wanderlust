const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);//automatically username , password , hashing, salting add karne k liye plugin ko add kiya 

module.exports = mongoose.model("User", userSchema);