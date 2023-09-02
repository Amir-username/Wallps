import HomeLoading from "./HomeLoading";
import PageItem from "./PageItem";
import PageItemList from "./PageItemList";
import WallItem from "./WallItem";
import WallpaperList from "./WallPaperList";

function HomePage({ walls }) {
  return (
    <>
      <div className="py-20 px-2.5">
       <WallpaperList walls={walls}/>
       <PageItemList />
      </div>
    </>
  );
}

export default HomePage;
