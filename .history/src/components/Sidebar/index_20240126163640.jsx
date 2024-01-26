import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar, current state:", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
         {/* Sidebar */}
         <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[200px] overflow-y-auto text-center ${isSidebarOpen ? '' : 'hidden'}`}
           style={{ background: 'linear-gradient(to right, #6dd5ed, #2193b0)' }} // Gradient background
        
        {/* Toggle button inside sidebar when open */}
        {isSidebarOpen && (
          <span
            className="text-white text-2xl cursor-pointer z-50 top-0"
            onClick={toggleSidebar}
          >
            {"x"}
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
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">My ABIE</span>
        </div>

        {/* ABIE/s */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">ABIE/s</span>
        </div>
        {/* Upload*/}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Upload</span>
        </div>

        {/* Separator */}
        <div className="my-4 bg-gray-600 h-[1px]"></div>

        
      </div>


{/* Toggle button outside sidebar when closed */}
{!isSidebarOpen && (
  <span
    className="sidebar absolute text-white text-4xl top-5 left-4 cursor-pointer z-20 bg-purple-700 p-2 rounded-md"
    onClick={toggleSidebar}
  >
    {">>"}
  </span>
)}
</div>
    
  );
};

export default Sidebar;
