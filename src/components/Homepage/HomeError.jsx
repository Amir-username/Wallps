import ERROR from "../../assets/ERROR.svg";

function HomeError() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center animate-pulse">
        <img src={ERROR} alt="" className="w-20 h-20 md:w-40 md:h-40" />
        <p className="text-teal-600 text-sm md:text-lg uppercase font-semibold">
          some error with fetching data...
        </p>
      </div>
    </>
  );
}

export default HomeError;
