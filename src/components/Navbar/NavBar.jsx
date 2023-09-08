import {
  categories,
  colors,
  imageType,
  order,
  orientation,
} from "../../models/models";
import Brand from "./Brand";
import Categories from "./Categories";
import Category from "./Category";
import NavDropDown from "./NavDropDown";
import SearchBox from "./SearchBox";
import MENU from "../../assets/MENU.svg";
import { useEffect, useState } from "react";
import SUN from "../../assets/SUN.svg";
import MOON from "../../assets/MOON.svg";

export default function NavBar({ dispatch, setSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      setTimeout('document.documentElement.className = "dark"', 500);
    } else {
      setTimeout('document.documentElement.className = "light"', 500);
    }
  }, [isDark]);

  return (
    <>
      <div
        className="flex space-x-3 z-40 fixed md:space-x-20 justify-start p-2 bg-gray-50 dark:bg-gray-900 
      w-screen h-16 shadow-md shadow-gray-300 dark:shadow-teal-700 dark:shadow-none"
      >
        <Brand />
        <SearchBox setSearch={setSearch} />

        <div className="hidden md:visible md:flex gap-10">
          <NavDropDown
            items={categories}
            name={"category"}
            dispatch={dispatch}
          />
          <NavDropDown items={colors} name={"colors"} dispatch={dispatch} />
          <NavDropDown items={order} name={"order"} dispatch={dispatch} />
          <NavDropDown
            items={imageType}
            name={"image_type"}
            dispatch={dispatch}
          />
        </div>
        <div className="md:hidden flex items-end justify-end w-screen">
          <img
            onClick={() => setIsOpen((o) => !o)}
            src={MENU}
            alt=""
            className="w-16 h-16 pr-3 pt-2.5 cursor-pointer"
          />
        </div>
        <div className="flex justify-end items-end w-52 pb-0.5">
          {!isDark ? (
            <img
              src={SUN}
              alt="light"
              className="w-10 h-10 cursor-pointer"
              onClick={() => setIsDark((d) => !d)}
            />
          ) : (
            <img
              src={MOON}
              alt="dark"
              className="w-7 h-7 cursor-pointer mb-2 mr-0.5"
              onClick={() => setIsDark((d) => !d)}
            />
          )}
        </div>
      </div>
      <div className={`${!isOpen ? "hidden" : ""} md:hidden pt-16`}>
        <div className="space-y-1 p-2.5 w-screen bg-teal-700 dark:bg-gray-800 flex flex-col">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <NavDropDown
            items={categories}
            name={"category"}
            dispatch={dispatch}
          />
          <NavDropDown items={colors} name={"colors"} dispatch={dispatch} />
          <NavDropDown items={order} name={"order"} dispatch={dispatch} />
          <NavDropDown
            items={imageType}
            name={"image_type"}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
}
