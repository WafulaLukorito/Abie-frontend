import React, { useState } from 'react';


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar, current state:", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div>
         {/* Sidebar */}
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[150px] overflow-y-auto text-right ${isSidebarOpen ? 'bg-cyan-100' : 'hidden'}`}>
        
        {/* Toggle button inside sidebar when open */}
        {isSidebarOpen && (
          <span
            className="text-white text-2xl z-50 top-0 button-style mt-3 cursor-pointer hover:bg-blue-600 rounded-full py-2 px-4"
            // onClick={toggleSidebar}
          >
            {/* {"x"} */}
          </span>
        )}

        {/* Add a little space after the toggle button */}
        <div className="mt-2"></div>
        {/* Search bar */}
        {/* <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-purple-600 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div> */}

      {/* My ABIE link */}
      <div className=" flex items-center button-style mt-3 cursor-pointer hover:bg-blue-600 text-2xl text-blue-700 rounded-full py-2 px-4">
          <span className="font-bold">My ABIE</span>
        </div>

        {/* ABIE/s */}
        <div className=" flex items-center button-style mt-3 cursor-pointer hover:bg-blue-600 text-2xl text-blue-700 rounded-full py-2 px-4">
          <span className="font-bold">ABIE/s</span>
        </div>

        {/* Upload */}
        <div className=" flex items-center button-style mt-3 cursor-pointer hover:bg-blue-600 text-2xl text-blue-700 rounded-full py-2 px-4">
          <span className="font-bold">Upload</span>
        </div>

        {/* Separator
        <div className="my-4 bg-gray-600 h-[1px]"></div> */}

        
      </div>


{/* Toggle button outside sidebar when closed */}
{!isSidebarOpen && (
  <span
    className="sidebar absolute text-2xl text-blue-700 top-2 left-0 cursor-pointer z-20 bg-purple-700 p-0 rounded-md"
    onClick={toggleSidebar}
  >
    {"Menu"}
  </span>
)}
</div>
    
  );
};

export default Sidebar;
