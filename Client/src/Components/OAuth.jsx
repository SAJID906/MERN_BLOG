import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SignInSuccess } from "../redux/user/userSlice";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const auth = getAuth(app);
  // For successful signup nevigate to login
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      const response = await axios.post(
        "http://localhost:5000/auth/auth",
        {
          Name: resultsFromGoogle.user.displayName,
          Email: resultsFromGoogle.user.email,
          googlephotoUrl: resultsFromGoogle.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        dispatch(SignInSuccess(response));
        navigate("/");
      }
    } catch (error) {
      console.log("Error:", error.response.data);
    }
  };
  return (
    <>
      <Button
        type="button"
        className="bg-gradient-to-t bg-slate-800 via-blue-400 to-pink-700"
        onClick={handleGoogleClick}
      >
        <AiFillGoogleCircle className="w-6 h-5 mr-2" />{" "}
        <span>Continue With Google</span>
      </Button>
    </>
  );
}

export default OAuth;
