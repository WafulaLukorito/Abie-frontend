import React from "react";

export default function Links({text}) {
  return (
    <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
      <span className="ml-4 flex items-start flex-col leading-none">
        <span className="title-font font-medium">{text}</span>
      </span>
    </button>
  );
}
