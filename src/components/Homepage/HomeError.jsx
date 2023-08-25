import ERROR from "../../assets/ERROR.svg";

function HomeError() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center animate-pulse">
        <img src={ERROR} alt="" className="w-40 h-40" />
        <p className="text-teal-600 text-lg uppercase font-semibold">
          some error with fetching data...
        </p>
      </div>
    </>
  );
}

export default HomeError;
