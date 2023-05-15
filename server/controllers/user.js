import model from '../models/user.js';
import bcrypt from "bcrypt";

export const signup = async (req, res) => {  
    console.log(req.body);
    const user = req.body;

    const oldUserName = await model.findOne({ username: user.username });
    const oldUserMail = await model.findOne({ email: user.email });
    if (oldUserName)
      return res.json({
        success: "false",
        error: "User with the same username already exists",
      }); 
    if (oldUserMail)
      return res.json({
        success: "false",
        error: "User with the same mail already exists. Try logging in.",
      });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const newUser = new model({username : user.username, email : user.email, password: user.password, isGoogle : false});
    try { 
        const result = await newUser.save();
        const token = result.generateToken();
        console.log(result);
        res.send({
          success: "true",
          result: result,
          token: token,
        });
      } catch (error) {
        console.log("Error:",error);
        res.send({ success: "false", error: "Something went wrong" });
      }
} 

export const login = async (req, res) => { 
    const user = req.body;
     const curUser = await model.findOne({$or: [{username : user.username},{email: user.username }]}); 
     if (!curUser)
      return res.send({
        success: false,
        error: "User with this Email/Username not found",
      }); 

    const resultOfSalt = await bcrypt.compare(user.password, curUser.password);
    if (!resultOfSalt)
      return res.send({
        success: false,
        error: "Invalid username or password",
      });

  const token = curUser.generateToken();
  res.send({
    success: "true",
    result: curUser, 
    token: token,
  });
}

