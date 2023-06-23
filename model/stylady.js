import mongoose from "mongoose";

const styladyStructure = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirmPassword:String
});

const styladyModel = mongoose.model("stylady", styladyStructure);
export default styladyModel;


// const styladyStructure2 = mongoose.Schema({
//     username: String,
//     // email: String,
//     password: String,
//     // confirmPassword:String
//   });
  
//   const stylady2Model = mongoose.model("stylady", styladyStructure2);
//   export default stylady2Model ;styladyModel;