import search from "../../assets/SEARCHBOX.svg";

function SearchBox({setSearch}) {
  return (
    <>
      <div className="flex gap-1 md:p-2 m-1 md:ml-10 md:w-fit bg-gray-100 md:rounded-lg rounded-md">
        <img src={search} className="w-6 h-6 mt-2 pl-1 md:mt-0.5" />
        <input
        onChange={(e)=>setSearch(e.target.value)}
          className="bg-gray-100 text-lg p-1 md:w-96 focus:outline-none text-gray-500"
          type="search"
          placeholder="search walls"
        />
      </div>
    </>
  );
}

export default SearchBox;
