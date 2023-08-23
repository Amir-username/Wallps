import Brand from "./Brand";
import SearchBox from "./SearchBox";

export default function NavBar() {
  return (
    <>
      <div className="flex space-x-3 md:space-x-16 justify-start p-2 bg-gray-50 w-screen h-16 shadow-lg shadow-gray-200">
        <Brand />
        <SearchBox />
        {/* <Brand />
        <SearchBar />
        <Categories /> */}
      </div>
    </>
  );
}
