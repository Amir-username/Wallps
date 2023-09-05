import HomeHeader from "./HomeHeader";
import HomeLoading from "./HomeLoading";
import PageItem from "./PageItem";
import PageItemList from "./PageItemList";
import WallItem from "./WallItem";
import WallpaperList from "./WallPaperList";

function HomePage({ walls, pageNum, setPageNum, totalPages, search }) {
  return (
    <>
      <div className="py-20 px-2.5">
      <HomeHeader search={search}/>
       <WallpaperList walls={walls}/>
       <PageItemList  pageNum={pageNum} setPageNum={setPageNum} totalPages={totalPages}/>
      </div>
    </>
  );
}

export default HomePage;
