import { useLocation, useParams } from "react-router-dom";

function WallPage() {
  const location = useLocation();
  const wall = location.state;

  return (
    <>
      <div className="flex items-center justify-center text-black h-screen pt-96 mb-72">
        <div className="flex flex-col pt-10">
          <img src={wall.largeImageURL} alt="" />
          <div className="flex gap-40 items-center justify-center">
            <p>{wall.tags}</p>
            <p>downloads: {wall.downloads}</p>
            <p>likes: {wall.likes}</p>
            <p>comments: {wall.comments}</p>
            <p>downloads: {wall.views}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WallPage;
