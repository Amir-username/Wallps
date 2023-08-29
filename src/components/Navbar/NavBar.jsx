import { categories, colors, order } from "../../models/models";
import Brand from "./Brand";
import Categories from "./Categories";
import Category from "./Category";
import NavDropDown from "./NavDropDown";
import SearchBox from "./SearchBox";

export default function NavBar({ setSearch }) {
  return (
    <>
      <div className="flex space-x-3 z-50 fixed md:space-x-20 justify-start p-2 bg-gray-50 w-screen h-16 shadow-md shadow-gray-300">
        <Brand />
        <SearchBox setSearch={setSearch} />
        <div className="flex gap-10">
          <NavDropDown items={categories} name={"categories"} />
          <NavDropDown items={colors} name={"colors"} />
          <NavDropDown items={order} name={"order"} />
        </div>
        {/* <Categories /> */}
      </div>
    </>
  );
}
