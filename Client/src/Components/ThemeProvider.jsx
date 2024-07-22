import React from "react";
import { useSelector } from "react-redux";
function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.user.theme.theme);
  console.log(theme);
  return (
    <div className={theme}>
      <div className=" text-gray-700 dark:text-gray-200 dark:bg-[hsla(0,0%,6%,1)] min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default ThemeProvider;
