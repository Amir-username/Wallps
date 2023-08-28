import HomeLoading from "./HomeLoading";
import WallItem from "./WallItem";

function HomePage({ walls }) {
  return (
    <>
      <div className="py-20 px-2.5">
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
      </div>
    </>
  );
}

export default HomePage;
