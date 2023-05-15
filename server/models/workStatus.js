import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';  

const schema = new mongoose.Schema({  
    email : {
        type : String,
        required : true,
        unique : true
    },
    teacher : {
        type : [String]  
    },
    student : {
        type : [String]
    }
})

const model = mongoose.model('workStatus', schema);

export default model;