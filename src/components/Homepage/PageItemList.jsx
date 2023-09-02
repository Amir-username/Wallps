import PageItem from "./PageItem";
import ArrowBtn from "./ArrowBtn";

function PageItemList() {
  return (
    <div className="flex items-center justify-center mt-4 gap-1">
      <ArrowBtn direction={"left"} />
      <PageItem number={1} />
      <ArrowBtn direction={"right"} />
    </div>
  );
}

export default PageItemList;
