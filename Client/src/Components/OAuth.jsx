import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
function OAuth() {
  const auth = getAuth(app);
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultFromGoogle);
    } catch (error) {
      console.log(error);
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
