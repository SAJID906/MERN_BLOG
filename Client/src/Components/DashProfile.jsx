import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
function DashProfile() {
  const { createUser } = useSelector((state) => state.user.user);

  console.log("hi create", createUser);
  return (
    <>
      <div className="max-w-lg mx-auto p-3 w-full ">
        <h1 className=" text-center font-semibold text-3xl">Profile Picture</h1>
        <form className="flex flex-col gap-3">
          <div className="w-32 h-32 self-center ">
            <img
              src={createUser.data.ProfilePicture}
              alt=""
              className="rounded-full w-full h-full object-cover  border-8 border-[Lightgray]"
            />
          </div>
          <TextInput
            type="text"
            id="username"
            placeholder="Username"
            defaultValue={createUser.data.Name}
          />
          <TextInput
            type="email"
            id="usermail"
            placeholder="Usermail"
            defaultValue={createUser.data.Email}
          />
          <TextInput type="password" placeholder="******" />
          <Button
            className="bg-gradient-to-tr  bg-indigo-500  via-purple-500 from-pink-700
           px-2 py-1 rounded-lg text-white "
          >
            Update
          </Button>
          <div className=" text-red-500 flex justify-between mt-5">
            <span>Delete Account</span>
            <span>Sign Out</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default DashProfile;
