import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="bg-amber-500 mb-4 rounded-lg overflow-hidden shadow-2xl">
      <img src={image} alt={name} />
      <div className="px-4 py-4 space-y-4">
        <div className="flex justify-between">
          <h4 className="text-white">{name}</h4>
          <h4 className="bg-amber-400 px-2 text-white font-semibold rounded-lg">
            ${price}
          </h4>
        </div>
        <p className="text-white">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="text-amber-900 ml-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="text-white bg-amber-400 px-4 py-2 rounded-lg"
          onClick={() => removeTour(id)}
        >
          Not Interestes
        </button>
      </div>
    </div>
  );
};

export default Tour;
