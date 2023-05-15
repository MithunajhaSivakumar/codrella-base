import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';  

const schema = new mongoose.Schema({ 

    username: {
        type: String,
        required:true,
        unique: true,
        minLength : 3,
        maxLength : 255
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    // imageUrl:{
    //     type:String,
    // },
    isGoogle:{
        type : Boolean,
        required : true
    },
    password : {
        type : String,
        required : function(){if(this.isGoogle==true)return false;else return true;},
        minLength :8,
        maxLength :255,
        pattern : /[a-zA-Z0-9.*]/
    },
    // googleId:{
    //     type : String,
    //     required : function(){if(this.isGoogle==true)return true; else return false;}
    // },
    timestamp:{
        type: Date,
        default : Date.now    
    }
})

schema.methods.generateToken = function()
{
    const token = jwt.sign({id : this._id, username: this.username, email: this.email, iss: "Server"}, process.env.PRIVATEKEY);
    return token;
}

const model = mongoose.model('user', schema);

export default model;