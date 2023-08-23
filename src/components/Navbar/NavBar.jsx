import Brand from "./Brand";
import Categories from "./Categories";
import Category from "./Category";
import SearchBox from "./SearchBox";

export default function NavBar() {
  return (
    <>
      <div className="flex space-x-3 fixed md:space-x-20 justify-start p-2 bg-gray-50 w-screen h-16 shadow-lg shadow-gray-200">
        <Brand />
        <SearchBox />
        <Categories />
      </div>
    </>
  );
}
