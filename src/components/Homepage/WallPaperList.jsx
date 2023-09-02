import WallItem from "./WallItem";

function WallpaperList({ walls }) {
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
    </>
  );
}

export default WallpaperList;
