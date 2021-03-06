const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    USER
} = require('../constants/models.constant');

const userSchema = new Schema({
  id:{
type:String,
required:true,
default:"1"
  },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(USER, userSchema);