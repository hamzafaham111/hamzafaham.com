import React from "react";

const index = () => {
  return (
    <div>
      <div className="py-8">
        <input
          type="text"
          placeholder="Search ..."
          className="w-[500px] p-2 rounded-md shadow-md shadow-pink-600"
        />
      </div>
      <div>
        <h1 className="text-3xl text-pink-200 font-bold leading-none">
          Latest uploaded
        </h1>
        <div className="flex">
          <div className="w-12 mr-1 mt-2 h-0 border border-b-4 border-pink-200"></div>
          <div className="w-2 mt-2 h-0 border border-b-4 border-pink-200"></div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-3/6 h-[300px] bg-gray-900">
            
          </div>
          <div className="w-3/6 h-[300px] bg-gray-900">
            
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl text-pink-200 font-bold mt-8 leading-none">
          Popular Once
        </h1>
        <div className="flex">
          <div className="w-12 mr-1 mt-2 h-0 border border-b-4 border-pink-200"></div>
          <div className="w-2 mt-2 h-0 border border-b-4 border-pink-200"></div>
        </div>
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
