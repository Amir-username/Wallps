import PageItem from "./PageItem";
import NEXT from "../../assets/NEXTBTN.svg";

function PageItemList() {
  return (
    <div className="flex items-center justify-center mt-4 gap-1">
      <button disabled={true} className="bg-teal-600 rounded-md text-white p-2 disabled:bg-gray-400 hover:bg-teal-500 cursor-pointer transfor rotate-180">
        <img src={NEXT} alt="next" className="w-6 h-6" />
      </button>
      <PageItem number={1}/>
      <button disabled={true} className="bg-teal-600 rounded-md disabled:bg-gray-400 text-white p-2 hover:bg-teal-500 cursor-pointer">
        <img src={NEXT} alt="next" className="w-6 h-6" />
      </button>
    </div>
  );
}

export default PageItemList;
