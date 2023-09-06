import { useLocation, useParams } from "react-router-dom";

function WallPage() {
  const location = useLocation();
  const wall = location.state;

  return (
    <>
      <div className="flex items-center justify-center text-black h-screen md:pt-96 pt-52 md:mb-72">
        <div className="flex flex-col md:pt-32 gap-8 justify-center items-center pb-8">
          <img
            className="rounded-lg md:shadow-xl shadow-md shadow-teal-700 md:w-auto md:h-auto w-96 h-64"
            src={wall.largeImageURL}
            alt=""
          />
          <div
            className="flex md:flex-row flex-col md:gap-40 space-y-8 md:space-y-0 md:w-auto md:h-auto items-center justify-center shadow-md
           shadow-teal-400 ring-1 ring-teal-200 md:rounded-full rounded-xl md:p-8 p-10 text-teal-700 md:text-xl text-lg"
          >
            <p>
              <span className="font-semibold">{wall.tags}</span>
            </p>
            <p>
              downloads <span className="font-bold">{wall.downloads}</span>
            </p>
            <p>
              likes <span className="font-bold">{wall.likes}</span>
            </p>
            <p>
              comments <span className="font-bold">{wall.comments}</span>
            </p>
            <p>
              views <span className="font-bold">{wall.views}</span>
            </p>
          </div>
          <a
            className="shadow-md hover:shadow-none shadow-teal-500 bg-teal-600 text-white rounded-full font-bold uppercase p-5 hover:bg-teal-500"
            href={wall.largeImageURL}
            target="_blank"
          >
            download image
          </a>
        </div>
      </div>
    </>
  );
}

export default WallPage;
