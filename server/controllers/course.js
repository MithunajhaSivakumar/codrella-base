import userModel from '../models/user.js';  
import courseModel from '../models/course.js';  


export const createClass = async (req, res) => {
    console.log('class details:', req.body);
    const isIdAlreadyExists = await courseModel.findOne({courseId: req.courseId}); 
    if (isIdAlreadyExists)
      return res.send({
        success: "false",
        error: "Same courseId Already Exists",
      });  
    const newCourse = new courseModel({courseId: req.courseId, courseName: req.courseName, class : req.class, teacher: req.userId});
    try { 
        const result = await newCourse.save(); 
        console.log(result);
        res.send({
          success: "true", 
          result : "course added successfully"
        });
      } catch (error) {
        console.log("Error:",error);
        res.send({ success: "false", error: "Something went wrong" });
      } 
}
export const joinClass = async (req, res) => {
    console.log(req.body);
    const result = await courseModel.findOneAndUpdate({courseId : req.courseId}, {});
}