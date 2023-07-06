import mongoose from "mongoose";
const loginStructure = mongoose.Schema({
        username: String,
        // email: String,
        password: String,
        // confirmPassword:String
      });
    
      const loginModel = mongoose.model("login", loginStructure);
      export default loginModel;