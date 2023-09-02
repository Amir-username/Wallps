import WallItem from "./WallItem";

function WallpaperList({walls}) {
  return (
    <>
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {walls !== "" ? (
        walls.map((wall) => {
          return <WallItem wall={wall} key={wall.id} />;
        })
      ) : (
        <div className="flex items-center justify-center h-screen">
          please search something...
        </div>
      )}
    </div>
    <div className="w-full h-1 bg-slate-600"></div>
    </>
  );
}

export default WallpaperList;
