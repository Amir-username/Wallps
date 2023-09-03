import { useState } from "react";
import LIKE from "../../assets/LIKE.svg";
import LIKE_UN from "../../assets/LIKE_UN.svg";
import COMMENT from "../../assets/COMMENTS.svg";

function WallItem({ wall }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
      className="flex flex-col gap-1"
    >
      <figure className="relative max-w-sm cursor-pointer">
        <img
          className={`w-96 h-64 hover:filter hover:brightness-50 duration-200 rounded-md`}
          src={wall.webformatURL}
        />
        <figcaption
          className={`${
            !showDetail && "hidden"
          } absolute px-4 text-lg text-white bottom-6`}
        >
          <div className={`flex ${wall.tags.length < 30 ? "gap-32" : "gap-4"}`}>
            <div className="flex flex-col gap-1">
              <p className="font-serif text-teal-200">{wall.tags}</p>
              <p className="font-serif">
                <span className="text-teal-600">by</span>{" "}
                <span className="font-semibold">{wall.user}</span>
              </p>
            </div>
            <div className="flex flex-col mt-3">
              <div className="flex gap-1">
                <img src={LIKE} alt="like" className="w-6 h-6" />
                <span className="text-sm font-bold mt-0.5 text-teal-400">{wall.likes}</span>
              </div>
              <div className="flex gap-1">
                <img src={COMMENT} alt="like" className="w-6 h-6" />
                <span className="text-sm font-bold mt-0.5">
                  {wall.comments}
                </span>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default WallItem;
