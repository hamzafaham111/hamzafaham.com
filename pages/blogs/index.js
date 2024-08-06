'use client'
import React from "react";
import Caracol from "../../components/Carasol.js/freeScroll";
const index = () => {
  return (
    <div>
      <div className="py-8">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full md:w-[500px] p-2 rounded-md shadow-md"
        />
      </div>
      <div className="mb-8">
        <h1 className="text-3xl text-gray-100 font-semibold leading-none mb-4">
          Latest uploaded
        </h1>
        <Caracol/>
      </div>
      <div className="pb-8">
        <h1 className="text-3xl text-gray-100 font-semibold leading-none mb-4">
          Most Popular
        </h1>
        <Caracol/>
      </div>
    </div>
  );
};

export default index;
