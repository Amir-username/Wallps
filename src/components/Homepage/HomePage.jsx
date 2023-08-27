import HomeLoading from "./HomeLoading";
import WallItem from "./WallItem";

function HomePage({ walls }) {
  return (
    <>
      <div className="py-20 px-2.5">
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {walls.map((wall) => {
            return (
                <WallItem wall={wall} key={wall.id}/>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
