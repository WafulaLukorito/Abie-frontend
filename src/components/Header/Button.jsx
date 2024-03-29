import React from "react";

export default function Button() {
  return (
    <div className="flex w-full md:justify-start justify-center items-end">
      <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
        <input
          type="text"
          id="hero-field"
          name="hero-field"
          className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Sign Up
      </button>
    </div>
  );
}
