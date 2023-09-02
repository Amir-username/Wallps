import NEXT from "../../assets/NEXTBTN.svg";

function ArrowBtn({ direction }) {
  return (
    <button
      disabled={true}
      className={`bg-teal-600 rounded-md text-white p-2 disabled:bg-gray-400 hover:bg-teal-500 cursor-pointer transfor ${
        direction === "left" && "rotate-180"
      }`}
    >
      <img src={NEXT} alt="next" className="w-6 h-6" />
    </button>
  );
}

export default ArrowBtn;
