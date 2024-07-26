import React from "react";
import Caracol from "../../components/Carasol.js/freeScroll";
const index = () => {
  return (
    <div>
      <div className="py-8">
        <input
          type="text"
          placeholder="Search ..."
          className="w-[500px] p-2 rounded-md shadow-md"
        />
      </div>
      <div>
        <h1 className="text-3xl text-gray-100 font-semibold leading-none mb-4">
          Latest uploaded
        </h1>
        <Caracol/>
      </div>
      <div className="">
        <h1 className="text-3xl text-gray-100 font-semibold mt-8 leading-none">
          Most Popular
        </h1>
        <div className="flex gap-2 mt-4">
          <div className="w-3/6 h-[300px] bg-gray-900 duration-700 ease-in-out">
            
          </div>
          <div className="w-3/6 h-[300px] bg-gray-900 duration-700 ease-in-out">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
