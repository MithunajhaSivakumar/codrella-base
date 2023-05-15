import Joi from 'joi';
 
const userNameRule = Joi.string().min(3).required().pattern(new RegExp(/^[a-zA-Z0-9_. ]+$/))
.message({"string.pattern.base":"userName must contain only Alphabets"});
const passRule = Joi.string().min(8);
const emailRule = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'edu','in'] } }).required(); 


const schemas =  {  
  
  userRegister: Joi.object().keys({ 
    username: userNameRule,
    email: emailRule,
    password: passRule,
    cPassword: passRule,
  })
}; 
export default schemas;

