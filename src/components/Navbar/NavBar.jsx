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
import { useState } from "react";

export default function NavBar({ dispatch, setSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex space-x-3 z-40 fixed md:space-x-20 justify-start p-2 bg-gray-50 w-screen h-16 shadow-md shadow-gray-300">
        <Brand />
        {/* <SearchBox setSearch={setSearch} /> */}

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
        <div
          className="md:hidden flex items-end justify-end w-screen"
          onClick={() => setIsOpen((o) => !o)}
        >
          <img
            src={MENU}
            alt=""
            className="w-16 h-16 pr-3 pt-2.5 cursor-pointer"
          />
        </div>
      </div>
      <div className={`${!isOpen ? 'hidden' : ''} pt-16`}>
        <div className="space-y-1 p-2.5 w-screen bg-teal-700 flex flex-col">
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
