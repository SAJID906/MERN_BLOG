import axios from "axios";
import { Alert, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignInFailur, SignInSuccess } from "../redux/user/userSlice";

function Signin() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  // Error handling state
  const { error: errormessage } = useSelector((state) => state.user);
  // usedispatch to send or update to store
  const dispatch = useDispatch();
  // For successful signup nevigate to login
  const navigate = useNavigate();
  // use Dispatch use reducer to send value to store
  const handler = async (e) => {
    e.preventDefault();
    // Validation check
    if (!formData.Email || !formData.Password) {
      dispatch(SignInFailur("Please fill out all fields"));
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/login/login",
        formData
      );
      // if signup successful then Navigate to login
      setTimeout(() => {
        if (response) {
          navigate("/");
        }
      }, 2000);
      if (response.data) {
        console.log(response);
        dispatch(SignInSuccess(response.data));
      }
      setFormData({
        Email: "",
        Password: "",
      });
    } catch (error) {
      dispatch(SignInFailur(error.response.data.message));
      setFormData({
        Email: "",
        Password: "",
      });
    }
  };
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex max-w-3xl m-auto flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <Link className="  font-bold dark:text-white text-4xl">
              <span
                className="bg-gradient-to-t bg-indigo-500  via-purple-500 from-pink-700
           px-2 py-1 rounded-lg text-white"
              >
                Aspire
              </span>
              Blog
            </Link>
            <p className="mt-5 text-sm">
              This is a Mern Blog Project .You can sign in with your email and
              password
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                {" "}
                <Label value="Your Email" />
                <TextInput
                  type="text"
                  name="email"
                  value={formData.Email}
                  placeholder="Email"
                  onChange={(e) =>
                    setFormData({ ...formData, Email: e.target.value })
                  }
                />
              </div>
              <div>
                {" "}
                <Label value="Your Password" />
                <TextInput
                  type="text"
                  className="w-full"
                  name="password"
                  value={formData.Password}
                  placeholder="********"
                  onChange={(e) =>
                    setFormData({ ...formData, Password: e.target.value })
                  }
                />
              </div>
              <div
                onClick={handler}
                className=" text-center bg-gradient-to-tr from-red-800 via-purple-700 to-pink-600 
              font-semibold py-1 rounded-lg text-white"
              >
                SignIn
              </div>
              {errormessage && (
                <div
                  className="bg-gradient-to-t bg-red-600 via-purple-600
                 from-pink-500 font-bold text-white text-center py-1 rounded-lg "
                >
                  {errormessage}
                </div>
              )}
              <p>
                Don't have an account?
                <span className="text-blue-600">
                  <Link to="/signup">SignUp</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
