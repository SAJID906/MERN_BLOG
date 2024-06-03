import { User } from "../model/model.signup.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const SignUp = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const user = await User.findOne({ Email });
    if (user) {
      return res.status(400).json({ message: "User All ready Register" });
    }
    const hashpassword = await bcrypt.hash(Password, 10);
    const createUser = await new User({
      Name,
      Email,
      Password: hashpassword,
    });
    await createUser.save();
    // also respone the email,password,etc
    return res
      .status(200)
      .json({
        success:true,
        message: "User Register Successfully",
        user: {
          id: createUser._id,
          name: createUser.Name,
          email: createUser.Email,
          password: createUser.Password,
        },
      });
  } catch (error) {
    console.log(error);
  }
};
// Login Controller
export const LogIn = async (req, res) => {
  const { Password, Email } = req.body;
  const user = await User.findOne({ Email });
  const isMatch = user && (await bcrypt.compare(Password, user.Password));
  if (!isMatch) {
    return res.status(301).json({ message: "Incorrect Email and Password" });
  }
  const token = jwt.sign({ UserId: user._id }, process.env.jwt_secretkey);
  return res
    .status(200)
    .json({
      success: true,
      message: "login successful",
      user: { Name: user.Name, Password: user.Password },
      token,
    });
};
