import styladyModel from '../model/stylady.js';
import jwt from 'jsonwebtoken';
export const createLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const oldUser = await styladyModel.findOne({ username });
    console.log(oldUser);
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = oldUser.password === password;

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, 'test', {
      expiresIn: '1h',
    });
    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
