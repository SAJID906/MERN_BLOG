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
// OAuth Login
export const OAuthLoing=async(req,res)=>{
  const{Name,Email,googlePhotoUrl}=req.body;
  

 try{
  // findOne() returns a document that only contains the projection fields
  const user=await User.findOne({Email});
  // if user exit already in db
  if(user){
    
   const token = jwt.sign({ UserId: user._id }, process.env.jwt_secretkey);
  //this show remove the password form document and and show all other in rest 
   const{Password,...rest}=user._doc 
  return res.status(200).cookie('access_token',token,{
    httpOnly:true

  }).json(rest);
}
// not user exit then createUser
else{
  // create random password becuse modle schema hava password fileds
  // slice(-8) A negative number selects from the end of the string.
  const generatePassword=Math.random().toString(36).slice(-8);
  // "hash" is asynchronous and hashSync is synschronous.
  const hashpassword=await bcrypt.hash(generatePassword,10)
  const createUser= await new User({
    Name,
    Email,
    Password:hashpassword,
    ProfilePicture:googlePhotoUrl
  })
  await createUser.save();
  
  const token = jwt.sign({ UserId: createUser._id }, process.env.jwt_secretkey);
//  remove password from createuser and show other document
  const{Password,...rest}=createUser._doc;
  res.status(200).cookie("access_token",token,{
    httpOnly:true}
  ).json(rest)
}

 }catch(error){
  console.log(error);
 }

}

