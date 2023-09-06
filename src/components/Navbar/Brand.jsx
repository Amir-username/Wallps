import { Link } from "react-router-dom";

function Brand() {
  return (
    <>
      <Link to={"/"}>
        <div className="flex gap-1 cursor-pointer items-center justify-center w-full">
          <p className="w-10 h-10 rounded-md bg-teal-500 font-bold pt-1 text-white text-center text-2xl">
            W
          </p>
          <span className="text-teal-500 p-1.5 text-lg font-semibold">
            wallps
          </span>
        </div>
      </Link>
    </>
  );
}

export default Brand;
