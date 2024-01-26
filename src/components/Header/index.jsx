import React from "react";
import Image1 from "../../assets/ssbldg00main.png";
import Button from "./Button";
import Links from "./Links";

export default function Header() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex w-1/2 flex-wrap mb-20 py-10 flex-col">
            <h1 className="sm:text-7xl text-8xl font-bold font-medium title-font text-blue-700 lg:w-full lg:mb-0 mb-4">
              A Scalable Platform To Screen For Appraisal Bias
            </h1>
            <ul className="lg:w-2/3 py-5 pl-10 text-indigo-600 font-bold leading-relaxed list-disc text-base">
              <li>Unmask Appraisal Biasing</li>
              <li>Audit Functionality</li>
              <li>Identify Bad Actors</li>
            </ul>
            <Button />
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={Image1}
              />
            </div>
            <div className="flex items-center justify-center w-full gap-4">
              <Links text="Commercial" />
              <Links text="Residential" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-wrap w-1/2">
<div className="md:p-2 p-1 w-1/2">
  <img
    alt="gallery"
    className="w-full object-cover h-full object-center block"
    src="https://dummyimage.com/500x300"
  />
</div>
<div className="md:p-2 p-1 w-1/2">
  <img
    alt="gallery"
    className="w-full object-cover h-full object-center block"
    src="https://dummyimage.com/501x301"
  />
</div>
<div className="md:p-2 p-1 w-full">
  <img
    alt="gallery"
    className="w-full h-full object-cover object-center block"
    src="https://dummyimage.com/600x360"
  />
</div>
</div> */
}
