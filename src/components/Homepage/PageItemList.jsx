import PageItem from "./PageItem";
import ArrowBtn from "./ArrowBtn";

function PageItemList({ pageNum, setPageNum }) {
  return (
    <div className="flex items-center justify-center mt-4 gap-1">
      <ArrowBtn direction={"left"} setPageNum={setPageNum} pageNum={pageNum} />
      <PageItem number={pageNum} />
      <ArrowBtn direction={"right"} setPageNum={setPageNum} pageNum={pageNum} />
    </div>
  );
}

export default PageItemList;
