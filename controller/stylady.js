import styladyModel from "../model/stylady.js";







export const createApplication = async (req, res) => {
  console.log("Controller Reached");
  console.log(req.body);
  const user = req.body;
  console.log(user);
  const newApplicant = new styladyModel(user);
  try {
    await newApplicant.save();
    res.json(newApplicant);
  } catch (error) {
    console.log("not saved...");
  }
};
