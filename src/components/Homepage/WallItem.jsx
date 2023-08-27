import { useState } from "react";

function WallItem({ wall }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
      className="flex flex-col gap-1"
    >
      <figure className="relative max-w-sm cursor-pointer">
        <img className="w-96 hover:filter hover:brightness-50 duration-200 h-64 rounded-md" src={wall.webformatURL} />
          <figcaption className={`${!showDetail && 'hidden'} absolute px-4 text-lg text-white bottom-6`}>
            <p className="font-serif text-teal-200">{wall.tags}</p>
            <p className="font-serif"><span className="text-teal-600">by</span>  <span className="font-semibold">{wall.user}</span></p>
          </figcaption>
      </figure>
    </div>
  );
}

export default WallItem;
