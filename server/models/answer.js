import mongoose from 'mongoose'; 

const schema = new mongoose.Schema({ 
    testId : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true 
    },
    answer : {
        type : String,
        required : true
    }
});


const model = mongoose.model('answer', schema);

export default model;