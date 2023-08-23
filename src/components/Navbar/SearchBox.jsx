import search from "../../assets/SEARCHBOX.svg";

function SearchBox() {
  return (
    <>
      <div className="flex gap-1 p-2 m-1 md:ml-10 w-fit bg-gray-100 rounded-lg">
        <img src={search} className="w-6 h-6 mt-0.5" />
        <input
          className="bg-gray-100 text-lg p-1 focus:outline-none text-gray-500"
          type="search"
          placeholder="search walls"
        />
      </div>
    </>
  );
}

export default SearchBox;
