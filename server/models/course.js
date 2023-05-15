import mongoose from 'mongoose'; 

const schema = new mongoose.Schema({ 
    courseId:{
        type : String,
        required : true,
        length : 6,
        pattern : /[a-zA-Z0-9.*]/
    },
    courseName : { 
        type : String,
        required : true,
    },
    class : {
        type : String,
        required : true,
    },
    teacher : {  
        type: [String], 
        required : true
    },
    student : { 
        type: [String], 
        default : []
    }    
});


const model = mongoose.model('course', schema);

export default model;