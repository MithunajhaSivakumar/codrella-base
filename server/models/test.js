import mongoose from 'mongoose'; 

const schema = new mongoose.Schema({ 
    title : {
        type : String, 
        required : true
    },
    question : { 
        type : [String],
        required : true
    },
    startTime : {
        type : Date,
        default : Date.now()
    },
    endTime : {
        type : Date,
        default : Date.now()
    },
    points : {
        type : Number,
        required : false
    }
});

const model = mongoose.model('test', schema);

export default model;