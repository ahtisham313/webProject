import loginModel from "../model/login.js";
export const createLogin = async (res, req) => {
  console.log("Controller Reached");
  console.log(req.body);
    const user = req.body;
    const newApplicant = new loginModel(user);
    try {
      await newApplicant.save();
      res.json(newApplicant);
    } catch (error) {
      console.log("not saved...");
    } 
};
