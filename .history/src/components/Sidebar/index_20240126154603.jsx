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
          <div className={`fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center ${isSidebarOpen ? 'bg-purple-700' : 'hidden'}`}>
        {/* Toggle button inside sidebar when open */}
        {isSidebarOpen && (
          <span
            className="absolute text-white text-4xl top-5 left-[300px] cursor-pointer"
            onClick={toggleSidebar}
          >
            {"<<"}
          </span>
        )}
        {/* Search bar */}
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-purple-600 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>

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
    className="absolute text-white text-4xl top-5 left-4 cursor-pointer z-20"
    onClick={toggleSidebar}
  >
    {">>"}
  </span>
)}
</div>
    
  );
};

export default Sidebar;
