import {
  Avatar,
  Button,
  Dropdown,
  DropdownHeader,
  Navbar,
  NavbarCollapse,
  TextInput,
} from "flowbite-react";
import React from "react";
import { toggleTheme } from "../redux/theme/themeSlice.js";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.user);
  const theme = useSelector((state) => state.user.theme.theme);
  const dispatch = useDispatch();
  //console.log(user.createUser.data); // This will log the data related to the createUser action

  return (
    <>
      <Navbar className="border-b-2 ">
        <Link className="text-sm sm:text-2xl font-semibold dark:text-white">
          <span
            className="bg-gradient-to-t bg-indigo-500  via-purple-500 from-pink-700
           px-2 py-1 rounded-lg text-white"
          >
            Aspire
          </span>
          Blog
        </Link>
        <form>
          <TextInput
            className="hidden lg:inline"
            type="text "
            placeholder="Search..."
          ></TextInput>
        </form>
        <Button
          className="w-12 h-10  bg-green-500 rounded-lg  lg:hidden"
          color="gray"
          pill
        >
          <AiOutlineSearch />
        </Button>
        {/* Right  */}
        <div className="flex gap-2  items-center md:order-2">
          <Button
            className="w-12 h-10 rounded border border-none px-2 py-1 "
            color="gray"
            pill
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {/* if light then sun and dark then moon icon */}
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>

          {user.createUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="user"
                  img={user.createUser.data.ProfilePicture}
                  rounded
                />
              }
            >
              <DropdownHeader>
                <span className="block text-sm  ">
                  @{user.createUser.data.Name}
                </span>
                <span className="block text-sm font-medium ">
                  {user.createUser.data.Email}
                </span>
              </DropdownHeader>
              <Link to={"/dash"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>

              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/signin">
              <Button className=" bg-gradient-to-tr from-purple-700 via-pink-500 to-purple-500 px-2 py-1">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        <ul className="flex gap-3 font-sans">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/projects">Project</Link>
          </li>
        </ul>
      </Navbar>
    </>
  );
}

export default Header;
